// import { Bicycle, News, About } from "components/Card/DivCard.styled";

// export const content = [
//   {
//     id: 1,
//     // icon: <About />,
//     link:"/",
//     title: "Qui suis-je ?",
//     body: "Je m’appelle Maxime et je me lance dans la création d’un magasin de vélo.",
//   },
//   {
//     id: 2,
//     // icon: <Bicycle />,
//     link:"./atelier",
//     title: "Mon atelier",
//     body: "Chase The Line c'est un  atelier de réparation et d’entretien de cycle et suspensions.",
//   },
//   {
//     id: 3,
//     // icon: <News />,
//     link:"./newsletter",
//     title: "Newsletter",
//     body: "Inscrivez-vous pour ne rien rater et garder contact.",
//   },
// ];

// export default content;

import React from "react";
import { IoMdBicycle } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { RiChat1Fill } from "react-icons/ri";
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

const content = [
  {
    id: 1,
    name: "Qui suis-je ?",
    description:
      "Je m’appelle Maxime et je me lance dans la création d’un magasin de vélo.",
    icon: iconStyle(RiChat1Fill),
    imgClass: "one",
    // link: "./a-propos",
  
  },
  {
    id: 2,
    name: "Mon atelier",
    description:
      "Chase The Line c'est un  atelier de réparation et d’entretien de cycle et suspensions.",
    icon: iconStyle(IoIosSettings),
    imgClass: "two",
    link: "./atelier",
  },
  {
    id: 3,
    name: "Location",
    description: "Si vous souhaitez partir à l'aventure c'est ici...",
    icon: iconStyle(IoMdBicycle),
    imgClass: "three",
    link: "./location",
  },
];

export default content;
