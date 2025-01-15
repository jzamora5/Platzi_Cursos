"use server"

import { revalidatePath } from "next/cache"
import { sql } from "./db"

type Expense = {
  id: string
  name: string
  amount: string
  date: Date
}

// Fetch all expenses
export async function getExpenses() {
  const result = await sql<Expense[]>`SELECT * FROM expenses ORDER BY date DESC`
  return result
}

// Add a new expense
export async function addExpense(data: FormData) {
  const name = data.get("name") as string
  const amount = data.get("amount") as string

  console.log("Adding expense:", { name, amount })

  await sql`
    INSERT INTO expenses
      (name, amount)
    VALUES
      (${name.toString()}, ${amount})
    `

  revalidatePath("/expense-tracker")
}

// Delete an expense
export async function deleteExpense(data: FormData) {
  const id = data.get("id") as string

  await sql`
    DELETE FROM expenses
    WHERE id = ${id}
  `

  revalidatePath("/expense-tracker")
}

// Get total expenses for the current month
export async function getMonthlyTotal() {
  const result = await sql<{ total: string }[]>`
    SELECT SUM(amount) AS total
    FROM expenses
    WHERE
      date_trunc('month', date) = date_trunc('month', CURRENT_DATE)
  `

  return result[0]?.total || 0
}
