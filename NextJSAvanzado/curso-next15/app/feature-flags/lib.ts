"use server"

import { cache } from "react"
import { init, type LDClient } from "@launchdarkly/node-server-sdk"

export const getClient = cache(async function (): Promise<LDClient> {
  const client = init(process.env.LAUNCHDARKLY_SDK_KEY!)
  await client.waitForInitialization({
    timeout: 10, // 10 seconds
  })

  return client
})
