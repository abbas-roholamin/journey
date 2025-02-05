type User = {
  id: number;
  name: string;
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div>
      <h1>Sequential Fetching</h1>
      <div className="grid grid-cols-4 gap-4">
        {users.map((post) => (
          <a
            href={`/parallel-fetching/${post.id}`}
            key={post.id}
            className="bg-white p-4 rounded"
          >
            <h2>{post.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
