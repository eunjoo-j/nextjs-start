import Link from "next/link";
import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav>
      <Link href="/">
        <div style={{ color: router.pathname === "/" ? "red" : "blue" }}>
          Home
        </div>
      </Link>
      <Link href="/about">
        <div style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </div>
      </Link>
    </nav>
  );
};
