import { data } from "./data";

export async function GET() {
  return new Response(JSON.stringify(data));
}

export async function POST(request: Request) {
  const body = await request.json();

  const newUser = {
    id: data.length + 1,
    name: body.name,
  };

  data.push(newUser);

  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
