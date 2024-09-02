import React from "react";
import Layout from "../app/components/Layout";

const spares = () => {
  const imgData = [
    {
      name: "CF Flanges Components",
      imgsrc: "/spares/CF-Flanges-Components.jpg",
    },
    {
      name: "Flanges Components",
      imgsrc: "/spares/Flanges-Components.jpg",
    },

    {
      name: "KF Flanges Components",
      imgsrc: "/spares/KF-Flanges-Components.jpg",
    },
    {
      name: "Horse",
      imgsrc: "/spares/horse-1.jpg",
    },
    {
      name: "Horse",
      imgsrc: "/spares/horse-2.jpg",
    },
    {
      name: "Horse",
      imgsrc: "/spares/horse-3.jpg",
    },
    {
      name: "Horse",
      imgsrc: "/spares/horse-4.jpg",
    },
    {
      name: "Horse",
      imgsrc: "/spares/horse-5.jpg",
    },
    {
      name: "Horse",
      imgsrc: "/spares/horse-6.jpg",
    },
    {
      name: "Horse",
      imgsrc: "/spares/horse-7.jpg",
    },
    {
      name: "Horse",
      imgsrc: "/spares/horse-8.jpg",
    },
    {
      name: "Vacuum Pirine Gauge",
      imgsrc: "/spares/Vacuum-pirine-gauge-1.jpg",
    },
    {
      name: "Vacuum Pirine Gauge",
      imgsrc: "/spares/Vacuum-pirine-gauge-2.jpg",
    },
    {
      name: "Vacuum Pirine Gauge",
      imgsrc: "/spares/Vacuum-pirine-gauge-3.jpg",
    },
    {
      name: "Vanes",
      imgsrc: "/spares/Vanes-1.jpg",
    },
    {
      name: "Vanes",
      imgsrc: "/spares/Vanes-2.jpg",
    },
    {
      name: "Filter",
      imgsrc: "/spares/filter.jpg",
    },
  ];
  return (
    <div>
      <Layout>
        <div className="cpage spares">
          <div className="container">
            <h1>Spares</h1>
            <div className="imggal">
              {imgData.map((item) => (
                <div className="imgitem">
                  <img src={item.imgsrc} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default spares;
