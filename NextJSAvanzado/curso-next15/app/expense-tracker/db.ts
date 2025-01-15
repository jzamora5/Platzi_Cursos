import postgres from "postgres"
import dotenv from "dotenv"

dotenv.config()

// Check .env
if (!process.env.POSTGRESQL_ENDPOINT) {
  throw new Error("POSTGRESQL_ENDPOINT env var is not set")
}

const DB_NAME = "expense_tracker"

export const sql = postgres(`${process.env.POSTGRESQL_ENDPOINT}/${DB_NAME}`)
