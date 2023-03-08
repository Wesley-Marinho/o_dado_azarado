import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";

type Item = {
  name: string;
  price: string;
};

const GET_ITEMS_QUERY = gql`
  query {
    items(first: 95, orderBy: name_ASC) {
      name
      price
    }
  }
`;

export function Items() {
  const { data } = useQuery<{ items: Item[] }>(GET_ITEMS_QUERY);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="edit-button">
        <h1>Itens</h1>
        <Button variant="light" onClick={handleShow}>
          Editar
        </Button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Backpack</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Itens</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {data?.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
