"use client";

import { use } from "react";

type Props = {
  params: Promise<{ articleId: string; reviewId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
};

function Page({ params, searchParams }: Props) {
  const { articleId, reviewId } = use(params);
  const { lang } = use(searchParams);

  return (
    <p>
      Product {articleId} review {reviewId} Page in {lang}
    </p>
  );
}

export default Page;
