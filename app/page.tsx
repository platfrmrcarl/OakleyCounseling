import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-zinc-200 sm:px-12">
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
        <div className="hidden sm:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-zinc-600 hover:text-teal-600 transition-colors">How it Works</a>
          <a href="#faq" className="text-sm font-medium text-zinc-600 hover:text-teal-600 transition-colors">FAQ</a>
          <Link
            href="/schedule"
            className="px-5 py-2 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all shadow-sm shadow-teal-200"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-6 pt-20 pb-24 overflow-hidden sm:px-12 lg:pt-32 lg:pb-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-teal-300 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-300 rounded-full blur-[150px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Find your path without the <span className="text-teal-600 italic">clinical price tag</span>.
            </h1>
            <p className="mt-8 text-lg leading-8 text-zinc-600 sm:text-xl max-w-2xl mx-auto">
              Approachable guidance for life's hurdles. No insurance needed, no medical diagnoses—just real conversations designed to help you move forward.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/schedule"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
              >
                Book a Conversation
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-zinc-600 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:bg-zinc-50 transition-all"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-sm text-zinc-500 font-medium">
              Sessions starting at just $45. No subscription required.
            </p>
          </div>
        </section>

        {/* Value Props */}
        <section className="px-6 py-24 bg-white border-y border-zinc-200 sm:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
              </div>
              <h3 className="text-xl font-bold italic">Actually Affordable</h3>
              <p className="text-zinc-600 leading-relaxed">
                Skip the insurance maze. We offer transparent, flat-rate pricing that costs less than most clinical co-pays.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold italic">Human-to-Human</h3>
              <p className="text-zinc-600 leading-relaxed">
                No clinical jargon or cold office settings. Talk with guides who listen, validate, and offer practical perspectives.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              </div>
              <h3 className="text-xl font-bold italic">No Labels Needed</h3>
              <p className="text-zinc-600 leading-relaxed">
                We don't diagnose "disorders." We help you navigate life's transitions, relationships, and daily stressors.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="px-6 py-24 sm:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-16">Simple. Direct. Helpful.</h2>
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Choose your Guide",
                  desc: "Browse our network of experienced guides. Find someone who resonates with your specific situation.",
                },
                {
                  step: "02",
                  title: "Pick a Time",
                  desc: "Booking takes less than a minute. No referral, no waitlists, and no complex intake forms.",
                },
                {
                  step: "03",
                  title: "Start Talking",
                  desc: "Connect via secure video or voice. No pressure to 'perform'—just an open space to be heard.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-8 items-start">
                  <span className="text-5xl font-black text-teal-100 sm:text-6xl">{item.step}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-zinc-600 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-6 py-24 bg-zinc-900 text-zinc-100 sm:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Common Questions</h2>
            <div className="space-y-10">
              <div>
                <h4 className="text-lg font-semibold text-teal-400 mb-2 italic">Is this therapy?</h4>
                <p className="text-zinc-400 leading-relaxed">
                  No. We provide peer-to-peer guidance and life perspective. We don't diagnose or treat mental health disorders. If you're in crisis, we'll help you find clinical resources.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-400 mb-2 italic">Why is it so much cheaper?</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Because we've removed the clinical overhead. No medical billing, no insurance paperwork, and no high-rent office spaces.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-400 mb-2 italic">Can I talk to the same person twice?</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Absolutely. Most people find a guide they connect with and build a regular rapport over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24 text-center sm:px-12">
          <div className="max-w-2xl mx-auto p-12 bg-white rounded-[2.5rem] border border-zinc-200 shadow-2xl shadow-teal-100">
            <h2 className="text-3xl font-bold mb-6">Ready for a fresh perspective?</h2>
            <p className="text-zinc-600 mb-10 text-lg italic">
              "The most affordable way to get unstuck."
            </p>
            <Link
              href="/schedule"
              className="inline-block px-10 py-5 text-xl font-bold text-white bg-teal-600 rounded-2xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-200"
            >
              Book Your First Session
            </Link>
          </div>
        </section>
      </main>

      <footer className="px-6 py-12 border-t border-zinc-200 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-teal-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3.5 h-3.5 text-white" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <span className="font-bold tracking-tight">Oakley Counseling</span>
          </div>
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Oakley Counseling. Not a medical service.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900">Privacy</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
