import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { getNPC } from "../../service/npc-service";

type NPC = {
  info: string;
};

export function Npc() {
  const [npc, setNPC] = useState<NPC>({ info: getNPC() });

  const changeNPC = () => {
    setNPC({ ...npc, info: getNPC() });
  };

  return (
    <Card className="card-main">
      <Card.Header as="h5">Criar NPC</Card.Header>

      <Card.Body className="d-grid gap-3">
        <div className="mx-auto">
          <Card.Text as="p">{npc.info}</Card.Text>
        </div>
      </Card.Body>

      <Card.Footer className="text-muted text-center">
        <div className="mx-auto">
          <Button variant="dark" onClick={changeNPC}>
            Criar
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
