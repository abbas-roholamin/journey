type User = {
  id: number;
  name: string;
};

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <div>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className=" bg-white text-black">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
