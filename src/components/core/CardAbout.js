import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";


export default function About() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "64px 48px",
        position: "absolute",
        width: "1276px",
        background: "#F3F5F6",
      }}
    >
      <Container
      // sx={{
      //   display: "flex",
      //   width: "542px",
      //   flexGrow: 1,
      // }}
      >
        <CardContent>
          <Container
          // sx={{
          //   p: 3,
          //   m: "7px 0px",
          // }}
          >
            <Typography
              sx={{
                fontFamily: "Libre Baskerville",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "120%",
              }}
            >
              A propos de moi
            </Typography>
          </Container>
          {/* Text */}
          <Container>
            <Typography
              sx={{
                width: "542px",
                height: "250px",
                fontStyle: "normal",
                fontSize: "16px",
                textAlign: "justify",
                color: "#3C3C43",
              }}
            >
              Irure deserunt minim voluptate do laborum fugiat deserunt minim.
              Exercitation proident velit id sit officia. Pariatur dolor nostrud
              irure enim exercitation quis adipisicing Lorem. Commodo voluptate
              et consectetur sunt ut irure adipisicing commodo dolor minim
              deserunt. Nisi non esse cupidatat elit duis ex laborum fugiat
              adipisicing excepteur. Velit id fugiat dolor id minim dolor veniam
              nulla anim non mollit. Commodo dolore voluptate est culpa labore.
            </Typography>
          </Container>
          <Container>
            <Typography
              sx={{
                fontFamily: "Libre Baskerville",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              Mon parcours ...
            </Typography>
          </Container>
          {/* Avatar */}

         
        </CardContent>
      </Container>
    </Card>
  );
}
