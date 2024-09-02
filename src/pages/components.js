import React from "react";
import Layout from "../app/components/Layout";

const components = () => {
  const compData = [
    {
      name: "Air Admittance Valve",
      imgsrc: "/components/sp-air-admittance-valve.jpg",
    },
    {
      name: "Bellows",
      imgsrc: "/components/sp-bellows.jpg",
    },
    {
      name: "Blank Rings",
      imgsrc: "/components/sp-blank-rings.jpg",
    },
    {
      name: "Centering Rings",
      imgsrc: "/components/sp-centering-rings.jpg",
    },
    {
      name: "Flanges",
      imgsrc: "/components/sp-flanges.jpg",
    },
    {
      name: "KF CLAMPS",
      imgsrc: "/components/sp-KF-CLAMPS.jpg",
    },
    {
      name: "Neddle Valves",
      imgsrc: "/components/sp-neddle-valves.jpg",
    },
    {
      name: "T Flanges",
      imgsrc: "/components/sp-t-flanges.jpg",
    },
    {
      name: "O rings",
      imgsrc: "/components/sp-orings.jpg",
    },
  ];
  const spareData = [
    {
      name: null,
      imgsrc: "/components/vacuum-pumps-spare-parts-1.jpg",
    },
    {
      name: null,
      imgsrc: "/components/vacuum-pumps-spare-parts-2.jpg",
    },
  ];
  const vacuumGaugesData2 = [
    {
      name: null,
      imgsrc: "/components/VG-Digital-Penning-Gauge-1.jpg",
    },
    {
      name: null,
      imgsrc: "/components/VG-Digital-Penning-Gauge-2.jpg",
    },
    {
      name: null,
      imgsrc: "/components/VG-Digital-Penning-Gauge-3.jpg",
    },
  ];
  const vacuumGaugesData1 = [
    {
      name: null,
      imgsrc: "/components/VG-Digital-Pirani-Gauge-1.jpg",
    },
    {
      name: null,
      imgsrc: "/components/VG-Digital-Pirani-Gauge-2.jpg",
    },
    {
      name: null,
      imgsrc: "/components/VG-Digital-Pirani-Gauge-2.jpg",
    },
  ];
  const vacuumGaugesData3 = [
    {
      name: null,
      imgsrc: "/components/VG-Digital-Bourdon-Gauge-1.jpg",
    },
    {
      name: null,
      imgsrc: "/components/VG-Digital-Bourdon-Gauge-2.jpg",
    },
    {
      name: null,
      imgsrc: "/components/VG-Digital-Bourdon-Gauge-3.jpg",
    },
    {
      name: null,
      imgsrc: "/components/VG-Digital-Bourdon-Gauge-4.jpg",
    },
  ];
  const vacuumOilData = [
    {
      name: null,
      imgsrc: "/components/vacuum-oil-1.jpg",
    },
    {
      name: null,
      imgsrc: "/components/vacuum-oil-2.jpg",
    },
    {
      name: null,
      imgsrc: "/components/vacuum-oil-3.jpg",
    },
  ];
  const CNCData = [
    {
      name: null,
      imgsrc: "/components/CNC-1.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-2.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-3.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-4.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-5.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-6.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-7.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-8.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-9.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-10.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-11.jpg",
    },
    {
      name: null,
      imgsrc: "/components/CNC-12.jpg",
    },
  ];

  return (
    <div>
      <Layout>
        <div className="cpage components">
          <div className="container">
            <div>
              <h1>Components</h1>
              <p>
                We supply Vacuum pump components, Vacuum pump fittings and
                Vacuum filters, Vacuum Traps, Vacuum Condenser, Vacuum Valves,
                Vacuum gauges and Vacuum oil. Furthermore we produce any kind of
                special parts according to your sketches and drawings to fulfil
                your individual needs.
              </p>
              <div className="imggal">
                {compData.map((item) => (
                  <div className="imgitem">
                    <img src={item.imgsrc} alt={item.name} />
                    {item.name && <p>{item.name}</p>}
                  </div>
                ))}
              </div>
            </div>
            <h1>Vacuum Pumps Spare Parts</h1>
            <p>
              Vacuum pumps supply of vacuum pump spare parts and consumables,
              our selection includes repair kits, filters, KF fittings, oils,
              rotors, stators, plates, shafts
            </p>
            <div className="imggal">
              {spareData.map((item) => (
                <div className="imgitem">
                  <img src={item.imgsrc} alt={item.name} />
                  {item.name && <p>{item.name}</p>}
                </div>
              ))}
            </div>
            <div>
              <h1>Vacuum Gauges</h1>
              <p>
                Vacuum Systems supplying Pirani Vacuum Gauge, Penning Vacuum
                Gauge and Bourdon gauges
              </p>
              <h3>Digital Pirani Gauge</h3>
              <p>
                This Pirani Gauge instrument with two sensors having wide range
                of applications, in high vacuum systems where one sensor is used
                to measure backing vacuum and the other sensor can be used for
                measuring high vacuum. Pirani Gauge instruments can be used in
                high vacuum systems, coating units, sputtering units, and many
                other applications where vacuum to be measured in the range of
                High Pressure Pirani Range 1000mBar to 0.001mBar 1 Micron or 1
                mBar to 0.001 mBar 1 Micron. Single Pirani Gauge Head with KF
                Clamp Optional Dual Double Gauge Head to Measure at 2 places
                with one instrument, Push Button on Front Panel to Toggle with
                LED Indication of Selected Gauge Head vacuum applications
                operate only in a specific pressure range. Analog and digital
                total vacuum or pressure measurement instruments are employed to
                measure and control the total pressure in a vacuum system.
              </p>
              <div className="imggal">
                {vacuumGaugesData1.map((item) => (
                  <div className="imgitem">
                    <img src={item.imgsrc} alt={item.name} />
                    {item.name && <p>{item.name}</p>}
                  </div>
                ))}
              </div>
              <h3>Penning Gauges</h3>
              <p>
                These penning gauges are device use the vacuum level in more
                accurate manner. Our penning gauges are compact and convenient
                to use with excellent accuracy and durability. These penning
                gauges are highly efficient to use complete with its coupling
                and accessories. Our penning gauges are widely used in different
                industries such as beverages, pharmaceuticals, manufacturing and
                many others.
              </p>
              <div className="imggal">
                {vacuumGaugesData2.map((item) => (
                  <div className="imgitem">
                    <img src={item.imgsrc} alt={item.name} />
                    {item.name && <p>{item.name}</p>}
                  </div>
                ))}
              </div>
              <h3>Bourdon Vacuum gauges</h3>
              <p>Bourdon Vacuum gauges</p>
              <div className="imggal">
                {vacuumGaugesData3.map((item) => (
                  <div className="imgitem">
                    <img src={item.imgsrc} alt={item.name} />
                    {item.name && <p>{item.name}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1>Vacuum Oil</h1>
              <p>
                The vacuum pump is the most critical maintenance item in a
                degassing system. For oil sealed rotary vane vacuum pumps the
                most critical maintenance item is to change the pump oil
                frequently. The frequency will depend on the application and
                usage but it is recommend that if the oil ever turns cloudy,
                dark or is foul smelling, change it immediately. Any degassed
                solvents, water or other liquids will condense in the pump oil
                and lower the vacuum level the pump is able to achieve. Frequent
                oil changes will also extend the life of the vacuum pump.
              </p>
              <div className="imggal">
                {vacuumOilData.map((item) => (
                  <div className="imgitem">
                    <img src={item.imgsrc} alt={item.name} />
                    {item.name && <p>{item.name}</p>}
                  </div>
                ))}
              </div>
              <h3>Diffusion pump oil</h3>
              <p>
                This advanced high purity diffusion pump fluid is used in
                critical applications that require contamination-free ultra-high
                vacuum environments. Ultra accomplishes this through its
                extremely low back streaming characteristic, which is a
                consequence of its very high purity.
                <br />
                <b>Specifications:</b>   Vapor Pressure @ 25° C (77°F) 10 -7 to
                10 -8 Torr Viscosity @ 25° C (77°F) 37 cSt Boiling Point @ 0.5
                Torr 211° C (412ºF) Specific Gravity @ 25° C (77°F) 1.065 Flash
                Point &gt;210° C (410ºF)
              </p>
            </div>
            <div>
              <h1>Rotary Vane and Piston Pumps</h1>
              <p className="lesmar">
                vacuum pumps oils110b . Good vapor pressure and low back
                streaming make this a good choice for non-corrosive vacuum
                applications. This product will support vapor pressures down to
                1x10 -5 Torr. These vacuum pump oils have low vapor pressure,
                low evaporation loss, and high oxidative, thermal and viscosity
                stability. vacuum pump oils designed for long term lubrication
                in process pumps. They provide outstanding thermal and oxidative
                stability, a wide operating range and excellent water condensate
                separation.
              </p>
              <div className="imggal">
                <div className="imgitem">
                  <img
                    src="/components/OIL-Free-vacuum-pump-1.jpg"
                    alt="OIL Free vacuum pump"
                  />
                </div>
              </div>
              <br />
              <p className="lesmar">
                Vacuum Pump Oil offers the following benefits:
              </p>
              <ul>
                <li>Low volatility characteristics</li>
                <li>
                  Good air release properties to provide efficient pump
                  operation
                </li>
                <li>
                  Good demulsibility to separate quickly from water and resist
                  emulsion formation
                </li>
                <li>
                  Good wear protection under start-up and boundary conditions
                </li>
                <li>
                  Long service life due to high level of chemical and thermal
                  stability and freedom from deposit formation
                </li>
              </ul>
              <br />

              <p className="lesmar">
                These purity and quality make this the perfect choice for many
                Vacuum Applications.
              </p>
              <p className="lesmar">Features:</p>
              <ul>
                <li>Comact and sturdy design</li>
                <li>Effective gas ballast</li>
                <li>High water vapour</li>
                <li>Easy maintenance</li>
              </ul>
            </div>
            <div>
              <h1>OIL Free vacuum pump</h1>
              <p className="lesmar">
                Oil free vacuum pump made of chemically resistant fluoro
                plastics PTEF. Oil free vacuum pump has a wide range of
                applications like evacuation, evaporation and pumping of gases
                and vapors in chemical, biological and pharmaceutical
                laboratories for condensation of solvent vapors at the outlet.
                Typical applications are vacuum concentrators, gel dryers and
                filtration
              </p>
              <p className="lesmar">Features:</p>
              <ul>
                <li>chemical resistance</li>
                <li>superior vapor tolerance</li>
                <li>high performance even at low vacuum levels</li>
                <li>
                  optimized vacuum even with gas ballast for condensate purge
                </li>
                <li>whisper quiet and very low vibration</li>
                <li>separators at inlet and outlet to collect condensates</li>
              </ul>
              <br />
              <div className="imggal">
                <div className="imgitem">
                  <img
                    src="/components/OIL-Free-vacuum-pump-2.jpg"
                    alt="OIL Free vacuum pump"
                  />
                </div>
                <div className="imgitem">
                  <img
                    src="/components/OIL-Free-vacuum-pump-3.jpg"
                    alt="OIL Free vacuum pump"
                  />
                </div>
              </div>
            </div>
            <div>
              <h1>Vacuum Pump Using Application – CNC Laser Cutting Machine</h1>
              <div className="imggal">
                {CNCData.map((item) => (
                  <div className="imgitem">
                    <img src={item.imgsrc} alt={item.name} />
                    {item.name && <p>{item.name}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1>Rotary Vane Vacuum Pump Applications</h1>
              <ul className="duo">
                <li>Autoclaves</li>
                <li>Diffusion Pump Holding</li>
                <li>Drying</li>
                <li>Drying Chambers</li>
                <li>Evacuating Refrigeration Systems</li>
                <li>Evacuation of Process Chambers</li>
                <li>Forming</li>
                <li>Freeze Drying</li>
                <li>Laboratory Experimentation</li>
                <li>Leak Detection</li>
                <li>Packaging</li>
                <li>Pharmaceuticals</li>
                <li>Research &amp; Development Transformer Drying</li>
                <li>Vacuum Coating</li>
                <li>Vacuum Furnaces</li>
                <li>Vacuum Heat Treating</li>
                <li>Vacuum Melting</li>
                <li>Vacuum Metalizing</li>
                <li>Vacuum Packaging Liquid Gas Storage</li>
                <li>Metallurgy</li>
                <li>Metals Processing</li>
                <li>Packaging</li>
                <li>PET Processing</li>
                <li>Pharmaceuticals</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default components;
