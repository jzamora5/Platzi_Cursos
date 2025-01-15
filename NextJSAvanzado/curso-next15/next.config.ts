import { withSentryConfig } from "@sentry/nextjs"
import bunbleAnalyzer from "@next/bundle-analyzer"

import type { NextConfig } from "next"

const enableSentry = Boolean(process.env.SENTRY_DSN)

const withBundleAnalyzer = bunbleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZE === "true",
})

const nextConfig: NextConfig = withBundleAnalyzer({
  /* config options here */
})

const getSentryConfig = () =>
  withSentryConfig(nextConfig, {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "personal-lsj",
    project: "javascript-nextjs",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    widenClientFileUpload: false,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: false,
    sourcemaps: {
      deleteSourcemapsAfterUpload: true,
    },
  })

const CONFIG = enableSentry ? getSentryConfig() : nextConfig

export default CONFIG
