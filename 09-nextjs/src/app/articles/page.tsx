import Link from "next/link";

function Page() {
  return (
    <div>
      <h1>articles</h1>
      <div>
        <Link href="/articles/new-one-1?lang=en">article 1</Link>
        <Link href="/articles/new-one-2?lang=fr">article 2</Link>
        <Link href="/articles/new-one-3">article 3</Link>
      </div>
    </div>
  );
}

export default Page;
