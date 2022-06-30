import Link from "next/link";
import React from "react";

export default function CardAccueil(props) {
  return (
    <div className="border-2 m-2 py-4 px-2 w-96 h-48">
      <h2 className="font-semibold">{props.titre}</h2>
      <span className="text-gray-500 text-sm">{props.span}</span>
      <p className="py-4">{props.description}</p>
      <Link href={props.lien}>
        <a className="underline text-blue-500 hover:font-bold hover:no-underline">{props.titreLien}</a>
      </Link>
    </div>
  );
}
