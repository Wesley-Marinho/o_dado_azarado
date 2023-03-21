import { Container } from "react-bootstrap";
import { Npc } from "../../card-npc/npc";
import { Itens } from "../../card-itens/itens";
import { Monsters } from "../../card-monster/monster";
import { Dice } from "../../dice-sidebar/dice";
import { Tabs } from "../../master-tabs/tabs";

export function Master() {
  return (
    <>
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

        <div>
          <Tabs />
        </div>
      </div>
    </>
  );
}
