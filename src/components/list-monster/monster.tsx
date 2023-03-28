import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";
import { useState } from "react";

type Monster = {
  name: string;
};

const GET_MONSTERS_QUERY = gql`
  query {
    monsters(orderBy: name_ASC) {
      name
    }
  }
`;

export function MonsterList() {
  const [search, setSearch] = useState("");
  const { data } = useQuery<{ monsters: Monster[] }>(GET_MONSTERS_QUERY);
  const filteredMonsters = data?.monsters.filter((monster) =>
    Object.values(monster).some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
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
        {filteredMonsters?.map(({ name }) => (
          <ListGroup.Item key={name}>
            <Form.Label>Nome: {name}</Form.Label> <br />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
