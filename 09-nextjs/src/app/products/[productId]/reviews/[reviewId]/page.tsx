import { notFound } from "next/navigation"

type Props = {
  params: Promise<{productId: string, reviewId: string}>
}

async function Page({params}: Props) {
  const {productId, reviewId} = await params

  if (parseInt(reviewId) > 10) {
    notFound()
  }
  return (
    <p>Product {productId} review {reviewId} Page</p>
  )
}

export default Page