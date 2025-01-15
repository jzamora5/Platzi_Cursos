import "dotenv/config"
import {
  bookmarks,
  authors,
  type BookmarkType,
  type AuthorType,
} from "./schema"

import { orm } from "./db"

const AUTHORS: AuthorType[] = [
  {
    username: "platzi",
    name: "Platzi Team",
    avatarUrl: "/assets/platzi-isotipo.webp",
  },
  {
    username: "jonalvarezz",
    name: "Jona Alvarezz",
    avatarUrl: "/assets/squid.png",
  },
]

const BOOKMARKS: BookmarkType[] = [
  { title: "Platzi", url: "https://platzi.com", fav: true },
  { title: "jonalvarezz", url: "https://jonalvarezz.com", fav: true },
  {
    title: "Next.js Documentation",
    url: "https://nextjs.org/docs",
    fav: false,
  },
  { title: "Stack Overflow", url: "http://stackoverflow.com", fav: false },
  {
    title: "PostgreSQL WEB Visualizer",
    url: "http://sosedoff.github.io/pgweb/",
    fav: false,
  },
  {
    title: "Fast Node Manager",
    url: "https://github.com/Schniz/fnm",
    fav: false,
  },
  {
    title: "Chakra UI",
    url: "https://www.chakra-ui.com",
    fav: false,
  },
  {
    title: "TailwindCSS",
    url: "http://tailwindcss.com",
    fav: false,
  },
]

async function main() {
  console.log(`🚀 Inserting ${AUTHORS.length} authors...`)
  const insertedAuthors = await orm.insert(authors).values(AUTHORS).returning()
  const authorsLength = insertedAuthors.length

  const bookmarksWithAuthors = BOOKMARKS.map((bookmark, index) =>
    Object.assign({}, bookmark, {
      authorId: insertedAuthors[index % authorsLength].id,
    }),
  )

  console.log(`🚀 Inserting ${bookmarksWithAuthors.length} bookmarks...`)
  await orm.insert(bookmarks).values(bookmarksWithAuthors)
  console.log("✨ Done!")

  process.exit()
}

main()
