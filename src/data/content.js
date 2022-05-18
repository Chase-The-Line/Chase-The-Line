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

// import { BsFillShieldLockFill } from "react-icons/bs";
// import { IoIosOptions } from "react-icons/io";
// import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
// import { GrHostMaintenance } from "react-icons/gr";
import { RiChat1Fill } from "react-icons/ri";
import { FaBicycle } from "react-icons/fa";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

const content = [
  {
    name: "Qui suis-je ?",
    description:
      "Je m’appelle Maxime et je me lance dans la création d’un magasin de vélo.",
    icon: iconStyle(RiChat1Fill),
    imgClass: "one",
    // link: "/",
  },
  {
    name: "Mon atelier",
    description:
      "Chase The Line c'est un  atelier de réparation et d’entretien de cycle et suspensions.",
    icon: iconStyle(FaBicycle),
    imgClass: "two",
    // link: "./atelier",
  },
  {
    name: "Newsletter",
    description: "Inscrivez-vous pour ne rien rater et garder contact.",
    icon: iconStyle(BiNews),
    imgClass: "three",
    // link: "./newsletter",
  },
];

export default content;
