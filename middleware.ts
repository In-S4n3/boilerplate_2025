import { auth } from "@/libs/auth";
import { routing } from "@/libs/i18n/routing";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

// intl middleware
const intlMiddleware = createIntlMiddleware(routing);

// Adapt auth middleware
const authMiddleware = async (request: NextRequest) => {
  const res = await auth(request as any);
  return res instanceof NextResponse ? res : undefined;
};

// custom middleware
const customMiddleware = async (request: NextRequest) => {};

// Chain middlewares
function chainMiddleware(
  middlewares: Array<
    (request: NextRequest) => Promise<NextResponse | void> | NextResponse | void
  >,
) {
  return async (request: NextRequest) => {
    for (const middleware of middlewares) {
      const result = await middleware(request);
      if (result) {
        return result;
      }
    }
    return NextResponse.next();
  };
}

// Combine middlewares
const combinedMiddleware = chainMiddleware([
  customMiddleware,
  authMiddleware,
  (request: NextRequest) => intlMiddleware(request),
]);

export default combinedMiddleware;

// Configuração do matcher
export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
