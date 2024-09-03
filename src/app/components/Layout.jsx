import React, { useContext } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/styles.scss";
import ModalPlayer from "./ModalPlayer";
import { PlayerContext } from "../context/PlayerContext";
import Head from "next/head";

const Layout = ({ children }) => {
  const { playerStatus, setPlayerStatus } = useContext(PlayerContext);
  console.log(playerStatus);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Find all your electrical needs at S Enterprises, Visakhapatnam. We offer VFD, switch gear, motors, pumps, Havells, Elmex, Finecab Electricals & more. Visit us at Revenue Ward 60, Visweswaraya Nagar."
        ></meta>
        <link rel="icon" href="./favicon.svg" />

        <meta charset="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Primary Meta Tags --> */}
        <title>
          S Enterprises: Your Solution for Electrical Needs | VFD, Switch Gear,
          Motors, Pumps & More
        </title>
        <meta
          name="title"
          content="Welcome to Sehari Events Website |  olution for all your electrical needs"
        />

        <meta
          name="keywords"
          content="S Enterprises, electrical solutions, VFD, switch gear, motors, pumps, Havells, Elmex, Finecab Electricals, Visakhapatnam, Andhra Pradesh, Sri Nagar, Visweswaraya Nagar, D Mart"
        />
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph / Facebook Tags--> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Welcome to Sehari Events Website | Solution for all your electrical needs"
        />
        <meta
          property="og:description"
          content="Find all your electrical needs at S Enterprises, Visakhapatnam. We offer VFD, switch gear, motors, pumps, Havells, Elmex, Finecab Electricals & more. Visit us at Revenue Ward 60, Visweswaraya Nagar."
        />

        <meta property="og:image" content="/seo.jpg" />
        <meta property="og:url" content="https://senterprises.netlify.com" />

        <meta name="twitter:image" content="/seo.jpg" />
        <meta
          property="twitter:url"
          content="https://senterprises.netlify.com"
        />
      </Head>
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
