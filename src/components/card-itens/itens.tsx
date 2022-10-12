import { Card, Tab, Tabs } from "react-bootstrap";
import { Items } from "../list-items/items";
import { Armors } from "../list-armor/armor";
import { Weapons } from "../list-weapons/weapons";

export function Itens() {
  return (
    <Card className="card-main">
       <Card.Header as="h5">Itens</Card.Header>
      <Tabs defaultActiveKey={1} className="nav-tabs" fill >
        <Tab eventKey={1} title="Itens" className="nav-link">
          <Items />
        </Tab>
        <Tab eventKey={2} title="Armas">
          <Weapons />
        </Tab>
        <Tab eventKey={3} title="Armaduras/Escudos">
          <Armors />
        </Tab>
      </Tabs>
    </Card>
  );
}
