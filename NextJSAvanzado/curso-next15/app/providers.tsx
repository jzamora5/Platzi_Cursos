"use client"

import {
  ChakraProvider,
  createLocalStorageManager,
  extendTheme,
} from "@chakra-ui/react"
import { QueryClientProvider } from "@tanstack/react-query"

import { getQueryClient } from "./queries"

// Custom Chakra-UI color manager to ignores localStorage color config
const dummyColorStorageManager = createLocalStorageManager(
  "litentry-omniaccount-color-mode",
)
dummyColorStorageManager.get = () => "light"
dummyColorStorageManager.set = () => undefined

// Theme
export const theme = extendTheme({
  fonts: {
    heading: "var(--font-app)",
    body: "var(--font-app)",
  },
  components: {
    Button: {
      defaultProps: {
        variant: "solid",
        colorScheme: "purple",
      },
      variants: {
        outline: {
          borderColor: "current",
        },
      },
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} colorModeManager={dummyColorStorageManager}>
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  )
}
