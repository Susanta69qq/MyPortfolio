import React from "react";
import Page1 from "./pages/Page1";
import Header from "./components/Header";
import Page2 from "./pages/Page2";

import SmoothScroll from "../SmoothScroll.jsx";
import Page3 from "./pages/Page3.jsx";
import Page5 from "./pages/Page5.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => {
  return (
    <>
      <SmoothScroll />
      <div id="main" className="relative">
        <Header />
        <Page1 />
        <Page2 />
        <Page3 />
        <Projects />
        <Page5 />
      </div>
    </>
  );
};

export default App;
