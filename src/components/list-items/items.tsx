import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";

type Item = {
  name: string;
  price: string;
  quantity:string;
};

const GET_ITEMS_QUERY = gql`
  query {
    items(first: 95, orderBy: name_ASC) {
      name
      price
      quantity
    }
  }
`;

export function Items() {
  const { data } = useQuery<{ items: Item[] }>(GET_ITEMS_QUERY);

  return (
    <Container className="list-container">
      <ListGroup>
        {data?.items.map(({name, price, quantity}) => (
          <ListGroup.Item>
            <Form.Label>Nome: {name}</Form.Label> <br />
            <Form.Label>Quantidade: {quantity}</Form.Label> <br />
            <Form.Label>Preço: {price}</Form.Label>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
