import About from "pages/About";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Workshop from "pages/Workshop";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/a-propos" exact element={<About />} />
        <Route path="/atelier" exact element={<Workshop />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
