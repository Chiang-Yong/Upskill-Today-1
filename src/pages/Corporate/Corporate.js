import React from "react";
import { Card } from "react-bootstrap";

const CorpStyle = {
  main: {
    backgroundColor: "#fff9eb",
    height: "50vh",
  },
  title: {
    color: "#ff7b00",
    marginTop: "50px",
  },

  text: {
    color: "#000",
    marginTop: "30px",
  },
};
const Corporate = () => {
  return (
    <div>
      <Card style={CorpStyle.main}>
        <Card.Title style={CorpStyle.title} className="d-flex justify-content-center shadow-lg">
          <h1>Corporate</h1>
        </Card.Title>
        <Card.Text style={CorpStyle.text} className="d-flex justify-content-center" variant="dark">
          Upskill Today has a pool of committed, motivated and reliable IT
          professionals and ready to deploy to your organisation.
        </Card.Text>
      </Card>
    </div>
  );
};

export default Corporate;
