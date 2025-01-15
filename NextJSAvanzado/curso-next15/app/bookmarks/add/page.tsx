"use client"

import Form from "next/form"

import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Text,
} from "@chakra-ui/react"

import { addBookmark } from "./actions"
import { useActionState } from "react"

export default function Bookmarks() {
  const [state, action, pending] = useActionState(addBookmark, { error: "" })

  return (
    <main className="mt-12">
      <header className="">
        <Heading size="lg" className="mb-1">
          Agregar un marcador
        </Heading>
        <Text>Exploración de manejo de Errores con React y Next.js 15</Text>
      </header>

      <Form
        action={action}
        className="p-6 my-12 border-2 space-y-4 max-w-lg mx-auto"
      >
        <FormControl>
          <FormLabel>Titulo</FormLabel>
          <Input required name="title" />
        </FormControl>
        <FormControl>
          <FormLabel>URL</FormLabel>
          <Input required type="url" name="url" />
        </FormControl>

        <Button disabled={pending} type="submit">
          Agregar
        </Button>
        {state?.error && (
          <div className="my-4 bg-red-300 px-6 py-4">{state.error}</div>
        )}
      </Form>
    </main>
  )
}
