import { Link } from "react-router";

function Home() {
  return (
    <div>
      <div className="flex shrink-0 gap-4 [&>*]:underline [&>*]:p-4 [&>*]:rounded [&>*]:bg-white [&>*]:shadow [&>*]:hover:shadow-md [&>*]:transition">
        <Link to="use-action-state" className="underline">
          useActionState Example
        </Link>
      </div>
    </div>
  );
}

export default Home;
