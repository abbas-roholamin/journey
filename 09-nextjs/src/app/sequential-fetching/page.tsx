import { Suspense } from "react";
import Author from "./Author";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post: Post[] = await res.json();

  return (
    <div>
      <h1>Sequential Fetching</h1>
      <div className="grid grid-cols-2 gap-4">
        {post.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded">
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <Suspense fallback={<div>Loading author...</div>}>
              <Author id={post.id} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
