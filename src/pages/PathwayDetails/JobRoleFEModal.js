import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./pathwaydetails.css";

function JobRoleFEModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pathway">
      <Button
       // style={{ backgroundColor: "#ff7b00", border: "none",fontWeight:"600" }}
        onClick={handleShow}
        className="pathway-button"
      >
        Find Out More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ background: "linear-gradient(to right, rgba(156, 0, 252,0.8), rgba(227, 187, 252,0.8))" }}
        >
          <Modal.Title className="fw-bold" style={{color:"white"}}>Front-End Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A <strong>front-end developer</strong> is a software engineer who
          focuses on the development of the user interface of a software
          application.
          <br />
          <br />
          They are responsible for designing and building the part of the
          software that the user interacts with directly, such as web pages,
          forms, buttons, and other elements of the user interface. Front-end
          developers use a variety of technologies to create user interfaces,
          including HTML, CSS, and JavaScript.
          <br />
          <br />
          They must have a strong understanding of user experience (UX) design
          principles and be able to create visually appealing, easy-to-use
          interfaces that are optimized for speed and performance.
        </Modal.Body>
        {/* <Modal.Footer style={{background: "linear-gradient(to left, rgba(156, 0, 252,0.8), rgba(227, 187, 252,0.8))"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default JobRoleFEModal;
