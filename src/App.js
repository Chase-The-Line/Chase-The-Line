import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styles/Global";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Workshop from "./pages/Workshop";

const theme = {
  colors: {
    // header: "#000",
    body: "#fff",
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
          <Route path="/atelier" exact element={<Workshop />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
