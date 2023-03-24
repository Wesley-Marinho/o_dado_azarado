import { useState } from "react";
import {
  Card,
  Button,
  ButtonGroup,
  Form,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import "./style.scss";

interface AdvancedRoll {
  quantity: number;
  modifier: number;
}

const defaultAdvancedRoll: AdvancedRoll = {
  quantity: 1,
  modifier: 0,
};

export function Dice() {
  const [roll, setRoll] = useState<number>(0);
  const [advancedRoll, setAdvancedRoll] =
    useState<AdvancedRoll>(defaultAdvancedRoll);
  const [animationClass, setAnimationClass] = useState<string>("");

  const rollDice = (side: number) => {
    let rollAux = 0;
    for (let i = 0; i < advancedRoll.quantity; i++) {
      rollAux += Math.floor(Math.random() * side) + 1;
    }
    setRoll(rollAux + advancedRoll.modifier);
    setAnimationClass("animate");
    setTimeout(() => {
      setAnimationClass("");
    }, 1000);
  };

  const changeRoll = <P extends keyof AdvancedRoll>(
    prop: P,
    value: AdvancedRoll[P]
  ) => {
    if (value <= 100) {
      setAdvancedRoll({ ...advancedRoll, [prop]: value });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
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
              const value = parseInt(e.target.value);
              changeRoll("quantity", value);
            }}
          />
        </FloatingLabel>
      </InputGroup>
      <InputGroup size="sm" className="mt-2">
        <FloatingLabel label="Modificador">
          <Form.Control
            inputMode="numeric"
            aria-label="Modificador da rolagem"
            pattern="[0-9]*"
            min="0"
            max="100"
            value={advancedRoll.modifier}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              changeRoll("modifier", value);
            }}
          />
        </FloatingLabel>
      </InputGroup>

      <ButtonGroup vertical className="mt-2">
        {[4, 6, 8, 10, 12, 20, 100].map((side) => (
          <Button variant="dark" key={side} onClick={() => rollDice(side)}>
            D{side}
          </Button>
        ))}
      </ButtonGroup>

      <Card.Text as="h1" className={`${animationClass} mt-2 text-center`}>
        {roll}
      </Card.Text>
    </div>
  );
}
