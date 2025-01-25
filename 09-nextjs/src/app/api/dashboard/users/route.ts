import { type NextRequest } from "next/server";
import { data } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const users = query ? data.filter((item) => item.name.includes(query)) : data;

  return new Response(JSON.stringify(users));
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
