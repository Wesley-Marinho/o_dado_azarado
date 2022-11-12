import "./style.scss";
import { Container, Form, FloatingLabel } from "react-bootstrap";
export function SideBar() {
  return (
    <>
      <Container id="sidebarPro">
        <main className="contentSideBar">
          <div>
            <h1>Nome: -</h1>
            <h5>Classe: -</h5>
            <h5>Raça: -</h5>
            <h5>Tendencia: -</h5>
            <h5>Antecedente: -</h5>
            <h5>Experiencia: -</h5>
            <h5>Nivel: -</h5>
          </div>
          <hr/>
        </main>
      </Container>
      <Container id="sidebar">
        <main className="contentSideBar">
          <></>
        </main>
      </Container>
    </>
  );
}
