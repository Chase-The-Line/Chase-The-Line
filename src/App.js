import { ThemeProvider } from "styled-components";
import GlobalStyles from "components/styles/Global";
import { Route, Routes } from "react-router-dom";
import About from "pages/About";
import Gallerie from "pages/Gallerie";
import Home from "pages/Home";
import Workshop from "pages/Workshop";
import Rent from "pages/Rent";
import Contact from "pages/Contact";

const theme = {
  colors: {
    body: "#FAF9F7",
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
          <Route path="/a-propos" exact element={<About />} />
          <Route path="/location" exact element={<Rent />} />
          <Route path="/atelier" exact element={<Workshop />} />
          <Route path="/images" exact element={<Gallerie />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
