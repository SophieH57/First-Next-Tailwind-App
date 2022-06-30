import Link from "next/link";
import React from "react";
import CardUser from "../../components/Card/CardUser";

export default function users(props) {
  console.log(props.utilisateurs);

  return (
    <div>
      <h1 className="text-lg text-center font-semibold my-4 ml-10">La liste des utilisateurs</h1>
      <ul className="list-none">
        {props.utilisateurs.map((utilisateur) => {
          return <CardUser {...utilisateur}></CardUser>;
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const utilisateurs = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  return {
    props: {
      utilisateurs,
    },
  };
}
