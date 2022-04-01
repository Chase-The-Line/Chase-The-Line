import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Container, List, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const pages = [
    { titre: "A propos de moi", lien: "a-propos" },
    { titre: "Mon atelier", lien: "atelier" },
    { titre: "Contact", lien: "contact" },
    { titre: "Images", lien: "images" },
  ];

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
      <Container>
        <Typography
          sx={{
            mt: 5,
            fontSize: "15px",
            textAlign: "center",
            color: "#FFFFFF",
            opacity: "0.5",
            display: "flex",
          }}
        >
          Consequat eu incididunt sunt irure. Consequat ullamco magna dolore
          labore sit ea quis elit proident. Minim sint aliqua id elit enim.
          Ullamco amet labore occaecat ea aliquip ex adipisicing eiusmod
          exercitation excepteur ullamco dolore sit. Ut incididunt eu aliqua
          laboris ullamco exercitation cupidatat.
        </Typography>
      </Container>
      {/* NAvigation */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <List
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.titre}
              onClick={() => navigate({ pathname: `/${page.lien}` })}
            >
              {/* <Container> */}
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "15px",
                  color: "#FFFFFF",
                  opacity: "0.5",
                }}
              >
                {page.titre}
              </Typography>
              {/* </Container> */}
            </MenuItem>
          ))}
        </List>
      </Box>
    </BottomNavigation>
  );
}
