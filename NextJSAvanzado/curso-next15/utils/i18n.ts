import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

export const supportedLocales = ["es", "en"]
export const defaultLocale = "es"

/**
 * This utility helps determining what locale to use given the user
 * language (request' headers), the app's supported locales and the app's default locale
 */
export function getLocale(headers: { "accept-language": string }): string {
  const languages = new Negotiator({ headers }).languages()

  return match(languages, supportedLocales, defaultLocale)
}

/**
 * Checks if the given pathname includes any of the supported locale
 */
export function hasPathnameLocale(pathname: string): boolean {
  return supportedLocales.some(
    (locale) =>
      pathname.includes(`/${locale}/`) || pathname.endsWith(`/${locale}`),
  )
}
