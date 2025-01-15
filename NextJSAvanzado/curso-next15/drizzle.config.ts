import type { Config } from "drizzle-kit"

export default {
  schema: "./app/bookmarks/schema.ts",
  out: "./app/bookmarks/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRESQL_ENDPOINT!,
  },
} satisfies Config
