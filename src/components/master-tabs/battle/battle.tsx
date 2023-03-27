
import Accordion from "react-bootstrap/Accordion";
import { ConditionTablle } from "./tabbles/condition-tabble";
import { DistanceTablle } from "./tabbles/distance-tabble";
import { FightTablle } from "./tabbles/fight-tabble";
import { GrabTablle } from "./tabbles/grab-tabble";
import { MountTablle } from "./tabbles/mount-tabble";
import { MountedTablle } from "./tabbles/mounted-tabble";
import { MovementTablle } from "./tabbles/movement-tabble";
export function Battle() {
  return (
    <div className="overflow">
      <Accordion defaultActiveKey="">

        <Accordion.Item eventKey="1">
          <Accordion.Header>Distância</Accordion.Header>
          <Accordion.Body>
            <DistanceTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Agarrar</Accordion.Header>
          <Accordion.Body>
            <GrabTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Movimento</Accordion.Header>
          <Accordion.Body>
           <MovementTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Montado</Accordion.Header>
          <Accordion.Body>
            <MountedTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Montaria</Accordion.Header>
          <Accordion.Body>
            <MountTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Briga</Accordion.Header>
          <Accordion.Body>
           <FightTablle/>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>Condições</Accordion.Header>
          <Accordion.Body>
            <ConditionTablle/>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}
