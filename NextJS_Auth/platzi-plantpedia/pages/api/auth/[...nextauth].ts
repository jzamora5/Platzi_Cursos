import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'

/**
 * See all Next Auth configurations options at:
 * https://next-auth.js.org/configuration
 */
const options: NextAuthOptions = {
  theme: 'light',
  debug: process.env.NODE_ENV === 'development',
  session: {},
  jwt: {},
  providers: [
    Providers.Credentials({
      name: 'Platzi',
      credentials: {
        // En Ruta api/auth/signin
        // input de html5
        password: {
          type: 'password',
          label: 'Nunca pares de...',
        },
      },
      async authorize(credentials) {
        console.log(credentials)
        // Conectar API
        const res = await fetch(
          `${process.env.NEXT_AUTH_URL}/api/auth/platzi`,
          {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-type': 'application/json' },
          }
        )

        // JSON rta API
        const user = await res.json()

        // return user ?? null
        if (res.ok && user) {
          return user
        }

        return null
      },
    }),
    Providers.GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
}

export default NextAuth(options)
