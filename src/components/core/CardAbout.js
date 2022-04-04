import { Box, Typography } from "@mui/material";
import React from "react";

export default function CardAbout() {
  return (
    <Box
      sx={{
        m: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: 1,
        width: "542px",
        height: "325px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "0px 0px 29px 0px",
          marginBottom: "7px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontFamily: "Libre Baskerville, serif",
            fontWeight: 700,
            lineHeight: "120%",
            color: "rgba(0, 0, 0, 1)",
            width: "543px",
            wordWrap: "break-word",
          }}
        >
          A propos de moi
        </Typography>
      </Box>
      <Box className="text flex-row-vstart-hstart">
        <Typography
          sx={{
            justifyContent: "flex-end",
            fontSize: "18px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            lineHeight: "140%",
            color: "rgba(60, 60, 67, 1)",
            textAlign: "justify",
            width: "543px",
            wordWrap: " break-word",
          }}
        >
          Bonjour à tous, je m’appelle Maxime et je me lance dans la création
          d’un magasin de vélo. Celui-ci comprendrait : vente, entretien,
          réparation ainsi que des sorties encadrées et une école pour apprendre
          la discipline. Il serait situé sur le secteur de St Léonard des Bois,
          dans la Sarthe. Le but est de créer et développer un espace loisir
          convivial qui deviendrait également un lieu de rendez-vous.{" "}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Libre Baskerville, serif",
            fontWeight: 700,
            lineHeight: "120%",
            color: "rgba(0, 0, 0, 1)",
            width: "543px",
            wordWrap: "break-word",
            mt: 5,
          }}
        >
          Mon parcours . . .
        </Typography>
      </Box>

      <Box>
        <img
          sx={{ width: "760px", height: "248px", left: "299px", top: "551px" }}
          src="./assets/images/time.svg"
          alt="time"
        />
      </Box>
    </Box>
  );
}
