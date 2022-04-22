import React from "react";
import WhiteNav from "components/Navbar/WhiteNav";
import { StyledWorkshop } from "components/Workshop/Workshop.styled";
import Footer from "components/Footer/Footer";
import Work from "components/Workshop/Work";

export default function Workshop() {
  return (
    <StyledWorkshop>
      <WhiteNav />
      <Work />
      <Footer />
    </StyledWorkshop>
  );
}
