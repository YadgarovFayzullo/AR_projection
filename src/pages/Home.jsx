import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Download from "../components/Download";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Download />
      <Footer />
    </div>
  );
}
