import { type AuthorType } from "../schema"
import { orm } from "../db"

export async function isInWhitelist(author: AuthorType): Promise<boolean> {
  const bookmarks = await orm.query.bookmarks.findMany({
    limit: 3,
    where: (entry, { eq }) => eq(entry.authorId, author.id!),
  })

  await sleep(2000)

  return bookmarks.length >= 3
}

function sleep(ms = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
