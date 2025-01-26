import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 01
  //   return NextResponse.redirect(new URL("/", request.url));
  // 02
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // return NextResponse.redirect(new URL("/", request.nextUrl));
    return NextResponse.rewrite(new URL("/", request.nextUrl));
  }
}

// export const config = {
//   matcher: "/profile",
// };
