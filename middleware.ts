// Password protection rimossa.
// Il file viene mantenuto vuoto per evitare di lasciare codice morto in /app.
// Il noindex è gestito da layout.tsx (metadata: robots: "noindex, nofollow")
// e da /public/robots.txt
import { NextResponse } from "next/server";
export function middleware() {
  return NextResponse.next();
}
export const config = { matcher: [] };