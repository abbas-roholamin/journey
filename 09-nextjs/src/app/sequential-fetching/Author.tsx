type Author = {
  id: number;
  name: string;
};

export default async function Author({ id }: { id: number }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const author: Author = await res.json();

  return (
    <div>
      <strong className="font-bold pr-2">Author:</strong> {author.name}
    </div>
  );
}
