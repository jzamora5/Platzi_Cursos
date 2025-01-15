import { Heading, Text } from "@chakra-ui/react"
import {
  CurrencyDollarIcon,
  ClockIcon,
  GlobeAltIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline"

import { getTranslations } from "../translations/translate"

export default async function I18nPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const { t, f, d } = await getTranslations(lang)

  return (
    <main className="">
      <header className="my-10">
        <Heading as="h1" size="lg" className="">
          {t("heading")}
        </Heading>
        <Text fontSize="md">{t("description")}</Text>
      </header>
      <ul className="grid grid-cols-2 gap-4 text-lg">
        <li className="border-2 p-8 flex items-center">
          <CurrencyDollarIcon className="h-8 w-8 mr-2 inline-block" />{" "}
          {t("balance")}: ${f(10_000.38)}
        </li>
        <li className="border-b-purple-500 border-b-4 border-2 p-8 space-y-4">
          <GlobeAltIcon className="h-8 w-8 mr-2" />
          <Text>{t("internationalization")}</Text>
        </li>
        <li className="border-b-purple-500 border-b-4 border-2 p-8 space-y-4">
          <GlobeAmericasIcon className="h-8 w-8 mr-2" />
          <Text>{t("locale")}</Text>
        </li>
        <li className="border-2 p-8 flex items-center">
          <ClockIcon className="h-8 w-8 mr-2 inline-block" /> {t("date")}:{" "}
          {d(new Date())}
        </li>
      </ul>
    </main>
  )
}
