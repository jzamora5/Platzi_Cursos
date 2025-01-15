"use client"

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"

import { login } from "./actions"
import { Hint } from "./hint"

export default function I18nPage() {
  const [state, action] = useActionState(login, { error: "" })
  const status = useFormStatus()

  return (
    <main className="">
      <header className="my-10">
        <Heading as="h1" size="lg" className="">
          Autenticación
        </Heading>
        <Text fontSize="md">
          En este página exploramos Middleware y Cookies para crear una
          autenticación con Next.js
        </Text>
      </header>

      <form
        action={action}
        className="p-6 border-2 max-w-xl mx-auto my-10 space-y-4"
      >
        <Heading size="md" className="">
          Login
        </Heading>

        <FormControl
          isDisabled={status.pending}
          isInvalid={Boolean(state.error)}
        >
          <Input
            autoFocus
            autoComplete="off"
            type="password"
            name="pwd"
            pr="3.8rem"
            placeholder="Cuentame un secreto"
          />
        </FormControl>
        <div className="flex items-center space-x-4">
          <Button type="submit" isLoading={status.pending}>
            Ingresar
          </Button>
          <Hint />
        </div>
        {state.error && (
          <>
            <FormErrorMessage>{state.error}</FormErrorMessage>
            <Alert status="info" className="mt-4">
              <AlertIcon />
              <div>
                <AlertTitle>Pista</AlertTitle>
                <AlertDescription>El lema de Platzi</AlertDescription>
              </div>
            </Alert>
          </>
        )}
      </form>
    </main>
  )
}
