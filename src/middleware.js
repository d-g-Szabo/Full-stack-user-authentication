// copy the template from the docs
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// I want to tell clerk what routes are protected using the matcher
const isProtectedRoute = createRouteMatcher(
  // define the routes that are protected
  ["/rollers(.*)", "/newRoller(.*)"]
);
// to define public and protected routes, use the clerkMiddleware function
export default clerkMiddleware((auth, req) => {
  // if the route is protected, protect it
  if (isProtectedRoute(req)) auth().protect();
});

// the matcher is an array of regex strings that will be used to match the paths that the middleware should be applied to
// the matcher is written using regex
export const config = {
  // find matches where the route starts with / and dont filter anything that comes after. Find all matches.
  // ! Dont change this line
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
