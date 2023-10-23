"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="text-center">
      <p className="mt-10">Sorry, an error occurred.</p>
      <Link href="/">← Back to home</Link>
    </div>
  );
}
