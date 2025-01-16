import Link from "next/link";

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
