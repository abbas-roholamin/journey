"use client";

import { ClientOnly } from "../utils/client-only";
// import { serverOnly } from "../utils/server-onyl";
import { useAuth, useUser } from "@clerk/nextjs";

function Page() {
  // const data = serverOnly(); Error
  const data = ClientOnly();
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <div>user not signed in</div>;
  }

  if (!user) {
    return <div>user not found</div>;
  }

  return (
    <div>
      Profile Page {data} - {user.id}
    </div>
  );
}

export default Page;
