import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  // palette: {
  //   type: "light",
  //   primary: {
  //     main: "#40a339",
  //   },
  //   secondary: {
  //     main: "#01312b",
  //   },
  //   success: {
  //     main: "#2dfdc6",
  //   },
  //   error: {
  //     main: "#f44336",
  //   },
  //   warning: {
  //     main: "#ff9800",
  //   },
  //   info: {
  //     main: "#2196f3",
  //   },
  //   divider: "rgba(0,0,0,0.12)",
  //   text: {
  //     primary: "rgba(0,0,0,0.87)",
  //   },
  // },
  typography: {
    "fontFamily": `"Montserrat", "Libre Baskerville", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

export { theme };
