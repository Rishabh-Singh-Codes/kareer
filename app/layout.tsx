import { cn } from "@/lib/utils";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import TopBar from "@/components/appBar/top-bar";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kareer",
  description: "Kareer is a platform for candidates to find and apply for jobs that match their skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col items-center justify-between",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-5xl w-full p-5 font-mono">
          <TopBar />
          {children}
          <Toaster />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
