import React from "react";
import WhatIsUpskillToday from "../../images/WhatIsUpskillToday.png"
import "./whatIsUpskill.css";


const WhatIsUpSkilled = () => {
  return (
    <div className="what-upskill">
      <img src={WhatIsUpskillToday} alt="what is upskill" />
      <div className="centered">
        <h1 className="text-center" style={{color:'#ff7b00'}}>What is Upskill Today?</h1>
        <p className="text-left">
          Upskill Today is a highly curated talent acquisition and talent
          retention strategy. Under this model, we select top candidates from
          our extended pool of recent graduates, technical professionals
          with obsolete or soon-to-be deprecated technology skills, and
          mid-career professionals seeking to move to Next-Gen technology roles.
        </p>
      </div>
    </div>
  );
};

export default WhatIsUpSkilled;
