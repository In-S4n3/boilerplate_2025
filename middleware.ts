import createMiddleware from "next-intl/middleware";
import { routing } from "@/app/libs/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|en|de|es|it|pt)/:path*"],
};
