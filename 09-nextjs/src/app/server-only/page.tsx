// import { ClientOnly } from "../utils/client-only";
import { serverOnly } from "../utils/server-onyl";

function Page() {
  const data = serverOnly();
  // const data = ClientOnly(); Error
  return <div>Profile Page {data}</div>;
}

export default Page;
