import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";
import { useState } from "react";

type Weapon = {
  name: string;
  damage: string;
  properties: string;
  price: string;
};

const GET_WEAPONS_QUERY = gql`
  query GetWeapons {
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

  const filteredWeapons = data?.weapons.filter((weapon) =>
    weapon.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredWeapons?.map((weapon) => (
          <ListGroup.Item key={weapon.name}>
            <Form.Label>Nome: {weapon.name}</Form.Label> <br />
            <Form.Label>Dano: {weapon.damage}</Form.Label> <br />
            <Form.Label>Propriedades: {weapon.properties}</Form.Label> <br />
            <Form.Label>Preço: {weapon.price}</Form.Label>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
