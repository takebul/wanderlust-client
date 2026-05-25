"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-950 via-purple-950 to-slate-900 px-4 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500/10 ring-1 ring-red-400/20">
          <span className="text-4xl">⚠️</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          An unexpected error occurred while loading this page. Please try again
          or return to the homepage.
        </p>

        {/* Optional Error Message */}
        {error?.message && (
          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-left text-sm text-red-200">
            {error.message}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/25"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-10 text-sm text-slate-400">
          System Error • Please refresh the page if the issue persists
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
