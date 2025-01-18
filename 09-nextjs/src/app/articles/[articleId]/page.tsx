import Link from "next/link";

type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
};

async function Page({ params, searchParams }: Props) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <div>
      <p>
        Article {articleId} details Page in {lang}
      </p>

      <Link href={`/articles/${articleId}/reviews?lang=${lang}`}>Reviews</Link>
    </div>
  );
}

export default Page;
