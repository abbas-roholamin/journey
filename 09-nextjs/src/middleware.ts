import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 01
  return NextResponse.redirect(new URL("/", request.url));
  // 02
  //   if (request.nextUrl.pathname.startsWith("/dashboard")) {
  // return NextResponse.redirect(new URL("/", request.nextUrl));
  //     return NextResponse.rewrite(new URL("/", request.nextUrl));
  //   }

  const Response = NextResponse.next();
  Response.headers.set("x-middleware", "true");
  return Response;
}

// export const config = {
//   matcher: "/profile",
// };
