import About from "../app/components/About";
import Header from "../app/components/Header";
import Layout from "../app/components/Layout";

import React, { useState } from "react";
import { PlayerContext } from "../app/context/PlayerContext";
import WhySection from "../app/components/WhySection";
import Portfolio from "../app/components/Portfolio";
import Testimonials from "../app/components/Testimonials";
import Team from "../app/components/Team";



const index = ({ url }) => {
  const [playerStatus, setPlayerStatus] = useState({});
  return (
    <>
      <div id="home"></div>
      <PlayerContext.Provider value={{ playerStatus, setPlayerStatus }}>
        <Layout>
          <Header />
          <About />
          <WhySection/>
          <Portfolio/>
          <Testimonials/>
          <Team/>
        </Layout>
      </PlayerContext.Provider>
    </>
  );
};

export default index;
