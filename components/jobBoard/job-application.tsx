"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Enter valid email.",
  }),
  phone: z
    .string()
    .regex(phoneRegExp, { message: "Invalid phone number." })
    .min(5, { message: "Phone must contain at least 5 characters." })
    .max(16, { message: "Phone must contain at most 16 characters." }),
  resumeUrl: z.string().url({ message: "Invalid url." }),
  linkedinUrl: z
    .string()
    .url({ message: "Invalid url." })
    .optional()
    .or(z.literal("")),
  githubUrl: z
    .string()
    .url({ message: "Invalid url." })
    .optional()
    .or(z.literal("")),
  jobId: z.string(),
});

const JobApplication = ({
  jobId,
  jobTitle,
}: {
  jobId: string;
  jobTitle: string;
}) => {
  const router = useRouter();
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      resumeUrl: "",
      linkedinUrl: "",
      githubUrl: "",
      jobId,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      values.jobId = jobId;

      const {
        data: { message, status, application },
      } = await axios.post("/api/applications", values);


      form.reset();
      toast({
        variant: status === 200 ? "success" : "destructive",
          title: "Application Status: ",
          description: message,
        });
    router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col font-mono">
      <h1 className="mb-3">
        Please fill the form to apply for <b>{jobTitle}</b> role.(ID: {jobId})
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-x-3 gap-y-5 justify-between mb-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="inline w-full md:w-1/2">
                  <FormLabel className="text-sm font-bold">Name *</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="inline  w-full md:w-1/2">
                  <FormLabel className="text-sm font-bold">Email *</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-x-3 gap-y-5 justify-between mb-5">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="inline w-full md:w-1/2">
                  <FormLabel className="text-sm font-bold">Phone *</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter your phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resumeUrl"
              render={({ field }) => (
                <FormItem className="inline w-full md:w-1/2">
                  <FormLabel className="text-sm font-bold">
                    Resume URL *
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter your resume's URL"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-x-3 gap-y-5 justify-between mb-5">
            <FormField
              control={form.control}
              name="linkedinUrl"
              render={({ field }) => (
                <FormItem className="inline w-full md:w-1/2">
                  <FormLabel className="text-sm font-bold">
                    LinkedIn URL
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter your LinkedIn URL"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="githubUrl"
              render={({ field }) => (
                <FormItem className="inline w-full md:w-1/2">
                  <FormLabel className="text-sm font-bold">
                    Github URL
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter your Github URL"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isLoading} className="w-1/3 m-auto">
            SUBMIT
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default JobApplication;
