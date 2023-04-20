import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SPGuidedTrackModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ backgroundColor: "#ff7b00", border: "none" }}
        onClick={handleShow}
      >
        Click For More Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Guided Track Pathway</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          For Guided Track*, there will be trainer and mentor to guide you
          during the training. You will be given assignment and capstone
          project. Once you pass the technical test and you are ready for
          deploy.
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

export default SPGuidedTrackModal;
