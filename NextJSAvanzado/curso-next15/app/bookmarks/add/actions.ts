"use server"

import { bookmarks } from "../schema"
import { orm } from "../db"

export async function addBookmark(prevState: unknown, data: FormData) {
  const title = data.get("title") as string
  const url = data.get("url") as string

  console.log("Adding bookmark:", { title, url })

  const value = await orm.insert(bookmarks).values({ title, url }).returning()

  if (value.length <= 0) {
    return { error: "Fallo en agregar el marcador en la base de datos." }
  }
}
