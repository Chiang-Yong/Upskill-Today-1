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
        style={{ backgroundColor: "#ff7b00", border: "none" }}
        onClick={handleShow}
      >
        Click For More Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Self-Paced Pathway</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          For Self-paced Track*, the subscription fee is SGD99 per month. On
          average, it takes 4-6 months to complete if study full-time and 8-9
          months if study part-time. The total fee is roughly 30% of your first
          month salary. 97% of 200,000 students have found IT jobs post
          training. 
          
          * Currently, Self-paced Track is available under Java
          Developer and Javascript Developer Tracks.
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

export default SelfPacedModal;
