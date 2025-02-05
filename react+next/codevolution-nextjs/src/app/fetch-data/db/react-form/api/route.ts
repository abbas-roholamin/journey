import { createProduct } from "@/prisma-db";

export async function POST(request: Request) {
  const body = await request.json();

  const result = await createProduct(body);

  return new Response(JSON.stringify(result), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
