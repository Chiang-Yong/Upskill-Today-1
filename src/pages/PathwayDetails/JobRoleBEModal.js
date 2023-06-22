import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./pathwaydetails.css"

function JobRoleBEModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pathway">
      <Button
        //style={{ backgroundColor: "#ff7b00", border: "none", fontWeight:"600" }}
        onClick={handleShow}
        className="pathway-button"
      >
        Find Out More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{background: "linear-gradient(to right, rgba(48, 65, 252,0.8), rgba(93, 107, 252,0.5))" }}>
          <Modal.Title className="fw-bold" style={{color:"white"}}>Back-End Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A <strong>back-end developer</strong> is a software engineer who
          focuses on the development of the server-side components of a software
          application. 
          <br />
          <br />
          They are responsible for designing and building the part
          of the software that runs on the server and is responsible for
          processing data and serving it to the front-end components of the
          application. 
          <br />
          <br />
          Back-end developers use a variety of technologies to
          build server-side components, including programming languages such as
          Java, Python, or Ruby, and database technologies such as SQL or NoSQL.
          They must have a strong understanding of data structures, algorithms,
          and system architecture, as well as good problem-solving skills.
        </Modal.Body>
        {/* <Modal.Footer style={{ background: "linear-gradient(to left, rgba(48, 65, 252,0.8), rgba(93, 107, 252,0.5))" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default JobRoleBEModal;
