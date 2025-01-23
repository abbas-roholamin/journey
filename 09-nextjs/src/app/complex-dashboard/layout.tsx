function ComplexLayout({
  children,
  users,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isAuth = true;

  return isAuth ? (
    <div className="bg-gray-200">
      {children}
      <div className=" p-4 space-y-4">
        {users}
        {notifications}
      </div>
    </div>
  ) : (
    login
  );
}

export default ComplexLayout;
