import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{
          left: "17.08%",
          right: "66.76%",
          top: "70.56%",
          bottom: "27.44%",
          fontFamily: "Libre Baskerville",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "132%",
          display: "flex",
          alignItems: "center",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: " #fff",
          opacity: "0.6",
        }}
        gutterBottom
      >
        Newsletter
      </Typography>
      <Divider
        sx={{
          left: "24.44%",
          right: "71.6%",
          top: "74.56%",
          bottom: "25.22%",
        }}
      />
      <Typography
        sx={{
          width: "auto",
          mt: 2,
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "132%",
          display: "flex",
          alignItems: "center",
          letterSpacing: "1px",
          color: "#fff",
        }}
      >
        Inscrivez-vous pour ne rien rater et garder contact
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function AboutCard() {
  return (
    <Box>
      <Card
        sx={{
          background:
            "linear-gradient(76.87deg, rgba(255, 255, 255, 0.3) -7.84%, rgba(255, 255, 255, 0) 109.62%, rgba(255, 255, 255, 0.26) 109.62%)",
          backdropFilter: "blur(12px)",
          borderRadius: "9.26316px",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
