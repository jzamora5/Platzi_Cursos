import { NextRequest, NextResponse } from "next/server"

import { getLocale, hasPathnameLocale } from "@/utils/i18n"
import { cookies } from "next/headers"

import {
  isSessionValid,
  COOKIE_NAME as SESSION_COOKIE_NAME,
} from "@/utils/auth"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Auth
  // -------------

  // 1. Ignore todo lo que no sea de nuestra ruta /auth
  if (pathname.startsWith("/auth") && pathname !== "/auth/login") {
    const allCookies = await cookies()

    // 2. Verificar si hay una cookie de sesión válida
    const hasSession = await isSessionValid(
      allCookies.get(SESSION_COOKIE_NAME)?.value,
    )

    // 3. Si la hay, puede continuar
    if (hasSession) {
      return
    }

    // 4. Si no, redireccionar a la página de inicio de sesión
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl))
  }

  // I18n
  // -------------

  // 1. Ignore todo lo que no sea de nuestra ruta /i18n
  if (!pathname.startsWith("/i18n")) return

  // 2. Si el path ya contiene un local, ignorelo (ya esta ok)
  //    e.j.: /i18n/es
  const hasLocal = hasPathnameLocale(pathname)
  if (hasLocal) return

  // 3. Si no hay local, agregar el local a la URL
  //    e.j.: /i18n -> /i18n/es
  const locale = getLocale({
    "accept-language": request.headers.get("Accept-Language") || "",
  })
  request.nextUrl.pathname = `${pathname}/${locale}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}
