// app/(auth)/(routes)/sign-in/[[..sign-in]]/page.ts

// (auth) - parentheses creates a route group for organization, not included in route url path
//          https://nextjs.org/docs/app/building-your-application/routing/colocation

// [[..sign-in]] - optional catch-all segment with ellipsis and double square brackets
//                 https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes

import { SignIn } from "@clerk/nextjs";
 
// default exports used for single value per file as opposed to name exports
export default function Page() {
  return <SignIn />;
}