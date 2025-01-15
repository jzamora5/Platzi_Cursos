import { useState } from "react"
import { Text } from "@chakra-ui/react"
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid"

export function Hint() {
  const [show, setShow] = useState(false)

  if (show) {
    return (
      <div>
        <Text className="">Nunca pares de...</Text>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => setShow(true)}>
        <QuestionMarkCircleIcon className="w-6 h-6 text-gray-400" />
      </button>
    </div>
  )
}
