import Link from "next/link";
import HeaderStyles from "@/components/Header.module.css";
import { ActiveLink } from "./ActiveLink";
// import some clerk components, so the user can interact with authentication
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
//import auth to get the userID
import { auth } from "@clerk/nextjs/server";

export default function Header() {
  // destrucutre the userId from auth
  const { userId } = auth();

  return (
    <header>
      {/* we add the module name (that we choose in the import) and the rules we want to apply */}
      <h1 className={HeaderStyles.h1}>Coaster Rollers</h1>
      <nav className={HeaderStyles.nav}>
        <ActiveLink href="/" className="italic">
          Home
        </ActiveLink>
        <br />
        <ActiveLink href="/rollers" className="text-pink-700 font-extrabold">
          Rollers
        </ActiveLink>
        <br />
        <ActiveLink href="/newRoller" className="text-green-700 font-extrabold">
          Add a New Roller!
        </ActiveLink>

        <br />
        <ActiveLink href="/users" className="text-blue-700 font-extrabold">
          Users
        </ActiveLink>
        {/* authentication navigation */}
        <SignedIn>
          <Link href={`/users/${userId}`}>
            <p className="text-blue-700 font-extrabold">My Profile</p>
          </Link>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>Sign in</SignInButton>
          <SignUpButton>Sign up</SignUpButton>
        </SignedOut>
      </nav>
    </header>
  );
}
