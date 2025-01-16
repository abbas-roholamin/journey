import { Metadata } from "next";
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

async function Page({ params }: Props) {
  const producId = (await params).productId;

  return <p>Product {producId} details Page</p>;
}

export default Page;
