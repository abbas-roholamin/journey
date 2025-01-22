import Link from "next/link";

function NewNotifications() {
  return (
    <div className="p-4 bg-red-200">
      New Notifications
      <Link href="/complex-dashboard" className="underline ml-4">
        Dashboard
      </Link>
    </div>
  );
}

export default NewNotifications;
