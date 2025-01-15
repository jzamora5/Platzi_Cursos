// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://293f4357e80f5d77484873effd69d00d@o4508446319771648.ingest.us.sentry.io/4508446322065408",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
})
