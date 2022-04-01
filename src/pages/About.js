import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardAbout from "components/core/CardAbout";
import Avatars from "components/core/Avatars";

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CardAbout />
        </Grid>
        <Grid item xs={4}>
          <Avatars />
        </Grid>
      </Grid>
    </Box>
  );
}
