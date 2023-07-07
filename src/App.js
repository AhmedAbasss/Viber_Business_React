import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Business from "./components/Business/Business";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Business />} />
          <Route path="/Business" element={<Business />} />
        </Routes>
      </BrowserRouter>
    </Layout>
    // xmlns="http://www.w3.org/2000/svg"
    // Switcher__SVGLoader-v1hd55-4 hvaymQ header-slider__loader
    // circle
    // class="Switcher__CircleLoader-v1hd55-5 jTQyQJ hider-slider__circle"
    // {/* <svg className={classes.Switcher_SVGLoader} xmlns="http://www.w3.org/2000/svg"></svg> */ }

  );
}

export default App;
