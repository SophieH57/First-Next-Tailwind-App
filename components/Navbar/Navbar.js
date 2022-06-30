import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 flex justify-center space-x-4 text-center text-white h-12 pt-2">
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
