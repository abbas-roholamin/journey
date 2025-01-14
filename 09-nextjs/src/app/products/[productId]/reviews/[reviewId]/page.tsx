type Props = {
  params: Promise<{productId: string, reviewId: string}>
}

async function Page({params}: Props) {
  const {productId, reviewId} = await params

  return (
    <p>Product {productId} review {reviewId} Page</p>
  )
}

export default Page