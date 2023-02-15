import React from "react";
import Footer from "../components/Footer";
import League from "../components/League";
import League2 from "../components/League2";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <League />
      <League2 />
      <Footer />
    </div>
  );
};

export default Home;
