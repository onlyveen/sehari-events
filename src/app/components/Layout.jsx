import React, { useContext,useState,useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/styles.scss";
import ModalPlayer from "./ModalPlayer";
import { PlayerContext } from "../context/PlayerContext";
import Head from "next/head";

import Confetti from 'react-confetti'

const Layout = ({ children }) => {
  const { playerStatus, setPlayerStatus } = useContext(PlayerContext);
  const [windowSize, setWindowSize] = useState({
    width: 0,  // Initialize with default values
    height: 0,
  });

  useEffect(() => {
    // Check if window is defined to ensure code runs only on the client
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Set initial size
      handleResize();

      // Add event listener to update size on resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
     <Head>
      {/* Primary Meta Tags */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sehari Events: Your Go-To Event Planning Solution | Bengaluru</title>
      <meta name="description" content="Sehari Events in Bengaluru offers top-notch event planning services. From birthdays to corporate launches, we bring your vision to life with creativity and precision." />
      <meta name="keywords" content="Sehari Events, event planning, birthdays, corporate events, Bengaluru, Karnataka, event management, themed parties, social gatherings" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="./logo-icon.svg" />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Sehari Events: Your Go-To Event Planning Solution | Bengaluru" />
      <meta property="og:description" content="Sehari Events in Bengaluru offers top-notch event planning services. From birthdays to corporate launches, we bring your vision to life with creativity and precision." />
      <meta property="og:image" content="/seo.png" />
      <meta property="og:url" content="https://seharievents.netlify.com" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sehari Events: Your Go-To Event Planning Solution | Bengaluru" />
      <meta name="twitter:description" content="Sehari Events in Bengaluru offers top-notch event planning services. From birthdays to corporate launches, we bring your vision to life with creativity and precision." />
      <meta name="twitter:image" content="/seo.png" />
      <meta name="twitter:url" content="https://seharievents.netlify.com" />
    </Head>
    <Confetti
      width={windowSize.width}
      numberOfPieces={50}
      height={windowSize.height}
      gravity={0.02}
      colors={["#E84779",
        "#A856A8",
        "#2F7CEA",
        "#62D18A",
        "#EAAC38",]}
    />
      <main id="page">
        <Nav></Nav>
        <div className="content">{children}</div>
        <Footer></Footer>
      </main>
      {playerStatus && playerStatus.open && playerStatus.url ? (
        <ModalPlayer
          url={playerStatus.url}
          setOpen={() => setPlayerStatus({ url: null, open: false })}
        />
      ) : null}
    </>
  );
};

export default Layout;
