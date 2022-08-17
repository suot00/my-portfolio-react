import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero-Section/HeroSection";
import Customer from "./components/Customer/Customer";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Careers from "./components/Careers/Careers";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <HeroSection />
        <Experience />
        <Contact />
        <Customer />
        <Services />
        <Careers />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
