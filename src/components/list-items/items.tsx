import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";
import { useState } from "react";

type Item = {
  name: string;
  price: string;
  quantity: string;
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
  const [search, setSearch] = useState<string>("");
  const filteredItems = data?.items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toLowerCase().includes(search.toLowerCase()) ||
      item.quantity.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="list-container">
      <div className="search">
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="O que está procurando?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <ListGroup>
        {filteredItems?.map(({ name, price, quantity }) => (
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
