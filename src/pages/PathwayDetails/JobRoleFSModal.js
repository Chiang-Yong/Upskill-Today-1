import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function JobRoleFSModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor:"#ff7b00", border:"none"}} onClick={handleShow}>
        Find Out More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Full Stack Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A <strong>full stack developer</strong> is a software engineer who is
          skilled in developing applications for both the front-end and
          back-end. In other words, they have knowledge and expertise in all the
          layers of the software stack, including the user interface,
          application logic, and database. The responsibilities of a full stack
          developer may include designing and implementing the user interface
          using HTML, CSS, and JavaScript, writing the application logic in
          languages such as Java, Python, or Ruby, and managing the database
          using SQL or NoSQL technologies.
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

export default JobRoleFSModal;
