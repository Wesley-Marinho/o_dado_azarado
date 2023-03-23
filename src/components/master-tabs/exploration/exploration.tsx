import { ActivityTablle } from "./tabbles/activities-tabble";
import { ClimateTablle } from "./tabbles/climate-tabble";
import { DarknessTablle } from "./tabbles/darkness-tabble";
import { ExhaustionTablle } from "./tabbles/exhaustion-tabble";
import { GroundTablle } from "./tabbles/ground-tabble";
import { HungerTablle } from "./tabbles/hunger-tabble";
import { LightTablle } from "./tabbles/light-tabble";
import { TrackTablle } from "./tabbles/track-tabble";
import { TripTablle } from "./tabbles/trip-tabble";
import Accordion from "react-bootstrap/Accordion";
export function Exploration() {
  return (
    <div className="overflow">
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Luz e visão</Accordion.Header>
          <Accordion.Body>
            <LightTablle />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Escuridão</Accordion.Header>
          <Accordion.Body>
            <DarknessTablle />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="-">
          <Accordion.Header>Clima</Accordion.Header>
          <Accordion.Body>
            <ClimateTablle />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Fome</Accordion.Header>
          <Accordion.Body>
            <HungerTablle />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Exaustão</Accordion.Header>
          <Accordion.Body>
            <ExhaustionTablle />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Rastreiamento</Accordion.Header>
          <Accordion.Body>
            <TrackTablle />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Ritmo de viagem</Accordion.Header>
          <Accordion.Body>
            <TripTablle />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>Terreno</Accordion.Header>
          <Accordion.Body>
            <GroundTablle />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>Atividade de viagem</Accordion.Header>
          <Accordion.Body>
            <ActivityTablle />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
