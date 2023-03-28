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
  const { data } = useQuery<{ armors: Armor[] }>(GET_ARMORS_QUERY, {
    context: { clientName: "client1" },
  });
  const [searchString, setSearchString] = useState("");

  const filteredArmors = data?.armors.filter((armor) =>
    armor.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <Container className="list-container">
      <div className="search">
        <Form.Group controlId="armor-search">
          <Form.Control
            type="text"
            placeholder="O que está procurando?"
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}
          />
        </Form.Group>
      </div>
      <ListGroup>
        {filteredArmors?.map(({ armorClass, name, price, type }) => (
          <ListGroup.Item key={name}>
            <div>
              <div>Nome: {name}</div>
              <div>Classe de armadura: +{armorClass}</div>
              <div>Tipo: {type}</div>
              <div>Preço: {price}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
