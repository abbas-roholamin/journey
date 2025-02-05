import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};

async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>Blog Page</div>;
}

export default Page;
