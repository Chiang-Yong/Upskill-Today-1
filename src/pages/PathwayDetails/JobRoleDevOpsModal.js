import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./pathwaydetails.css";

function JobRoleDevOpsModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pathway">
      <Button
        //style={{backgroundColor: "#ff7b00",border: "none",fontWeight: "600",}}
        className="pathway-button"
        onClick={handleShow}
      >
        Find Out More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{
            // background:
            //   "linear-gradient(to right, rgba(255, 123, 0,0.9), rgba(252, 147, 48,0.7))",
            backgroundColor: "rgba(255,123,0,1)",
          }}
        >
          <Modal.Title className="fw-bold" style={{ color: "white" }}>
            DevOps Engineer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A <strong>DevOps engineer</strong> is a professional responsible for
          the collaboration between software development and IT operations
          teams. They work to streamline the software development lifecycle
          (SDLC) through the integration of development, testing, deployment,
          and operations.
          <br />
          <br />
          The goal is to automate and optimize processes, improving software
          quality and reducing time to market. DevOps engineers typically have a
          background in software development, system administration, or network
          engineering. They work closely with developers, quality assurance (QA)
          teams, and operations personnel to create and maintain automated
          processes and tools.
          <br />
          <br />
          They also ensure that the production environment is stable, secure,
          and scalable. DevOps engineers often use a variety of tools and
          technologies such as containerization platforms, cloud services,
          configuration management tools, continuous integration/continuous
          delivery (CI/CD) pipelines, and monitoring tools to achieve their
          goals. They are also responsible for monitoring and analyzing system
          metrics to identify and resolve issues before they impact the
          end-users.
        </Modal.Body>
        <Modal.Footer
          style={{
            // background:
            //   "linear-gradient(to left, rgba(255, 123, 0,0.9), rgba(252, 147, 48,0.7))",
            backgroundColor: "rgba(255,123,0,1)",
          }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default JobRoleDevOpsModal;
