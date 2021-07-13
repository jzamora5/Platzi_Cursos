import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

const Favs = () => {
  return (
    <Layout title='Petgram - Tus favoritos' subtitle='aqui puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}

export default Favs
