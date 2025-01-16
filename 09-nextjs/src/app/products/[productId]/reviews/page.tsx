import Link from "next/link";

async function Page() {
  return (
    <div>
      <p>Reviews</p>
      <Link href="/products" replace>
        Products
      </Link>
    </div>
  );
}

export default Page;
