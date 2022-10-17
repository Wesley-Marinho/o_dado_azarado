import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";
type Item = {
  name: String;
  price: String;
};

const GET_ITEMS_QUERY = gql`
  query MyQuery {
    items(first: 95, orderBy: name_ASC) {
      name
      price
    }
  }
`;

export function Items() {
  const { data } = useQuery<{ items: Item[] }>(GET_ITEMS_QUERY);
  return (
    <Container className="list-container">
        <ListGroup>
          {data?.items.map((item) => {
            return (
              <ListGroup.Item>
                <Form.Label>Nome: {item.name}</Form.Label> <br />
                <Form.Label>Preço: {item.price}</Form.Label>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
    </Container>
  );
}
