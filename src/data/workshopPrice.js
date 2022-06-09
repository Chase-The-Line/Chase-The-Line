import { MdSettings } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { ImPriceTags } from "react-icons/im";
import { GiStoneWheel } from "react-icons/gi";
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

const workshopPrice = [
  {
    id: 1,
    icon: iconStyle(MdSettings),
    title: "Suspensions",
    price: "",
    price2: "",
    price3: "",
    time: "",
    pers: "",
    features: [
      "Entretien fourche: 110€",
      "Entretien amortisseur: 120€",
      "Télémétrie ( réglage suspension personnalisé ): 100€",
    ],
  },
  {
    id: 2,
    icon: iconStyle(ImPriceTags),
    title: "Forfaits",
    price: "",
    time: "",
    pers: "",
    features: [
      "Forfait révision: 35€, serrage,pression des pneus, contrôle frein,contrôle chaîne, réglage dérailleur ",
      "Forfait révision: 55€, forfait révision + dévoilage + purges de freins + changements des câbles",
      "Nettoyage vélo: 10€",
    ],
  },
  {
    id: 3,
    icon: iconStyle(FiSettings),
    title: "Freinage",
    price: "",
    time: "",
    pers: "",
    features: ["Purge 1 frein 25€", "Changement patins ou plaquettes 10€"],
  },
  {
    id: 4,
    icon: iconStyle(GiStoneWheel),
    title: "Roues",
    price: "",
    time: "",
    pers: "",
    features: ["Changement chambre ou pneu 5€", "Dévoilage roue 15€"],
  },
  {
    id: 5,
    icon: iconStyle(MdSettings),
    title: "Transmission",
    price: "",
    time: "",
    pers: "",
    features: [
      "Changement chaîne + réglage 10€",
      "Nettoyage transmission 25€ ",
      "Réglage dérailleur avant ou arrière 10€ ",
    ],
  },
];

export default workshopPrice;
