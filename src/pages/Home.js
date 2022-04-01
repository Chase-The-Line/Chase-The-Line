import { Box, Container, Typography } from "@mui/material";
import Navigation from "components/core/Navigation";
import React, { Component } from "react";
import Cards from "components/Cards";
import Footer from "components/core/Footer";

class Home extends Component {
  render() {
    return (
      <Box
        sx={{
          // maxWidth: "200em",
          // minHeight: "100vh",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://pixabay.com/get/ge6b2ba4a095135ef28bdb74450899274f8a5e4b069137b0338234bdaf491fee95106e4ba61f0ef36173148154c9c48c1df475869f4663db7abcac87c8fe072d9_1920.jpg)",
        }}
        alt="forest"
      >
        <Navigation />
        <Typography
          sx={{
            fontFamily: "Libre Baskerville",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "98px",
            textAlign: "center",
            mt: 5,
            color: "#fff",
          }}
        >
          Conquer the forest
        </Typography>
        <Container>
          <Typography
            sx={{
              width: "auto",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "22px",
              textAlign: "center",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Typography>
        </Container>
        <Cards />
        <Footer/>
      </Box>
    );
  }
}

export default Home;
