import { Icon } from "@iconify/react";
import { Img } from "components/Content/ContentStyles";
import { FaFacebook, FaInstagram } from "react-icons/fa";

/* eslint-disable jsx-a11y/iframe-has-title */
const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Chase.The.Linemaxdvst/"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://odysee.com/@chasetheline:e?r=CP6hvkp8AuNgY4Z1ZGRGDm3P7Afg6tKc"
          >
            <Icon icon="simple-icons:odysee" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/chasetheline.shop/"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="contact-box">
          <div>
            <Img src="./images/LogoFooter.svg" alt="logo" />
            <h1 className="title">Pour me contacter</h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
          </div>
          <img src="./images/leaves.png" className="leaves" alt="" />
          <div className="c-inputs">
            <div className="contact-info">
              <div className="info">
                <div className="information">
                  <img src="./images/location.png" className="icon" alt="" />
                  <p>2 Rue des Alpes Mancelles, 72130 Saint-Léonard-des-Bois</p>
                </div>
                <div className="information">
                  <img src="./images/mail.png" className="icon" alt="" />
                  <p>chasetheline72@gmail.com</p>
                </div>
                <div className="information">
                  <img src="./images/phone.png" className="icon" alt="" />
                  <p>06.71.41.23.26</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.504059907182!2d-0.08059358400187225!3d48.35083717924099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4809df4241c84ccd%3A0xf3e1f14e32b0e66f!2sChase%20The%20Line!5e0!3m2!1sfr!2sfr!4v1654883417223!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
