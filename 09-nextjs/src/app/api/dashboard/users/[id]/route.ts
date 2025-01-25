import { type NextRequest } from "next/server";
import { data } from "../data";
import { headers } from "next/headers";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // 01
  // const headers = new Headers(request.headers);
  // const authorization = headers.get("Authorization");

  // 02
  const requestHeaders = await headers();
  const authorization = requestHeaders.get("Authorization");

  console.log(authorization);

  const { id } = await params;
  const user = data.filter((item) => item.id == +id);

  return new Response(JSON.stringify(user), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const index = data.findIndex((item) => item.id == +id);
  data[index].name = body.name;

  return Response.json(data[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = data.findIndex((item) => item.id == +id);
  const user = data[index];
  data.splice(index, 1);

  return Response.json(user);
}
