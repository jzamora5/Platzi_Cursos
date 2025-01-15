import { LockOpenIcon } from "@heroicons/react/24/outline"
import { Heading, Text, Button } from "@chakra-ui/react"

export default async function I18nPage() {
  return (
    <main className="">
      <header className="my-10">
        <Heading as="h1" size="lg" className="">
          Autenticación
        </Heading>
        <Text fontSize="md">
          En esta página puedes explorar la autenticación a través de Cookies.
        </Text>
      </header>

      <div className="p-8 bg-yellow-100 max-w-xl mx-auto text-center text-lg">
        <div className="">
          <LockOpenIcon className="h-10 w-10 mx-auto" />
        </div>
        <Text fontSize="md" className="mt-8">
          🎉 Felicidades, ahora puedes ver páginas y contenido protegido.
        </Text>
      </div>

      <div className="text-center">
        <Button className="mt-10">Salir</Button>
      </div>
    </main>
  )
}
