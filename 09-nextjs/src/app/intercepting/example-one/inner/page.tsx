import Link from "next/link";

function Page() {
  return (
    <div>
      <h1 className="font-bold"> Example one Inneer</h1>
      <div className="space-x-8">
        <Link href="/intercepting/example-two" className="underline">
          Intercepting Example two
        </Link>
        <Link href="/docs" className="underline">
          Intercepting Docs
        </Link>
      </div>
    </div>
  );
}

export default Page;
