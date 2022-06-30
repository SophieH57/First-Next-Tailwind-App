import Link from "next/link";
import React from "react";

export default function CardUser(props) {
  return (
    <div className="border-2 m-2 py-4 px-2 flex flex-row justify-between">
      <h2 className="ml-6 font-semibold">{props.username}</h2>
      <div className="mr-6">
        <Link href={`/users/${props.id}`}>
          <a className="underline text-blue-500 hover:font-bold hover:no-underline">
            Contacter
          </a>
        </Link>
      </div>
    </div>
  );
}
