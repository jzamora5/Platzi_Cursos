import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3000/api/avo')
//   const { data: productList }: TAPIAvoResponse = await response.json()

//   return {
//     props: {
//       productList,
//     },
//   }
// }

export const getStaticProps = async () => {
  // pages-only
  const response = await fetch('http://localhost:3000/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  const [, setProductList] = useState<TProduct[]>([])

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
