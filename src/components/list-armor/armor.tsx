import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";
type Armor = {
  armorClass: number;
  name: String;
  price: String;
  type: String;
};

const GET_ARMORS_QUERY = gql`
  query {
    armors (first: 12, orderBy: armorClass_ASC){
      armorClass
      name
      price
      type
    }
  }
`;

export function Armors() {
  const { data } = useQuery<{ armors: Armor[] }>(GET_ARMORS_QUERY);

  return (
    <Container className="list-container">
      <ListGroup>
        {data?.armors.map((armor) => {
          return (
            <ListGroup.Item>
              <Form.Label>Nome: {armor.name}</Form.Label> <br />
              <Form.Label>Classe de armadura: +{armor.armorClass}</Form.Label> <br />
              <Form.Label>Tipo: {armor.type}</Form.Label> <br />
              <Form.Label>Preço: {armor.price}</Form.Label>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}
