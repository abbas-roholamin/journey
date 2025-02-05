import Link from "next/link";

function Page() {
  return (
    <div>
      <h1 className="font-bold"> Example one</h1>
      <Link href="/intercepting/example-two" className="underline">
        Intercepting Example two
      </Link>
    </div>
  );
}

export default Page;
