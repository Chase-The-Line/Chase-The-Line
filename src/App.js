import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Globalstyles";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Workshop from "pages/Workshop";
import Rent from "pages/Rent";
import NotFound from "pages/NotFound";

const theme = {
  colors: {
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/location" exact element={<Rent />} />
          <Route path="/atelier" exact element={<Workshop />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
