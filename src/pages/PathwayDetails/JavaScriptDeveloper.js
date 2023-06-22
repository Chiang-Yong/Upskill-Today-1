import React from "react";
import { Row } from "react-bootstrap";
const src = "https://www.youtube.com/embed/upDLs1sn7g4";

const JSDstyle = {
  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
  },

  row: {
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  frame: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    width: "80%",
  },

  formCol: {
    width: "80%",
    paddingBottom: "2%",
    backgroundColor: "rgba(255,123,0,0.5)",
  },

  button: {
    marginTop: "5%",
    marginLeft: "2%",
    backgroundColor: "#ff7b00",
    fontWeight: "600",
    border: "none",
    outline: "none",
  },

  video: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: "clamp(1.5rem, 2.0vw, 2.5rem)",
    fontWeight: 800,
    color: "#ff7b00",
    paddingBottom: "2%",
  },

  text:{
    fontSize:"clamp(1.0rem, 1.15vw, 1.3rem)",
    fontWeight:700,
  }
};
const JavaScriptDeveloper = () => {
  return (
    <div style={JSDstyle.main}>
      <Row
        className="d-flex justify-content-center text-center"
        style={JSDstyle.row}
      >
        <h1 className="text-center" style={JSDstyle.title}>
          READY TO BE THE NEXT JAVASCRIPT DEVELOPER?
        </h1>
        <p className="text-center" style={JSDstyle.text}>Watch the video below</p>
        <div style={JSDstyle.video}>
          <iframe
            width="480"
            height="270"
            src={src}
            title="Youtube Player" 
          />
        </div>
      </Row>
    </div>
  );
};

export default JavaScriptDeveloper;
