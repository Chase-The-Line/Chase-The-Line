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
      "Êtes-vous sûr de vraiment vouloir le savoir ?.",
    icon: iconStyle(RiChat1Fill),
    imgClass: "one",
    // link: "./a-propos",
  
  },
  {
    id: 2,
    name: "Mon atelier",
    description:
      "La salle d'opération de vos machines.",
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
