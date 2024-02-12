import { NextResponse } from "next/server";
import { session } from "./lib/server-session";
import * as jose from "jose";

export async function middleware(request) {
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

export const config = {
  matcher: ["/dashboard"],
};
