import { orm } from "../db"

export async function GET() {
  const res = await orm.query.bookmarks.findMany({
    limit: 10,
    with: {
      author: true,
    },
  })

  return Response.json({ data: res })
}
