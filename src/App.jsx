import React from "react";
import Page1 from "./pages/Page1";
import Header from "./components/Header";
import Page2 from "./pages/Page2";

import SmoothScroll from "../SmoothScroll.jsx";
import Page3 from "./pages/Page3.jsx";
import Page4 from "./pages/Page4.jsx";
import Page5 from "./pages/Page5.jsx";

const App = () => {
  return (
    <>
      <SmoothScroll />
      <div id="main">
        <Header />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
    </>
  );
};

export default App;
