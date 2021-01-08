import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function OpenModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        onClick={handleShow}
        className="modalButton configSpan"
        variant="light"
      >
        Ver tablas de clientes
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Clientes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <tr>
              <th>Nombre del Cliente</th>

              <th>Importancia de la reputación del entrenador</th>
            </tr>

            <tr>
              <td>Daniel</td>
              <td>2.6</td>
            </tr>

            <tr>
              <td>José</td>
              <td>8.5</td>
            </tr>

            <tr>
              <td>Nuria</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td>Irene</td>
              <td>9.7</td>
            </tr>

            <tr>
              <td>Sergio</td>
              <td>2.6</td>
            </tr>

            <tr>
              <td>Patricia</td>
              <td>4.7</td>
            </tr>

            <tr>
              <td>Maria</td>
              <td>5.6</td>
            </tr>

            <tr>
              <td>Rafael</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td>Sandra</td>
              <td>8.1</td>
            </tr>

            <tr>
              <td>Frank</td>
              <td>2.5</td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OpenModal;
