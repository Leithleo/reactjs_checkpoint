import React from "react";

import "./App.css";
import Header from "./Components/Header/header";
import SiteInfo from "./Components/Main/main";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="body">
      <Header />
      <SiteInfo />
      <Footer />
    </div>
  );
}

export default App;
