"use client";
// This is a custom component that will be used to create a link that will be active when the user is on that page

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ActiveLink({ href, children }) {
  // we use the usePathname hook to get the current pathname
  const pathname = usePathname();
  // we compare the current pathname with the href prop to see if the link is active
  const isActive = pathname === href;

  return (
    // we add a class to the link if it is active to change the color
    <Link href={href} className={isActive ? "text-orange-400" : ""}>
      {/* // we pass the children prop to the link to render the text inside the link tag */}
      {children}
    </Link>
  );
}
