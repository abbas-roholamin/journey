import Link from "next/link";

function Notification() {
  return (
    <div className="p-4 bg-red-200">
      Notification
      <Link href="/complex-dashboard/new" className="underline ml-4">
        new notifications
      </Link>
    </div>
  );
}

export default Notification;
