import CardAccueil from "../components/Card/CardAccueil";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-lg text-center font-semibold my-4">Bienvenue</h1>
      <p className="text-gray-500 text-center">Voici le blog</p>
      <div className="m-10">
        <div className="flex justify-center">
          <CardAccueil
            titre="Lisez les articles"
            span="Maximisez votre culture web"
            description="Chaque auteur tente de vous apporter le plus de valeur possible par article."
            titreLien="Visite le blog"
            lien="/articles"
          ></CardAccueil>
          <CardAccueil
            titre="Faites un tous vers la liste des membres"
            span="Faites vous des amis"
            description="Ajoutez, invitez et discutez avec les différents membres"
            titreLien="Découvrez la liste des membres"
            lien="/users"
          ></CardAccueil>
        </div>
      </div>
    </div>
  );
}
