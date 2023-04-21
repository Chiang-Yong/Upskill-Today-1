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
        style={{ backgroundColor: "#ff7b00", border: "none", fontWeight:"600" }}
        onClick={handleShow}
      >
        CLICK FOR MORE INFO
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"rgba(225,123,123,0.5)"}}>
          <Modal.Title className="fw-bold">Guided Track</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          For Guided Track*, there will be trainer and mentor to guide you
          during the training. You will be given assignments and capstone
          projects. 
          <br />
          <br />
          <strong>Once you pass the technical test and you are ready for
          deploy.</strong>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"rgba(225,123,123,0.5)"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SPGuidedTrackModal;
