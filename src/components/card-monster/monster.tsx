import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export function Monsters() {
  return (
    <Card className="card-main">
      <Card.Header as="h5">Monstros</Card.Header>
      <Card.Body className="list-container">
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
