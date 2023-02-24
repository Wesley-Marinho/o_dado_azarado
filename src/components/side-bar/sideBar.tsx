import "./style.scss";
import { Container, Form, FloatingLabel } from "react-bootstrap";
import { Dice } from "../player-dice/dice";
export function SideBar() {
  return (
    <>
      <Container id="sidebarPro">
        <main className="contentSideBar">
          <div>
            <h6>Nome: -</h6>
            <h6>Classe: -</h6>
            <h6>Raça: -</h6>
            <h6>Tendencia: -</h6>
            <h6>Antecedente: -</h6>
            <h6>Experiencia: -</h6>
            <h6>Nivel: -</h6>
          </div>
          <hr/>
          <div>
            <h6>Força: -</h6>
            <h6>Destreza: -</h6>
            <h6>Constituição: -</h6>
            <h6>Inteligencia: -</h6>
            <h6>Sabedoria: -</h6>
            <h6>Carisma: -</h6>
          </div>
        </main>
      </Container>
      <Container id="sidebar">
        <main className="contentSideBar">
          <>
          <Dice/>
          <hr/>
          </>
        </main>
      </Container>
    </>
  );
}
