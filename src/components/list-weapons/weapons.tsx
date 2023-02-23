import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";
type Weapon = {
  name: String;
  damage: String;
  properties: String;
  price: String;
};

const GET_WEAPONS_QUERY = gql`
  query MyQuery {
    weapons(first: 25, orderBy: name_ASC) {
      name
      damage
      properties
      price
    }
  }
`;

export function Weapons() {
  const { data } = useQuery<{ weapons: Weapon[] }>(GET_WEAPONS_QUERY);
  return (
    <Container className="list-container">
        <ListGroup>
          {data?.weapons.map(({name, damage, properties, price}) => {
            return (
              <ListGroup.Item>
                <Form.Label>Nome: {name}</Form.Label> <br />
                <Form.Label>Dano: {damage}</Form.Label> <br />
                <Form.Label>Propriedades: {properties}</Form.Label>{" "}
                <br />
                <Form.Label>Preço: {price}</Form.Label>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
    </Container>
  );
}
