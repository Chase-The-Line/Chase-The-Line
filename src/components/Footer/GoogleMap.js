/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
const GoogleMap = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.504059907182!2d-0.08059358400187225!3d48.35083717924099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4809df4241c84ccd%3A0xf3e1f14e32b0e66f!2sChase%20The%20Line!5e0!3m2!1sfr!2sfr!4v1654883417223!5m2!1sfr!2sfr"
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
