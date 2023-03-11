import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";
import { useState } from "react";

type Armor = {
  armorClass: number;
  name: string;
  price: string;
  type: string;
};

const GET_ARMORS_QUERY = gql`
  query {
    armors(first: 12, orderBy: armorClass_ASC) {
      armorClass
      name
      price
      type
    }
  }
`;

export function Armors() {
  const { data } = useQuery<{ armors: Armor[] }>(GET_ARMORS_QUERY);
  const [searchString, setSearchString] = useState("");

  const filteredArmors = data?.armors.filter((armor) =>
    armor.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <Container className="list-container">
      <div className="search">
        <Form>
          <Form.Group controlId="armor-search">
            <Form.Control
              type="text"
              placeholder="O que está procurando?"
              value={searchString}
              onChange={(event) => setSearchString(event.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <ListGroup>
        {filteredArmors?.map(({ armorClass, name, price, type }) => (
          <ListGroup.Item key={name}>
            <Form.Label>Nome: {name}</Form.Label> <br />
            <Form.Label>Classe de armadura: +{armorClass}</Form.Label> <br />
            <Form.Label>Tipo: {type}</Form.Label> <br />
            <Form.Label>Preço: {price}</Form.Label>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
