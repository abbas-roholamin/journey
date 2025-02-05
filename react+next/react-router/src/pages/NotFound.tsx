import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      <Link to={"/"} style={{ color: "blue" }}>
        Home
      </Link>
    </div>
  );
}

export default NotFound;
