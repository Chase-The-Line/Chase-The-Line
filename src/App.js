import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Globalstyles";
import { Route, Routes, HashRouter } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Workshop from "pages/Workshop";
import Rent from "pages/Rent";
import NotFound from "pages/NotFound";
import ContactForm from "pages/ContactForm";

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
        <HashRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/location" exact element={<Rent />} />
            <Route path="/atelier" exact element={<Workshop />} />
            <Route path="/contact" exact element={<ContactForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
