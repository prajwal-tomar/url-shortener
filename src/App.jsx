import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AdvancedStatisticsPage from "./components/AdvancedStatisticsPage";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <div className="font-poppins relative">
      <Navbar />
      <Hero />
      <AdvancedStatisticsPage />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
