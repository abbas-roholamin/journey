import { data } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = data.filter((item) => item.id == +id);

  return Response.json(user);
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
