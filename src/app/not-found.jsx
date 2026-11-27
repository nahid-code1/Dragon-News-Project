"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NotFoundPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16 dark:bg-slate-950">
      <div className="w-full max-w-xl text-center">
        {/* Big 404 */}
        <p
          aria-hidden="true"
          className="select-none text-[8rem] font-semibold leading-none tracking-tighter text-slate-200 sm:text-[11rem] dark:text-slate-800"
        >
          404
        </p>

        {/* Message */}
        <h1 className="-mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          We cannot find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">
          The link may be broken, or the page may have been moved or removed.
          Check the address, or head back to somewhere familiar.
        </p>

        {/* Show the address that failed */}
        {pathname && (
          <div className="mx-auto mt-6 flex max-w-full items-center justify-center">
            <code className="truncate rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              {pathname}
            </code>
          </div>
        )}

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto"
          >
            Back to home
          </Link>
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Go to previous page
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
