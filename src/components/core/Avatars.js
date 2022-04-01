import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Avatars() {
  return (
    <Container>
      <Stack
        sx={{
          /* Auto layout */

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "0px",

          //   position: "static",
          width: "192px",
          height: "374px",
          left: "843px",

          /* Inside auto layout */

          order: 1,
          alignSelf: "stretch",
          flexGrow: 0,
          margin: " 0px 156px",
        }}
        direction="row"
      >
        <Avatar
          sx={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "flex-end",
            padding: "0px",
            // position: "static",
            width: "192px",
            height: "192px",
            // margin: "0px 10px",
          }}
          alt="M"
          src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
      </Stack>
      <Typography
        sx={{
          /* Name */

          /* Auto layout */

          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "20px 0px 0px",

          position: "static",
          width: "192px",
          height: "130px",
          left: "0px",
          top: "192px",

          /* Inside auto layout */

          flex: "none",
          order: 1,
          alignSelf: "stretch",
          flexGrow: 0,
          margin: "0px 0px",
          color:"#0000"
        }}
      >
        Maxime Davoust Location, entretien, réparation cycles en atelier ou à
        domicile
      </Typography>
    </Container>
  );
}
