import { Layout } from '@components/Layout'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/client'

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getSession(context)

  if (session === null) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

function PremiumPage() {
  const [session, loading] = useSession()

  if (loading) {
    return null
  }

  if (session === null) {
    return <Layout>Acceso Denegado</Layout>
  }

  return <Layout>Contenido Secreto</Layout>
}

export default PremiumPage
