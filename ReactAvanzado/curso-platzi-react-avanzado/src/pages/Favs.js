import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    <Layout title='Petgram - Tus favoritos' subtitle='aqui puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}
