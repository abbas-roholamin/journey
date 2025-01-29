import Link from "next/link";

export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ productId: "1" }, { productId: "2" }, { productId: "3" }];
}

function Page() {
  return (
    <div>
      <h1>Products</h1>
      <div>
        <Link href="/products/1">Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3">Product 3</Link>
      </div>
    </div>
  );
}

export default Page;
