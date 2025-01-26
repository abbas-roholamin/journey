export const dynamic = "force-dynamic";
export const revalidate = 10; // 10 seconds

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
