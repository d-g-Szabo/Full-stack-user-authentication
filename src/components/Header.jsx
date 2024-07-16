import Link from "next/link";
import HeaderStyles from "@/components/Header.module.css";
import { ActiveLink } from "./ActiveLink";

export default function Header() {
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
      </nav>
    </header>
  );
}
