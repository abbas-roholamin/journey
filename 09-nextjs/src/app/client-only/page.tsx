"use client";

import { ClientOnly } from "../utils/client-only";
// import { serverOnly } from "../utils/server-onyl";

function Page() {
  // const data = serverOnly(); Error
  const data = ClientOnly();
  return <div>Profile Page {data}</div>;
}

export default Page;
