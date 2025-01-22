"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

function error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="text-red-500">
      <p>{error.message}</p>
      <button onClick={() => reload()}>Try Again</button>
    </div>
  );
}

export default error;
