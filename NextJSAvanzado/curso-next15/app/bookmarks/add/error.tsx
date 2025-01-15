"use client"

import { useEffect } from "react"

import { Heading, Button } from "@chakra-ui/react"

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <Heading className="mb-4">Oh noes! algo salió mal</Heading>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Volver a intentar
      </Button>
    </div>
  )
}
