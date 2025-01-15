import {
  BanknotesIcon,
  BookmarkSquareIcon,
  BuildingStorefrontIcon,
  LanguageIcon,
  LockClosedIcon,
  BugAntIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"

import { Card } from "../components/card"
import { Heading, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <main className="">
      <header className="text-center my-4">
        <Image
          src="/assets/platzi-isotipo.webp"
          alt="Platzi Logo"
          className="mx-auto"
          width="35"
          height="35"
        />
        <Heading as="h1" size="lg" className="my-2 max-w-80 mx-auto">
          Curso de Platzi Avanzado de Next.js
        </Heading>
        <Text fontSize="">
          En esta página encontrarás todos los materiales de este curso.
        </Text>
      </header>
      <section className="my-14">
        <ul className="grid sm:grid-cols-2 gap-6">
          <li>
            <Card
              to="/expense-tracker"
              icon={<BanknotesIcon className="size-12 " />}
              term="Expense Tracker"
              desc="Explora una mini-aplicación de manejo de gastos que lista, crea y elimina registros desde el servidor y una DB."
            ></Card>
          </li>
          <li>
            <Card
              to="/bookmarks"
              icon={<BookmarkSquareIcon className="size-12 " />}
              term="Bookmarks"
              desc="Mini-aplicación de manejor de Marcadores para explorar las diferentes estrategías y patrones para consumir datos."
            ></Card>
          </li>
          <li>
            <Card
              to="/i18n"
              icon={<LanguageIcon className="size-12 " />}
              term="Internacionalización"
              desc="Identifica las opciones de la nueva versión para crear sitios amigables a locales y diccionarios de traducciones."
            ></Card>
          </li>
          <li>
            <Card
              to="/auth"
              icon={<LockClosedIcon className="size-12 " />}
              term="Autenticación"
              desc="Explora Next.js Middleware para controlar el acceso a las rutas según los permisos del usuario."
            ></Card>
          </li>
          <li>
            <Card
              to="/feature-flags"
              icon={<AdjustmentsVerticalIcon className="size-12 " />}
              term="Feature flags"
              desc="Conoce y opera feature flags desde LaunchDarkly para realizar pruebas de segmentación en tu app."
            ></Card>
          </li>
          <li>
            <Card
              to="/bookmarks/add"
              icon={<BugAntIcon className="size-12 " />}
              term="Error boundaries"
              desc="Utiliza error boundaries de Next.js para controlar los errores que puedan surgir en tu app y reportar a Sentry"
            ></Card>
          </li>
          <li className="col-span-2">
            <Card
              to="/deploy"
              icon={<BuildingStorefrontIcon className="size-12 " />}
              term="Deploy"
              desc="Aprende a correr tu aplicación de Next.js 15 en tanto en servidores autogestionados como Cloudflare como en propios."
            ></Card>
          </li>
        </ul>
      </section>
    </main>
  )
}
