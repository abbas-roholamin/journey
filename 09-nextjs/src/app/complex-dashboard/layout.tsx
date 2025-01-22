function ComplexLayout({
  children,
  users,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200">
      {children}
      <div className=" p-4 space-y-4">
        {users}
        {notifications}
      </div>
    </div>
  );
}

export default ComplexLayout;
