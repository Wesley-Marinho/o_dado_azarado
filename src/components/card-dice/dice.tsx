import { useState } from "react";
import {
  Card,
  Button,
  ButtonGroup,
  Form,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import "./style.scss"
type AdvancedRoll = {
  quantity: number;
  modifier: number;
};

const defaultAdvancedRoll: AdvancedRoll = {
  quantity: 1,
  modifier: 0,
};

export function Dice() {
  const [roll, setRoll] = useState(0);
  const [advancedRoll, setAdvancedRoll] = useState(defaultAdvancedRoll);

  function rollDice(side: number) {
    if (advancedRoll.quantity > 1) {
      let rollAux = 0;
      for (let i = 0; i < advancedRoll.quantity; i++) {
        rollAux += Math.floor(Math.random() * side) + 1;
      }
      setRoll(rollAux + advancedRoll.modifier);
    } else {
      setRoll(Math.floor(Math.random() * side) + 1 + advancedRoll.modifier);
    }
  }

  const changeRoll = <P extends keyof AdvancedRoll>(
    prop: P,
    value: AdvancedRoll[P]
  ) => {
    setAdvancedRoll({ ...advancedRoll, [prop]: value });
  };

  return (
    <Card className="dice-card">
      <Card.Header as="h5">Dados</Card.Header>
      <Card.Body className="d-grid gap-3">
        <InputGroup size="sm">
          <FloatingLabel label="Quantidade">
            <Form.Control
              inputMode="numeric"
              aria-label="Quantidade de dados"
              pattern="[0-9]*"
              min="1"
              max="100"
              value={advancedRoll.quantity}
              onChange={(e) => {
                changeRoll("quantity", parseInt(e.target.value));
              }}
            />
          </FloatingLabel>
        </InputGroup>

        <InputGroup size="sm">
          <FloatingLabel label="Modificador">
            <Form.Control
              inputMode="numeric"
              aria-label="Modificador da rolagem"
              pattern="[0-9]*"
              min="0"
              max="100"
              value={advancedRoll.modifier}
              onChange={(e) => {
                changeRoll("modifier", parseInt(e.target.value));
              }}
            />
          </FloatingLabel>
        </InputGroup>

        <div className="mx-auto">
          <ButtonGroup vertical>
            <Button variant="dark" onClick={() => rollDice(4)}>
              D4
            </Button>
            <Button variant="dark" onClick={() => rollDice(6)}>
              D6
            </Button>
            <Button variant="dark" onClick={() => rollDice(8)}>
              D8
            </Button>
            <Button variant="dark" onClick={() => rollDice(10)}>
              D10
            </Button>
            <Button variant="dark" onClick={() => rollDice(12)}>
              D12
            </Button>
            <Button variant="dark" onClick={() => rollDice(20)}>
              D20
            </Button>
            <Button variant="dark" onClick={() => rollDice(100)}>
              D100
            </Button>
          </ButtonGroup>
        </div>
        <div className="mx-auto">
          <Card.Text as="h1">{roll}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
