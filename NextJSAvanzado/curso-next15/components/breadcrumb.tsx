"use client"

import Link from "next/link"
import { Fragment, type PropsWithChildren } from "react"

import { HomeIcon } from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"

type Props = {
  className?: string
}

export function Breadcrumb({ className, children }: PropsWithChildren<Props>) {
  const pathname = usePathname()

  if (pathname === "/") return null

  const paths = pathname.split("/").filter(Boolean)

  return (
    <div className={`flex items-center py-4 my-6 ${className}`}>
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-gray-500"
      >
        <span>
          <HomeIcon className="w-5 h-5 mr-2" />
        </span>
        <span>{children || "Volver al inicio"}</span>
      </Link>
      {paths.map((path, index) => (
        <Fragment key={`${path}-${index}`}>
          <span className="px-2">/</span>
          <Link
            href={"/" + paths.slice(0, index + 1).join("/")}
            className="inline-flex items-center text-gray-400 hover:text-gray-500 capitalize"
          >
            <span>{path}</span>
          </Link>
        </Fragment>
      ))}
    </div>
  )
}
