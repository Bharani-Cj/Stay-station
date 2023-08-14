import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import "./App.css";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import LoginAndSignup from "./components/LoginAndSignup/LoginAndSignup";
import { useState } from "react";

function App() {
  const [loginClick, setLoginClick] = useState(false);

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header setLoginClick={setLoginClick} />
        <Hero />
        {loginClick && <LoginAndSignup setLoginClick={setLoginClick} />}
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
