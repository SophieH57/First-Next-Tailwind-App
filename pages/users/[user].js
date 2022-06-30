import React from "react";

export default function user(props) {
  return (
    <div className="border-2 m-10 py-4 px-2 w-96 place-self-center">
      <h2 className="ml-6 font-semibold">{props.userSelectionne.name}</h2>
      <h3 className="text-gray-500 pb-4 ml-6">Username : {props.userSelectionne.username}</h3>
      <ul className="border-2">
        <li className="border-2 px-6 py-2">City : {props.userSelectionne.address.city}</li>
        <li className="border-2 px-6 py-2">Email : {props.userSelectionne.email}</li>
        <li className="border-2 px-6 py-2">Site web : {props.userSelectionne.website}</li>
        <li className="border-2 px-6 py-2">Téléphone : {props.userSelectionne.phone}</li>
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const idUserEnCours = context.params.user;
  // console.log("id user en cours : " + idUserEnCours);

  const userSelectionne = await fetch(
    `https://jsonplaceholder.typicode.com/users/${idUserEnCours}`
  ).then((response) => response.json());

  if (!userSelectionne) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userSelectionne,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  const paths = data.map((user) => ({
    params: { user: user.id.toString() },
  }));

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
