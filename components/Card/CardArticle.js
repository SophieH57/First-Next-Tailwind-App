import React from "react";
import Link from "next/link";

export default function Card(props) {
  return (
    <div className="border-2 m-2 py-4 px-2">
      <h2 className="font-semibold">{props.title}</h2>
      <p className="my-2 truncate ...">{props.body}</p>
      <Link idArticle={props.id} href={`/articles/${props.id}`}>
        <a className="underline text-blue-500 hover:font-bold hover:no-underline">Lire cet article</a>
      </Link>
    </div>
  );
}
