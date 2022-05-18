import React from "react";
import { IconPrices, StyledRent } from "./Rent.styled";


export default function Prices({
  item: { price, nbrPers, subject, comment, choice, icon, id },
}) {
  return (
    <StyledRent>
      <div
        className="easyloisirs_module"
        data-hash="5a819170bb53e8f0cd280e806ad6835af3b5bf04"
      >
        <div className="group">
          <p className="price">{price}</p>
          <IconPrices>{icon}</IconPrices>
          <p className="txt-1">{nbrPers}</p>
          <p className="txt-2">{subject}</p>
          <p className="txt-3">{comment}</p>
          <button>{choice}</button>
        </div>
      </div>
    </StyledRent>
  );
}
