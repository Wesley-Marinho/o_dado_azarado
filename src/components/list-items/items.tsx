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

export function Items() {
  const { data } = useQuery<{ weapons: Weapon[] }>(GET_WEAPONS_QUERY);
  return (
    <Container className="list-container">
        <ListGroup>
          {data?.weapons.map((weapon) => {
            return (
              <ListGroup.Item>
                <Form.Label>Nome: {weapon.name}</Form.Label> <br />
                <Form.Label>Dano: {weapon.damage}</Form.Label> <br />
                <Form.Label>Propriedades: {weapon.properties}</Form.Label>{" "}
                <br />
                <Form.Label>Preço: {weapon.price}</Form.Label>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
    </Container>
  );
}
