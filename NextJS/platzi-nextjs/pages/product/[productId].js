import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  // const router = useRouter();

  const {
    query: { productId },
  } = useRouter();

  // console.log(router.query);

  return <div>Esta es la pagina del producto: {productId}</div>;
};

export default ProductItem;
