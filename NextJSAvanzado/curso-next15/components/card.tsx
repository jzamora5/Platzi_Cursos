import Link from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import { Heading, Text } from "@chakra-ui/react"

type CardProps = {
  term: string
  to: string
  desc?: string
  icon: React.ReactNode
}

export function Card({ to, term, desc, icon }: CardProps) {
  return (
    <Link href={to}>
      <div className="border-2 border-black hover:bg-purple-200 hover:-translate-y-1 transition-all rounded p-4 md:p-6 min-h-48 flex flex-col justify-between">
        <header className="flex justify-between">
          {icon}
          <ArrowUpRightIcon className="size-6" />
        </header>
        <div>
          <Heading size="md">{term}</Heading>
          <Text fontSize="sm" className="mt-1">
            {desc}
          </Text>
        </div>
      </div>
    </Link>
  )
}
