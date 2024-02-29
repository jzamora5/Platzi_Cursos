import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";
// import { useParams, useSearchParams } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  // For Client Components
  // const params = useParams();
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");

  const id = searchParams.id;

  if (!id) {
    redirect("/store");
  }

  const products = await getProducts(id);

  return <ProductView product={products[0]} />;
}
