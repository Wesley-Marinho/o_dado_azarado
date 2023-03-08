import "./style.scss";
import { Container, Button } from "react-bootstrap";
import { Principal } from "./components/principal";
import { Dice } from "../player-dice/dice";
import { Mods } from "./components/mods";
import { Skills } from "./components/skills";
import { Stats } from "./components/stats";

export function SideBar() {
  return (
    <>
      <Container id="sidebarPro">
        <main className="contentSideBar">
          <Dice />
        </main>
      </Container>
      <Container id="sidebar">
        <main className="contentSideBar">
          <Principal />
          <hr />
          <Stats />
        </main>
      </Container>
      <Container
        id="sidebarSkill"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <main className="contentSideBar" style={{ flexGrow: 1 }}>
          <>
            <Mods />
            <hr />
            <Skills />
          </>
        </main>
        <div className="button">
          <Button variant="dark">Editar</Button>
        </div>
      </Container>
    </>
  );
}
