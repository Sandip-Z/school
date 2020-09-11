import React from "react";
import TopNav from "../../Components/LandingPage/TopNav";
import Navbar from "../../Components/LandingPage/Navbar";
import Header from "../../Components/LandingPage/Header";
import Parallax from "../../Components/LandingPage/Parallax";
import Board from "../../Components/LandingPage/Board";
import parallaxBackground from "../../Asset/1456917096_Libraries.jpg";

const LandingPage = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <Header />
      <Board />
      <Parallax
        background={parallaxBackground}
        text="Nepal College of Information Technology - NCIT, established in 2001, runs Pokhara University-affiliated Bachelor's and Master's programs - BE, BBA, ME, MSc & MCIS. Our Engineering Degrees are approved by the Nepal Engineering Council. "
        buttonText=""
      />
    </>
  );
};

export default LandingPage;
