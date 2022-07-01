import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/articles">
        <a>Blog</a>
      </Link>
      <Link href="/users">
        <a>Liste</a>
      </Link>
    </nav>
  );
}
