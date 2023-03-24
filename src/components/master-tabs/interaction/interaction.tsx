
import Accordion from "react-bootstrap/Accordion";
import { ConversationTablle } from "./tabble/conversation-tabble";
import { DifficultyTablle } from "./tabble/difficulty-tabble";
import { EscapeTablle } from "./tabble/escape-tabble";
import { PursueTablle } from "./tabble/pursue-tabble";
import { ServiceTablle } from "./tabble/service-tabble";
import { TendencyTablle } from "./tabble/tendency-tabble";
export function Interaction() {
  return (
    <div className="overflow">
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Tendência</Accordion.Header>
          <Accordion.Body>
            <TendencyTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Conversação</Accordion.Header>
          <Accordion.Body>
            <ConversationTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Bens e Servicos</Accordion.Header>
          <Accordion.Body>
            <ServiceTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Perseguição</Accordion.Header>
          <Accordion.Body>
            <PursueTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Escapatória</Accordion.Header>
          <Accordion.Body>
            <EscapeTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Classes de dificuldade</Accordion.Header>
          <Accordion.Body>
            <DifficultyTablle/>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}
