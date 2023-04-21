import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SelfPacedModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ backgroundColor: "#ff7b00", border: "none", fontWeight:"600" }}
        onClick={handleShow}
      >
        Click For More Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"rgba(255,123,0,1)"}}>
          <Modal.Title className="fw-bold" style={{color:"white"}}>Self-Paced Track</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          For Self-paced Track*, the subscription fee is SGD99 per month. On
          average, it takes 4-6 months to complete if study full-time and 8-9
          months if study part-time. The total fee is roughly 30% of your first
          month salary. 97% of 200,000 students have found IT jobs post
          training. 
          <br />
          <br />
          <strong>* Currently, Self-paced Track is available under Java
          Developer and Javascript Developer Tracks.</strong>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"rgba(255,123,0,1)"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SelfPacedModal;
