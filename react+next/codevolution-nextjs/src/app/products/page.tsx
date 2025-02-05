import Link from "next/link";
import Review from "../components/Review";
import Tasks from "../components/Tasks";
import { Suspense } from "react";

export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ productId: "1" }, { productId: "2" }, { productId: "3" }];
}

function Page() {
  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>Loading reviews...</div>}>
        <Review />
      </Suspense>
      <Suspense fallback={<div>Loading tasks...</div>}>
        <Tasks />
      </Suspense>
      <div>
        <Link href="/products/1">Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3">Product 3</Link>
      </div>
    </div>
  );
}

export default Page;
