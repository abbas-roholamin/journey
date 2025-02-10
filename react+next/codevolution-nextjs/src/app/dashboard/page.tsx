import { auth, currentUser } from "@clerk/nextjs/server";
async function Page() {
  const authObj = await auth();
  const userObj = await currentUser();
  return (
    <div>
      Dashboard
      <div>{JSON.stringify(authObj)}</div>
      <div>{JSON.stringify(userObj)}</div>
    </div>
  );
}

export default Page;
