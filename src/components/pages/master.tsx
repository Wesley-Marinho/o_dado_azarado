import { Container } from "react-bootstrap";
import { Dice } from "../card-dice/dice";
import { Npc } from "../card-npc/npc";
import { Itens } from "../card-itens/itens";
import { Monsters } from "../card-monster/monster";
export function Master() {
  return (
    <Container fluid className="container-main">
      <Dice />
      <Npc />
      <Itens />
      <Monsters />
    </Container>
  );
}
