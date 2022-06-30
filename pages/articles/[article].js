import React from "react";

export default function article(props) {
  if (!props.articleEnCours) {
    return <h1>Chargement en cours</h1>;
  }

  return (
    <div>
      <h2 className="text-center my-10 font-bold text-[20px]">{props.articleEnCours.title}</h2>
      <p className="mx-10 text-center">{props.articleEnCours.body}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const idArticleEnCours = context.params.article;
  console.log(idArticleEnCours);

  const articleEnCours = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idArticleEnCours}`
  ).then((response) => response.json());

  if (!articleEnCours) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articleEnCours,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (response) => response.json()
  );

  const paths = data.map((element) =>
    // console.log(element.id)
    ({
      params: { article: element.id.toString() },
    })
  );

  return {
    paths,
    fallback: false,
  };
}
