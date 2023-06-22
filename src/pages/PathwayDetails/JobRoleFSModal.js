import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./pathwaydetails.css";


function JobRoleFSModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pathway">
      <Button
        onClick={handleShow}
        className="pathway-button"
      >
        Find Out More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{background: "linear-gradient(to right, rgba(255, 123, 0,0.9), rgba(252, 147, 48,0.7))"}}
        >
          <Modal.Title className="fw-bold" style={{color:"white"}}>Full Stack Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A <strong>full stack developer</strong> is a software engineer who is
          skilled in developing applications for both the front-end and
          back-end. In other words, they have knowledge and expertise in all the
          layers of the software stack, including the user interface,
          application logic, and database.
          <br />
          <br />
          The responsibilities of a full stack developer may include designing
          and implementing the user interface using HTML, CSS, and JavaScript,
          writing the application logic in languages such as Java, Python, or
          Ruby, and managing the database using SQL or NoSQL technologies.
        </Modal.Body>
        {/* <Modal.Footer style={{background: "linear-gradient(to left, rgba(255, 123, 0,0.9), rgba(252, 147, 48,0.7))"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default JobRoleFSModal;
