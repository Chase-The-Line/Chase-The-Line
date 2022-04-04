import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { List, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import logo from "assets/images/logo.svg";

export default function NavBlack({ children }) {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const pages = [
    { titre: "Home", lien: "" },
    { titre: "A propos de moi", lien: "a-propos" },
    // { logo },
    { titre: "Mon atelier", lien: "atelier" },
    { titre: "Contact", lien: "contact" },
  ];

  const toggleDrawer = (newOpenDrawer) => () => {
    setOpenDrawer(newOpenDrawer);
  };

  console.log(logo);

  const container =
    pages.window !== undefined ? () => pages.window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Box>
          <Toolbar
            disableGutters
            sx={{
              display: { xs: "flex", md: "block" },
            }}
          >
            <Grid justifyContent={"center"} container>
              <Grid xs={1} item></Grid>
            </Grid>
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
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#000",
                      }}
                    >
                      {page.titre}
                    </Typography>
                  </MenuItem>
                ))}
              </List>
            </Box>
            {/* Menu responsive */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                flexDirection: "row-reverse",
              }}
            >
              <IconButton
                size="large"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                open={openDrawer}
                container={container}
                anchor="left"
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                ModalProps={{ keepMounted: true }}
              >
                <Box sx={{ listStyleType: "none", background: " #01312B " }}>
                  {pages.map((page, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => navigate({ pathname: `/${page.lien}` })}
                      sx={{
                        justifyContent: "center",
                        color: "#000",
                        background: " #01312B ",
                      }}
                    >
                      <Typography>
                        {page.titre}
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              </SwipeableDrawer>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>

      <Container component="main" disableGutters maxWidth="100%">
        {children}
      </Container>
    </Box>
  );
}
