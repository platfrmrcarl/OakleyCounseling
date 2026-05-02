# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server on localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16.2.3** with App Router — read `node_modules/next/dist/docs/` before writing any Next.js code; this version has breaking changes from prior releases
- **React 19.2.4**
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` and `@theme inline` in `globals.css`; the v4 config API differs from v3 (no `tailwind.config.js`)
- **Firebase** (client SDK `firebase`, server SDK `firebase-admin`) — Firestore for content, Auth for Google OAuth
- **TypeScript** — strict mode via `tsconfig.json`

## Environment Variables

Copy `.env.local.example` to `.env.local`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FIREBASE_*` | Firebase project config (from Firebase Console) |
| `NEXT_PUBLIC_ADMIN_EMAIL` | Google account email authorized to access `/admin` — must match the Google account email exactly, not just any email address |
| `NEXT_PUBLIC_CALENDLY_LINK` | Calendly embed URL in `/schedule` |
| `FIREBASE_CLIENT_EMAIL` | Service account email for Admin SDK (server-side only) |
| `FIREBASE_PRIVATE_KEY` | Service account private key; newlines stored as `\n` literals |

## Architecture

Marketing site with a Calendly booking flow and a Firestore-backed CMS.

### Landing page (`app/page.tsx`)
Async Server Component. Reads `content/landing` from Firestore via Admin SDK on every request and falls back to `lib/content.ts` defaults if the document is missing. After an admin saves, `revalidatePath('/')` re-renders the page on the next visit.

### CMS (`app/admin/`)
- `app/admin/login/page.tsx` — Google OAuth sign-in via Firebase Auth; redirects to `/admin` on success
- `app/admin/page.tsx` — Client Component editor; checks `onAuthStateChanged` and redirects to `/admin/login` if unauthenticated or wrong email; reads current content from Firestore client-side to populate the form
- `app/admin/actions.ts` — Server Action; verifies the Firebase ID token with Admin SDK, checks email matches `NEXT_PUBLIC_ADMIN_EMAIL`, writes to Firestore, calls `revalidatePath('/')`

### Shared libraries
- `lib/content.ts` — `LandingContent` type and `defaultContent` used by both the landing page and admin editor
- `lib/firebase.ts` — client SDK singleton (auth + Firestore)
- `lib/firebase-admin.ts` — server SDK singleton (auth + Firestore); only import from Server Components or Server Actions

### Other routes
- `app/schedule/page.tsx` — embeds Calendly via `<iframe>` using `NEXT_PUBLIC_CALENDLY_LINK`
- `app/layout.tsx` — root layout; loads Geist Sans/Mono via `next/font/google`

## Firebase setup notes

**Firestore security rules** — the client SDK reads `content/landing` in the admin editor, so Firestore rules must allow that read. Writes from the Admin SDK bypass rules. Minimal recommended rules:

```
match /content/landing {
  allow read: if true;
  allow write: if false;
}
```

**Admin email** — `NEXT_PUBLIC_ADMIN_EMAIL` must match the email of Dr. Oakley's *Google account* (what Firebase Auth returns after Google sign-in), not necessarily their Outlook address.
