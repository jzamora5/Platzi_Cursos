import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

// Hay que indicar cuales son todas las paginas para SSG

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => {
    return {
      params: {
        id,
      },
    }
  })

  return {
    paths,
    // incremental static generation
    //  404 for everything else
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // pages-only
  const id = params?.id as string

  const response = await fetch(`http://localhost:3000/api/avo/${id}`)
  const product = await response.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  // const { query } = useRouter()
  // const [, setProduct] = useState<TProduct | null>(null)

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
