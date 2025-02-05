
type Props = {
    params: Promise<{slug: string[]}>
  }

async function Page({params}: Props) {
    const slug = (await params).slug
    return (
      <p>Doc Page {JSON.stringify(slug)}</p>
    )
  }
  
  export default Page