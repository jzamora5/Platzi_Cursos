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
  session: {
    // Use JWT to manage sessions since we aren't using a Database
    jwt: true,
    maxAge: 60 * 15, // 15 min
  },
  jwt: {
    secret: process.env.AUTH_JWT_SECRET,
    signingKey: process.env.AUTH_JWT_SIGNIN_KEY,
    encryption: true,
    encryptionKey: process.env.AUTH_JWT_ENCRYPTION_KEY,
  },
  providers: [
    Providers.Credentials({
      name: 'Platzi',
      credentials: {
        password: { label: 'Nunca pares de...', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/platzi`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })

        const user = await res.json()

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
