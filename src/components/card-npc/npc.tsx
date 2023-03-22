import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { getNPC } from "../../service/npc-service";

type NPC = {
  info: String;
};

const npc: NPC = {
  info: getNPC(),
};

export function Npc() {
  const [isNPC, setNPC] = useState(npc);

  const changeNPC = () => {
    setNPC({ ...isNPC, info: getNPC() });
  };

  return (
    <Card className="card-main">
      <Card.Header as="h5">Criar NPC</Card.Header>

      <Card.Body className="d-grid gap-3">
        <div className="mx-auto">
          <Card.Text as="p">{isNPC.info}</Card.Text>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        <div className="mx-auto">
          <Button variant="dark" onClick={() => changeNPC()}>
            Criar
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
