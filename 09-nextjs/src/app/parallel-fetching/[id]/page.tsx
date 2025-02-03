type Post = {
  id: number;
  title: string;
  body: string;
};

type Album = {
  id: number;
  title: string;
};

async function getPosts(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return res.json();
}

async function getAlumes(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  );
  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [posts, albums] = await Promise.all([getPosts(+id), getAlumes(+id)]);

  return (
    <div>
      <h1>Sequential Fetching</h1>
      <div className="grid grid-cols-2 gap-4 text-black">
        <div>
          {posts.map((post: Post) => (
            <div key={post.id} className="bg-white p-4 rounded mb-3">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        <div>
          {albums.map((album: Album) => (
            <div key={album.id} className="bg-white p-4 rounded mb-4">
              <h2>{album.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
