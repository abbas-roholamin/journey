"use client";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }
  return (
    <div>
      <h1>articles</h1>
      <button onClick={handleClick}>Checkout</button>
    </div>
  );
}

export default Page;
