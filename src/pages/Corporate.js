import React from "react";
import { Card } from "react-bootstrap";

const CorpStyle = {
  main: {
    backgroundColor: "#000",
    height: "100vh",
  },
  title: {
    color: "#ff7b00",
    marginTop: "50px",
  },

  text: {
    color: "#fff",
    marginTop: "30px",
  },
};
const Corporate = () => {
  return (
    <div>
      <Card style={CorpStyle.main}>
        <Card.Title style={CorpStyle.title}>
          <h1>Corporate</h1>
        </Card.Title>
        <Card.Text style={CorpStyle.text}>
          Upskill Today has a pool of committed, motivated and reliable IT
          professionals and ready to deploy to your organisation.
        </Card.Text>
      </Card>
    </div>
  );
};

export default Corporate;
