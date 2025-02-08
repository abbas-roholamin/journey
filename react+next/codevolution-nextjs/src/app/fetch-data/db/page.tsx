import { getProducts, Product, seedProducts } from "@/prisma-db";
import ProductItem from "./ProductItem";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ seed: boolean; query?: string }>;
}) {
  const { seed, query } = await searchParams;
  const products: Product[] = await getProducts(query);

  if (seed) {
    await seedProducts();
    return <div>seeded</div>;
  }

  if (products.length == 0) {
    return <div className="text-white"> NO DATA</div>;
  }

  return <ProductItem products={products} />;
}
