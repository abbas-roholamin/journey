import { UserProfile } from "@clerk/nextjs";

function Page() {
  return (
    <div className="p-12 grid place-content-center">
      <UserProfile path="/profile" />
    </div>
  );
}

export default Page;
