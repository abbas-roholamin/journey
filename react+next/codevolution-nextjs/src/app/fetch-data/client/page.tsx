"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};
export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError("Error fetching users" + error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
