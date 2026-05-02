export type LandingContent = {
  hero: {
    headline: string
    headlineEmphasis: string
    subheadline: string
    pricingNote: string
  }
  valueProps: Array<{ title: string; description: string }>
  howItWorks: Array<{ step: string; title: string; description: string }>
  faq: Array<{ question: string; answer: string }>
  cta: {
    headline: string
    quote: string
    buttonLabel: string
  }
}

export const defaultContent: LandingContent = {
  hero: {
    headline: "Find your path without the",
    headlineEmphasis: "clinical price tag.",
    subheadline:
      "Approachable guidance for life's hurdles. No insurance needed, no medical diagnoses—just real conversations designed to help you move forward.",
    pricingNote: "Sessions starting at just $45. No subscription required.",
  },
  valueProps: [
    {
      title: "Actually Affordable",
      description:
        "Skip the insurance maze. We offer transparent, flat-rate pricing that costs less than most clinical co-pays.",
    },
    {
      title: "Human-to-Human",
      description:
        "No clinical jargon or cold office settings. Talk with guides who listen, validate, and offer practical perspectives.",
    },
    {
      title: "No Labels Needed",
      description:
        'We don\'t diagnose "disorders." We help you navigate life\'s transitions, relationships, and daily stressors.',
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Choose your Guide",
      description:
        "Browse our network of experienced guides. Find someone who resonates with your specific situation.",
    },
    {
      step: "02",
      title: "Pick a Time",
      description:
        "Booking takes less than a minute. No referral, no waitlists, and no complex intake forms.",
    },
    {
      step: "03",
      title: "Start Talking",
      description:
        "Connect via secure video or voice. No pressure to 'perform'—just an open space to be heard.",
    },
  ],
  faq: [
    {
      question: "Is this therapy?",
      answer:
        "No. We provide peer-to-peer guidance and life perspective. We don't diagnose or treat mental health disorders. If you're in crisis, we'll help you find clinical resources.",
    },
    {
      question: "Why is it so much cheaper?",
      answer:
        "Because we've removed the clinical overhead. No medical billing, no insurance paperwork, and no high-rent office spaces.",
    },
    {
      question: "Can I talk to the same person twice?",
      answer:
        "Absolutely. Most people find a guide they connect with and build a regular rapport over time.",
    },
  ],
  cta: {
    headline: "Ready for a fresh perspective?",
    quote: '"The most affordable way to get unstuck."',
    buttonLabel: "Book Your First Session",
  },
}
