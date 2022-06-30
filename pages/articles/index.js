import React from "react";
import CardArticle from "../../components/Card/CardArticle";

export default function articles(props) {
  console.log(props.articles[0]);

  return (
    <div>
      <div className="text-lg text-center font-semibold my-4 ml-10">
        Bienvenue sur la page des articles
      </div>
      <div className="m-10 grid grid-cols-3">
        {props.articles.map((article) => {
          return <CardArticle {...article}></CardArticle>;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => response.json());

  return {
    props: {
      articles,
    },
  };
}
