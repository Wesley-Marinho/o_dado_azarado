import React from "react";
import { Card } from "react-bootstrap";
import { MonsterList } from "../list-monster/monster";

export function Monsters() {
  return (
    <Card className="card-main">
      <Card.Header as="h5">Monstros</Card.Header>
      <Card.Body className="list-container">
        <MonsterList />
      </Card.Body>
    </Card>
  );
}
