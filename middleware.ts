import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSWORD = process.env.PORTFOLIO_PASSWORD ?? "Fede2026";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("portfolio_auth");
  if (cookie?.value === PASSWORD) return NextResponse.next();
  const url = req.nextUrl.clone();
  if (url.pathname.startsWith("/login") || url.pathname.startsWith("/api/auth")) return NextResponse.next();
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
