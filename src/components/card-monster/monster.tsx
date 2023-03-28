import { Card } from "react-bootstrap";
import { MonsterList } from "../list-monster/monster";

export function Monsters() {
  return (
    <Card className="card-monster">
      <Card.Header as="h5">Monstros</Card.Header>
      <MonsterList />
    </Card>
  );
}
