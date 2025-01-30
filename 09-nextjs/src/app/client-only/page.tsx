"use client";

import { serverOnly } from "../utils/server-onyl";

function Page() {
  const data = serverOnly();
  return <div>Profile Page {data}</div>;
}

export default Page;
