import { HiUserAdd, HiUserGroup, HiUsers } from "react-icons/hi";
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

const prices = [
  {
    id: 1,
    icon: iconStyle(HiUserAdd),
    title: "Location",
    price: "80€ ",
    time: "Durée: 1 journée",
    pers: "Par personne",
    features: [
      "Encadrement cyclisme, possible à partir de 4 personnes",
      "casques protecteurs inclus.",
    ],
  },
  {
    id: 2,
    icon: iconStyle(HiUserAdd),
    title: "Location",
    price: "50€",
    time: "Durée: 1/2 journée",
    pers: "/5 à 7 personnes",
    features: [
      "Encadrement cyclisme, possible à partir de 4 personnes",
      "casques protecteurs inclus.",
    ],
  },
  {
    id: 3,
    icon: iconStyle(HiUserGroup),
    title: "Location",
    price: "55€ ",
    time: "Durée: 1/2 journée",
    pers: "/3 à 4 personnes",
    features: [
      "Encadrement cyclisme, possible à partir de 4 personnes",
      "casques protecteurs inclus.",
    ],
  },
  {
    id: 4,
    icon: iconStyle(HiUsers),
    title: "Location",
    price: "60€ ",
    time: "Durée: 1/2 journée",
    pers: "/1 à 2 personnes",
    features: [
      "Encadrement cyclisme, possible à partir de 4 personnes",
      "casques protecteurs inclus.",
    ],
  },
];

export default prices;
