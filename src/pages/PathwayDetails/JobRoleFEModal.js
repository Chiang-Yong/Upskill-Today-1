import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function JobRoleFEModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ backgroundColor: "#ff7b00", border: "none" }}
        onClick={handleShow}
      >
        Find Out More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Front-End Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A <strong>front-end developer</strong> is a software engineer who
          focuses on the development of the user interface of a software
          application. They are responsible for designing and building the part
          of the software that the user interacts with directly, such as web
          pages, forms, buttons, and other elements of the user interface.
          Front-end developers use a variety of technologies to create user
          interfaces, including HTML, CSS, and JavaScript. They must have a
          strong understanding of user experience (UX) design principles and be
          able to create visually appealing, easy-to-use interfaces that are
          optimized for speed and performance.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JobRoleFEModal;
