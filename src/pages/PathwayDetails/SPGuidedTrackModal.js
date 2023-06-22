import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./pathwaydetails.css";

function SPGuidedTrackModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pathway">
      <Button
       // style={{ backgroundColor: "#ff7b00", border: "none", outline:"none", fontWeight:"600" }}
        onClick={handleShow}
        className="pathway-button"
      >
        Click For More Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"rgba(255,123,0,1)"}}>
          <Modal.Title className="fw-bold" style={{color:"white"}}>Guided Track</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          For Guided Track*, there will be trainer and mentor to guide you
          during the training. You will be given assignments and capstone
          projects. 
          <br />
          <br />
          <strong>*Once you pass the technical test and you are ready for
          deploy.</strong>
        </Modal.Body>
        {/* <Modal.Footer style={{backgroundColor:"rgba(255,123,0,1)"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default SPGuidedTrackModal;
