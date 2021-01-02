import React from "react";
import "./styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;