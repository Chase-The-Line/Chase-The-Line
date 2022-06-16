import Contact from "components/Contact/Contact";
import React from "react";
import { StyledContact } from "components/Contact/Contact.styled";
import DarkNav from "components/Navbar/DarkNav";

export default function ContactForm() {
  return (
    <div>
      <StyledContact>
        <DarkNav />
        <Contact />
      </StyledContact>
    </div>
  );
}
