import Form from "next/form"

import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react"
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline"

import {
  getExpenses,
  addExpense,
  deleteExpense,
  getMonthlyTotal,
} from "./actions"

export default async function ExpenseTracker() {
  const expenses = await getExpenses()
  const total = await getMonthlyTotal()

  return (
    <main className="my-16">
      <Heading size="lg" className="mb-1">
        Manejo de Gastos
      </Heading>
      <Heading as="h3" size="md">
        Monthly Total: ${total}
      </Heading>

      <Form
        action={addExpense}
        className="p-6 my-12 border-2 space-y-4 max-w-lg mx-auto"
      >
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input required name="name" />
        </FormControl>
        <FormControl>
          <FormLabel>Valor</FormLabel>
          <Input required type="number" name="amount" />
        </FormControl>

        <Button type="submit">Agregar</Button>
      </Form>

      <Heading as="h3" size="md">
        Gastos
      </Heading>

      <TableContainer className="mt-4">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Valor</Th>
              <Th>Fecha</Th>
              <Th>Acción</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expenses.map((expense) => (
              <Tr key={expense.id}>
                <Td>{expense.name}</Td>
                <Td>$ {expense.amount}</Td>
                <Td>{expense.date.toLocaleDateString()}</Td>
                <Td>
                  <form action={deleteExpense} style={{ display: "inline" }}>
                    <input type="hidden" value={expense.id} name="id" />
                    <IconButton
                      type="submit"
                      variant="ghost"
                      colorScheme="red"
                      aria-label="Remove"
                      icon={<ArchiveBoxXMarkIcon className="size-5" />}
                    />
                  </form>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </main>
  )
}
