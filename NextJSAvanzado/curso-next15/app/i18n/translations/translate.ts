"server only"

const dictionaries: Record<string, () => Promise<Record<string, string>>> = {
  es: () => import("./es.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
}

export async function getTranslations(locale: string) {
  const dictionary = await dictionaries[locale]()

  const t = (key: string, defaultValue = ""): string => {
    return dictionary[key] || defaultValue
  }

  const numberFormatter = new Intl.NumberFormat(locale).format
  const f = (n: number): string => {
    return numberFormatter(n)
  }

  const dateFormatter = new Intl.DateTimeFormat(locale).format
  const d = (date: Date): string => {
    return dateFormatter(date)
  }

  return { t, f, d }
}
