import { Metadata } from "next";
import Link from "next/link";
type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  const title = await new Promise((resolve) =>
    setTimeout(() => resolve(`The product ${productId}`), 1000)
  );
  return {
    title: ` ${title} details Page`,
  };
};

const generateRandomNumber = () => Math.floor(Math.random() * 2);

async function Page({ params }: Props) {
  const randomNumber = generateRandomNumber();
  if (randomNumber === 1) {
    throw new Error("Something went wrong");
  }

  const producId = (await params).productId;

  return (
    <div>
      <p>Product {producId} details Page</p>
      <Link href={`/products/${producId}/reviews`}>Reviews</Link>
    </div>
  );
}

export default Page;
