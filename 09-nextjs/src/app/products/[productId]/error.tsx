"use client";

function error({ error }: { error: Error }) {
  return <div className="text-red-500">{error.message}</div>;
}

export default error;
