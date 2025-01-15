"use server"

import { createSession } from "@/utils/auth"
import { createHash, randomUUID } from "crypto"
import { redirect } from "next/navigation"

// Hash de nuestro secreto usando
// https://hash.online-convert.com/es/generador-sha256
const SECRET =
  "2037745262d46eddec63bd2381d1904359fc6b5736da1dcc50799d721a817a6f"

export async function login(prevState: unknown, data: FormData) {
  const id = randomUUID()
  const hash = createHash("sha256")
  const password = data.get("pwd") as string

  console.log("login", { id, password })

  const hashedPassword = hash.update(password).digest("hex")

  if (hashedPassword !== SECRET) {
    return { error: "Invalid secret" }
  }

  await createSession(id)

  redirect("/auth")
}
