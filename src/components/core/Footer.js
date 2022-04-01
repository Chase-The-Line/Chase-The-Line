import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <BottomNavigation
      sx={{
        maxWidth: "200em",
        mt: 10,
        background: " #01312B",
        height: "200px",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#fff",
        }}
      >
        LOGO
      </Typography>
      <Typography
        sx={{
          mt: 5,
          fontSize: "15px",
          alignItems: "center",
          color: "#FFFFFF",
          opacity: "0.5",
          display: "flex",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Typography>
    </BottomNavigation>
  );
}
