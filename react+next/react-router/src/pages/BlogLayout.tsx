import { NavLink, Outlet } from "react-router";

function BlogLayout() {
  return (
    <div className="space-y-10">
      <header className="p-4 bg-blue-200">Header</header>
      <ul className="sapce-x-4 text-blue-400">
        {["first", "second"].map((page) => (
          <li key={page}>
            <NavLink
              to={`/blog/${page}`}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "text-blue-400"
              }
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
      <footer className="p-4 bg-blue-200">Footer</footer>
    </div>
  );
}

export default BlogLayout;
