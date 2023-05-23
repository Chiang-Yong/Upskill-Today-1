import React from "react";
import Marquee from "react-fast-marquee";
import Image1 from "../../images/accenture.png";
import Image2 from "../../images/cemex.png";
import Image3 from "../../images/cloudcomrade.png";
import Image4 from "../../images/daimler.png";
import Image5 from "../../images/dole.png";
import Image6 from "../../images/grundfos.jfif";
import Image7 from "../../images/Hewlett_Packard_Enterprise.png";
import Image8 from "../../images/Infosys.png";
import Image9 from "../../images/meta.svg";
import Image10 from "../../images/neoris.jfif";
import Image11 from "../../images/newport.png";
import Image12 from "../../images/oracle.jfif";
import Image13 from "../../images/SAP.png";
import Image14 from "../../images/tcs.jfif";
import Image15 from "../../images/tm.jfif";
import Image16 from "../../images/triumph.jfif";
import Image17 from "../../images/unilever.jfif";
import Image18 from "../../images/utopia.jpeg";
import Image19 from "../../images/visy.jfif";

const MarqueeStyle = {
    main:{
        height:"auto",
        width: "100%",
        marginTop: "2%",
        marginBottom: "3%",
        backgroundColor: "white",

    },
   image:{
    margin: "0 50px",
   }
}
const CompaniesMarquee = () => {
  return (
    <div style={MarqueeStyle.main} className="ms-auto">
        
      <Marquee>
        <img src={Image1} alt="accenture" style={MarqueeStyle.image} height={50}/>
        <img src={Image2} alt="cemex" style={MarqueeStyle.image}height={22} />
        <img src={Image3} alt="cloudcomarade" style={MarqueeStyle.image} height={60}/>
        <img src={Image4} alt="diamler" style={MarqueeStyle.image} height={18}/>
        <img src={Image5} alt="dole" style={MarqueeStyle.image} height={60}/>
        <img src={Image6} alt="grundfos" style={MarqueeStyle.image}height={50}/>
        <img src={Image7} alt="hpe" style={MarqueeStyle.image}height={50}/>
        <img src={Image8} alt="infosys" style={MarqueeStyle.image}height={35}/>
        <img src={Image9} alt="meta" style={MarqueeStyle.image}height={20}/>
        <img src={Image10} alt="neoris" style={MarqueeStyle.image}height={30}/>
        <img src={Image11} alt="newport" style={MarqueeStyle.image}height={60}/>
        <img src={Image12} alt="oracle" style={MarqueeStyle.image}height={60}/>
        <img src={Image13} alt="sap" style={MarqueeStyle.image}height={40}/>
        <img src={Image14} alt="tcs" style={MarqueeStyle.image}height={50}/>
        <img src={Image15} alt="tm" style={MarqueeStyle.image}height={40}/>
        <img src={Image16} alt="triumph" style={MarqueeStyle.image}height={80}/>
        <img src={Image17} alt="unilever" style={MarqueeStyle.image}height={65}/>
        <img src={Image18} alt="utopia" style={MarqueeStyle.image}height={80}/>
        <img src={Image19} alt="visy" style={MarqueeStyle.image}height={60}/>
      </Marquee>
    </div>
  );
};

export default CompaniesMarquee;
