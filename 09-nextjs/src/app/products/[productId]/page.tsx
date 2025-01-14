type Props = {
  params: Promise<{productId: string}>
}

async function Page({params}: Props) {
  const producId = (await params).productId

  return (
    <p>Product {producId} details Page</p>
  )
}

export default Page