// import { Users, Users2, Users3 } from "components/Price/Rent.styled";

// const prices = [
//   {
//     id: 1,
//     price: "50 €",
//     nbrPers: "/1 à 7 personnes",
//     icon: <Users3 />,
//     subject: "Location",
//     comment: "Encadrement cyclisme et casques protecteurs inclus.",
//     choice: "Choisir ce plan",
//   },
//   {
//     id: 2,
//     price: "55 €",
//     nbrPers: "/3 à 4 personnes",
//     icon: <Users />,
//     subject: "Location",
//     comment: "Encadrement cyclisme et casques protecteurs inclus.",
//     choice: "Choisir ce plan",
//   },
//   {
//     id: 3,
//     price: "60 €",
//     nbrPers: "/1 à 2 personnes",
//     icon: <Users2 />,
//     subject: "Location",
//     comment: "Encadrement cyclisme et casques protecteurs inclus.",
//     choice: "Choisir ce plan",
//   },
// ];

// export default prices;



/**************************** */


import { Users, Users2, Users3 } from "components/Price/Rent.styled";

const prices = [
  {
    id: 1,
    title: "Location",
    price: "50€ /1 à 7 personnes",
    features: ["Encadrement cyclisme", "casques protecteurs inclus."],
    icon: <Users3 />,
  },
  {
    id: 2,
    title: "Location",
    price: "55€ /3 à 4 personnes",
    features: ["Encadrement cyclisme", "casques protecteurs inclus."],
    icon: <Users />,
  },
  {
    id: 3,
    title: "Location",
    price: "60€ /1 à 2 personnes",
    features: ["Encadrement cyclisme", "casques protecteurs inclus."],
    icon: <Users2 />,
  },
];

export default prices;
