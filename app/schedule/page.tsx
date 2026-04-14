import Link from "next/link";

export default function Schedule() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Simple Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-zinc-200 sm:px-12">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Oakley Counseling</span>
        </Link>
        <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-teal-600 transition-colors">
          Back to Home
        </Link>
      </nav>

      <main className="flex-1 flex flex-col items-center py-12 px-6">
        <div className="max-w-4xl w-full text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Schedule Your Conversation</h1>
          <p className="mt-4 text-zinc-600">
            Pick a time that works for you. No intake forms or clinical referrals required.
          </p>
        </div>

        <div className="w-full max-w-5xl bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden min-h-[700px]">
          <iframe
            src={process.env.NEXT_PUBLIC_CALENDLY_LINK || "https://calendly.com"}
            width="100%"
            height="700"
            frameBorder="0"
          ></iframe>
        </div>

        <p className="mt-8 text-sm text-zinc-500 max-w-md text-center">
          Can't find a time that works? <a href="mailto:support@truenorth.com" className="text-teal-600 underline">Email us</a> and we'll find a way to fit you in.
        </p>
      </main>

      <footer className="py-8 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Oakley Counseling. All sessions are private and secure.
      </footer>
    </div>
  );
}
