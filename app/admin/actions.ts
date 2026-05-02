"use server"

import { revalidatePath } from "next/cache"
import { adminAuth, adminDb } from "@/lib/firebase-admin"
import type { LandingContent } from "@/lib/content"

export async function saveLandingContent(
  idToken: string,
  content: LandingContent
) {
  const decoded = await adminAuth.verifyIdToken(idToken)

  if (decoded.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    throw new Error("Unauthorized")
  }

  await adminDb.collection("content").doc("landing").set(content)
  revalidatePath("/")
}
