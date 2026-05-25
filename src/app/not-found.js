import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <span className="text-3xl font-bold text-indigo-300">404</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Go back home
            </Link>
          </div>

          <div className="mt-10 text-sm text-slate-400">
            Error code: <span className="font-medium text-slate-200">404</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
