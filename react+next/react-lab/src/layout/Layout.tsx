import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <div className="container mx-auto p-4 ">
      <Link to="/">Home</Link>
      <main className="mt-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
