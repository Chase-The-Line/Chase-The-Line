import { Box, Grid, Container } from "@mui/material";
import AboutCard from "components/AboutCard";
import WorkshopCard from "components/WorkshopCard ";
import NewsletterCard from "components/NewsletterCard";
import Buttons from "components/Buttons";

export default function Cards() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 15 }}>
        <Buttons />
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <AboutCard />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <WorkshopCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <NewsletterCard />
        </Grid>
      </Grid>
    </Container>
  );
}
