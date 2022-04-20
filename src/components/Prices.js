import React from "react";
import { StyledRent } from "./styles/Rent.styled";

export default function Prices({
  item: { price, nbrPers, subject, comment, choice },
}) {
  return (
    <StyledRent>
      <div className="group">
        <p className="price">{price}</p>
        <p className="txt-1">{nbrPers}</p>
        <p className="txt-2">{subject}</p>
        <p className="txt-3">{comment}</p>
        <div>
          <button>{choice}</button>
        </div>
      </div>
    </StyledRent>
  );
}
