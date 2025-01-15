import { Fragment, Suspense } from "react"
import Image from "next/image"

import { Heading, Text } from "@chakra-ui/react"

import { Bookmark } from "@/components/bookmark"
import { orm } from "../db"
import { isInWhitelist } from "../utils/whitelist"

export default async function Author({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params

  const author = await getAuthor(username)

  if (!author) {
    return null
  }

  preload(author.id)

  const isWhitelisted = await isInWhitelist(author)

  return (
    <main className="my-10">
      <header>
        <Heading size="lg" className="mb-4">
          Marcadores de:
        </Heading>
        <figure className="pl-4 pr-8 py-6 inline-flex items-center">
          <div className="rounded-full border inline-block mr-4">
            <Image
              src={author.avatarUrl!}
              alt={author.name!}
              width="60"
              height="60"
            />
          </div>
          <figcaption>
            <Heading size="lg" className="">
              {author.name}
            </Heading>
            <Heading as="p" size="md" className="" color="gray.500">
              {author.username}
            </Heading>
          </figcaption>
        </figure>
      </header>

      <Text className="mt-2">Patrones de consumo de datos usando promesas</Text>

      <Heading size="lg" className="mb-1 mt-14">
        Marcadores
      </Heading>
      <Suspense fallback={<Fragment />}>
        {isWhitelisted && <AuthorBookmarksById authorId={author.id} />}
      </Suspense>
    </main>
  )
}

async function AuthorBookmarksById(props: { authorId: number }) {
  const bookmarks = await getBookmarksByAuthorId(props.authorId)

  return (
    <ul className="mt-8 text-lg">
      {bookmarks?.map((bookmark) => (
        <li className="border-b-2 py-4 px-6 my-2" key={bookmark.id}>
          <Bookmark {...bookmark} />
        </li>
      ))}
    </ul>
  )
}

async function getBookmarksByAuthorId(authorId: number) {
  return orm.query.bookmarks.findMany({
    where: (entry, { eq }) => eq(entry.authorId, authorId),
  })
}

async function getAuthor(username: string) {
  return orm.query.authors.findFirst({
    where: (entry, { eq }) => eq(entry.username, username),
  })
}

function preload(authorId: number) {
  void getBookmarksByAuthorId(authorId)
}
