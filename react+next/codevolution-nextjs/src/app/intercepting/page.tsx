import Link from "next/link";

function Page() {
  return (
    <div>
      <h1 className="font-bold"> Intercepting</h1>
      <Link href="/intercepting/example-one" className="underline">
        Intercepting exmpale one
      </Link>
    </div>
  );
}

export default Page;
