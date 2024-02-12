import { NextResponse } from "next/server";
import { session } from "./lib/server-session";
import * as jose from "jose";

export async function middleware(request) {
  //parsing the URL
  const url = new URL(request.url);
  const path = url.pathname;
  //verify token on dashboard URL
  if (path === "/dashboard") {
    const { token } = session();
    const secretKey = process.env.SECRET_KEY;
    const secret = new TextEncoder().encode(secretKey);

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    //validating token
    try {
      await jose.jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
