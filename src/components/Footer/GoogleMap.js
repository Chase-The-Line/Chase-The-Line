/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
const GoogleMap = () => {
  return (
    <>
      {" "}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21210.794661483793!2d-0.09654860365560144!3d48.353810713889665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4809dc2bff4be47b%3A0x40d37521e0abf60!2s72130%20Saint-L%C3%A9onard-des-Bois!5e0!3m2!1sfr!2sfr!4v1649858588638!5m2!1sfr!2sfr"
        width="100%"
        height="560"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};
export { GoogleMap };
