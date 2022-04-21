// import { About, Bicycle, News } from "components/Card/Card.styled";

import { Bicycle, News, About } from "components/Card/DivCard.styled";

const content = [
  {
    id: 1,
    icon: <About />,
    link:"./a-propos",
    title: "Qui suis-je ?",
    body: "Je m’appelle Maxime et je me lance dans la création d’un magasin de vélo.",
  },
  {
    id: 2,
    icon: <Bicycle />,
    link:"./atelier",
    title: "Mon atelier",
    body: "Chase The Line c'est un  atelier de réparation et d’entretien de cycle et suspensions.",
  },
  {
    id: 3,
    icon: <News />,
    link:"./newsletter",
    title: "Newsletter",
    body: "Inscrivez-vous pour ne rien rater et garder contact.",
  },
];

export default content;
