"use client"

import { useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged, signOut, User } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"
import { saveLandingContent } from "./actions"
import { defaultContent, type LandingContent } from "@/lib/content"
import Link from "next/link"

type SaveStatus = "idle" | "saving" | "saved" | "error"

const inputCls =
  "w-full px-4 py-2.5 text-sm text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"

export default function AdminPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState<LandingContent>(defaultContent)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle")

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (!u || u.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        router.replace("/admin/login")
        return
      }
      const snap = await getDoc(doc(db, "content", "landing"))
      if (snap.exists()) {
        setContent(snap.data() as LandingContent)
      }
      setUser(u)
      setLoading(false)
    })
  }, [router])

  async function handleSave() {
    if (!user) return
    setSaveStatus("saving")
    try {
      const token = await user.getIdToken()
      await saveLandingContent(token, content)
      setSaveStatus("saved")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } catch {
      setSaveStatus("error")
      setTimeout(() => setSaveStatus("idle"), 4000)
    }
  }

  function setHero(key: keyof LandingContent["hero"], value: string) {
    setContent((c) => ({ ...c, hero: { ...c.hero, [key]: value } }))
  }

  function setValueProp(i: number, key: "title" | "description", value: string) {
    setContent((c) => {
      const vp = [...c.valueProps]
      vp[i] = { ...vp[i], [key]: value }
      return { ...c, valueProps: vp }
    })
  }

  function setStep(i: number, key: "title" | "description", value: string) {
    setContent((c) => {
      const steps = [...c.howItWorks]
      steps[i] = { ...steps[i], [key]: value }
      return { ...c, howItWorks: steps }
    })
  }

  function setFaq(i: number, key: "question" | "answer", value: string) {
    setContent((c) => {
      const faqs = [...c.faq]
      faqs[i] = { ...faqs[i], [key]: value }
      return { ...c, faq: faqs }
    })
  }

  function setCta(key: keyof LandingContent["cta"], value: string) {
    setContent((c) => ({ ...c, cta: { ...c.cta, [key]: value } }))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-zinc-200 px-6 py-4 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-zinc-900">Oakley Counseling</span>
            <span className="ml-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">CMS</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" target="_blank" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            View site ↗
          </Link>
          <button
            onClick={() => signOut(auth).then(() => router.replace("/admin/login"))}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 sm:px-8 space-y-10">

        {/* Hero */}
        <Section title="Hero">
          <Field label="Headline">
            <input className={inputCls} value={content.hero.headline} onChange={(e) => setHero("headline", e.target.value)} />
          </Field>
          <Field label="Headline Emphasis (teal italic)">
            <input className={inputCls} value={content.hero.headlineEmphasis} onChange={(e) => setHero("headlineEmphasis", e.target.value)} />
          </Field>
          <Field label="Subheadline">
            <textarea className={inputCls} rows={3} value={content.hero.subheadline} onChange={(e) => setHero("subheadline", e.target.value)} />
          </Field>
          <Field label="Pricing Note">
            <input className={inputCls} value={content.hero.pricingNote} onChange={(e) => setHero("pricingNote", e.target.value)} />
          </Field>
        </Section>

        {/* Value Props */}
        <Section title="Value Props">
          {content.valueProps.map((vp, i) => (
            <div key={i} className="border border-zinc-100 rounded-2xl p-5 space-y-3 bg-zinc-50">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Card {i + 1}</p>
              <Field label="Title">
                <input className={inputCls} value={vp.title} onChange={(e) => setValueProp(i, "title", e.target.value)} />
              </Field>
              <Field label="Description">
                <textarea className={inputCls} rows={2} value={vp.description} onChange={(e) => setValueProp(i, "description", e.target.value)} />
              </Field>
            </div>
          ))}
        </Section>

        {/* How It Works */}
        <Section title="How It Works">
          {content.howItWorks.map((step, i) => (
            <div key={i} className="border border-zinc-100 rounded-2xl p-5 space-y-3 bg-zinc-50">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Step {step.step}</p>
              <Field label="Title">
                <input className={inputCls} value={step.title} onChange={(e) => setStep(i, "title", e.target.value)} />
              </Field>
              <Field label="Description">
                <textarea className={inputCls} rows={2} value={step.description} onChange={(e) => setStep(i, "description", e.target.value)} />
              </Field>
            </div>
          ))}
        </Section>

        {/* FAQ */}
        <Section title="FAQ">
          {content.faq.map((item, i) => (
            <div key={i} className="border border-zinc-100 rounded-2xl p-5 space-y-3 bg-zinc-50">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Question {i + 1}</p>
              <Field label="Question">
                <input className={inputCls} value={item.question} onChange={(e) => setFaq(i, "question", e.target.value)} />
              </Field>
              <Field label="Answer">
                <textarea className={inputCls} rows={3} value={item.answer} onChange={(e) => setFaq(i, "answer", e.target.value)} />
              </Field>
            </div>
          ))}
        </Section>

        {/* CTA */}
        <Section title="Call to Action">
          <Field label="Headline">
            <input className={inputCls} value={content.cta.headline} onChange={(e) => setCta("headline", e.target.value)} />
          </Field>
          <Field label="Quote">
            <input className={inputCls} value={content.cta.quote} onChange={(e) => setCta("quote", e.target.value)} />
          </Field>
          <Field label="Button Label">
            <input className={inputCls} value={content.cta.buttonLabel} onChange={(e) => setCta("buttonLabel", e.target.value)} />
          </Field>
        </Section>

        {/* Save */}
        <div className="flex items-center justify-end gap-4 pt-2 pb-16">
          {saveStatus === "error" && (
            <p className="text-sm text-red-600">Save failed — please try again.</p>
          )}
          {saveStatus === "saved" && (
            <p className="text-sm text-teal-600 font-medium">Changes saved ✓</p>
          )}
          <button
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="px-8 py-3 text-sm font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-all disabled:opacity-60"
          >
            {saveStatus === "saving" ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </main>
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-zinc-100">
        <h2 className="font-bold text-zinc-900">{title}</h2>
      </div>
      <div className="px-6 py-6 space-y-5">{children}</div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">{label}</span>
      {children}
    </label>
  )
}
