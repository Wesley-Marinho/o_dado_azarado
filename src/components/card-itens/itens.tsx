import { Card, Tab, Tabs } from "react-bootstrap";
import { Items } from "../list-items/items";
import { Armors } from "../list-armor/armor";
import { Weapons } from "../list-weapons/weapons";

export function Itens() {
  return (
    <Card className="card-main">
       <Card.Header as="h5">Itens</Card.Header>
      <Tabs defaultActiveKey={1} fill className="custom-tabs">
        <Tab eventKey={1} title="Equipamentos" className="custom-tab">
          <Items />
        </Tab>
        <Tab eventKey={2} title="Armas" className="custom-tab">
          <Weapons />
        </Tab>
        <Tab eventKey={3} title="Armaduras" className="custom-tab">
          <Armors />
        </Tab>
      </Tabs>
    </Card>
  );
}
