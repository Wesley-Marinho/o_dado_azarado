import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";
import { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWeapons = data?.weapons.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="list-container">
      <div className="search">
        <Form>
          <Form.Group controlId="search">
            <Form.Control
              type="text"
              placeholder="O que está procurando?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <ListGroup>
        {filteredWeapons?.map(({ name, damage, properties, price }) => (
          <ListGroup.Item>
            <Form.Label>Nome: {name}</Form.Label> <br />
            <Form.Label>Dano: {damage}</Form.Label> <br />
            <Form.Label>Propriedades: {properties}</Form.Label> <br />
            <Form.Label>Preço: {price}</Form.Label>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
