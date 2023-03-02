import { Container } from "react-bootstrap";
import { Npc } from "../../card-npc/npc";
import { Itens } from "../../card-itens/itens";
import { Monsters } from "../../card-monster/monster";
import { Dice } from "../../player-dice/dice";
import "./style.scss"
export function Master() {
  return (
    <div className="wraper">
      <div className="wrapper">
      <Container id="sidebarPro">
        <main className="contentSideBar">
          <Dice />
        </main>
      </Container>
        <div id="content">
          <Npc />
          <Itens />
          <Monsters />
        </div>
      </div>
    </div>
  );
}
