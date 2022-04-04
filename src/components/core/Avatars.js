import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Right() {
  return (
    <Box
      sx={{
        m: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "192px",
        height: "374px",
      }}
    >
      <img
        sx={{ height: "192px", width: "100%" }}
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/in2h1gz9sof-I124%3A3130%3B401%3A10075?alt=media&token=bac180a3-597a-479a-9506-c71601c4fc04"
        alt="Not Found"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "19px 0px 0px 0px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            lineHeight: "120%",
            color: "rgba(1, 49, 43, 1)",
            textAlign: "center",
            width: "193px",
            wordWrap: "break-word",
          }}
        >
          Maxime Davoust
          <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
            Location, entretien, réparation cycles en atelier ou à domicile
          </Typography>
        </Typography>
      </Box>
      <img
        sx={{ height: "52px", width: "100%" }}
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/in2h1gz9sof-I124%3A3130%3B401%3A10079?alt=media&token=f514a332-c8d0-4dcd-a468-c1a91bc1c3c3"
        alt="Not Found"
      />
    </Box>
  );
}
