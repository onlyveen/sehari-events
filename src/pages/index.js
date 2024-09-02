import About from "../app/components/About";
import Header from "../app/components/Header";
import Layout from "../app/components/Layout";

import React, { useState } from "react";
import { PlayerContext } from "../app/context/PlayerContext";

import Contact from "../app/components/Contact";
import Products from "../app/components/Products";

const index = ({ url }) => {
  const [playerStatus, setPlayerStatus] = useState({});
  return (
    <>
      <div id="home"></div>
      <PlayerContext.Provider value={{ playerStatus, setPlayerStatus }}>
        <Layout>
          <Header />
          <About />
          <Products />
          {/* <Contact /> */}
        </Layout>
      </PlayerContext.Provider>
    </>
  );
};

export default index;
