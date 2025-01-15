"server-only"

import { cookies } from "next/headers"

import { SignJWT, jwtVerify } from "jose"

const secretKey = process.env.SESSION_SECRET

if (!secretKey && process.env.NODE_ENV !== "development") {
  throw new Error("[session]: please set a valid value for SESSION_SECRET")
}

const encodedKey = new TextEncoder().encode(secretKey)

type SessionPayload = {
  userId: string
}

export async function encrypt(
  payload: SessionPayload,
  expirationTime?: number | string | Date,
) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expirationTime ?? "7d")
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify<SessionPayload>(session, encodedKey, {
      algorithms: ["HS256"],
    })

    return payload
  } catch (error) {
    console.log("Failed to verify session", error)
  }
}

export const COOKIE_NAME = "__session__"

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7d
  const session = await encrypt({ userId }, "7d")
  const _cookies = await cookies()

  _cookies.set(COOKIE_NAME, session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  })
}

export async function deleteSession() {
  const _cookies = await cookies()
  _cookies.delete(COOKIE_NAME)
}

export async function isSessionValid(
  cookieValue: string | undefined | null,
): Promise<boolean> {
  if (!cookieValue) {
    return false
  }

  const session = await decrypt(cookieValue)

  return Boolean(session)
}
