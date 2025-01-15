import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import dotenv from "dotenv"
import * as schema from "./schema"

dotenv.config()

// Check .env
if (!process.env.POSTGRESQL_ENDPOINT) {
  throw new Error("POSTGRESQL_ENDPOINT env var is not set")
}

export const client = postgres(process.env.POSTGRESQL_ENDPOINT)

export const orm = drizzle(client, {
  schema,
})
