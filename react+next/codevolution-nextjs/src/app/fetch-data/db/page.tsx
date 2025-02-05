import { getProducts, seedProducts } from "@/prisma-db";

type Product = {
  id: number;
  title: string;
  description?: string | null;
  qauntity: number;
  price: number;
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ seed: boolean }>;
}) {
  const { seed } = await searchParams;
  const products: Product[] = await getProducts();

  if (seed) {
    await seedProducts();
    return <div>seeded</div>;
  }

  if (products.length == 0) {
    return <div className="text-white"> NO DATA</div>;
  }

  return (
    <div>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className=" bg-white text-black p-4 rounded ">
            {product.title} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
