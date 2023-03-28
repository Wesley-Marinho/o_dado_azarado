import { gql, useQuery } from "@apollo/client";
import { Container, ListGroup, Form } from "react-bootstrap";
import { useState } from "react";

type Monster = {
  armor: string;
  attacks: string;
  challengLevel: string;
  description: string;
  displacement: string;
  exp: string;
  healthPoints: string;
  name: string;
};

const GET_MONSTERS_QUERY = gql`
  query {
    monsters(orderBy: name_ASC) {
      armor
      attacks
      attribute {
        car
        con
        des
        for
        id
        inte
        sab
      }
      challengLevel
      description
      displacement
      exp
      healthPoints
      name
    }
  }
`;

export function MonsterList() {
  const { data } = useQuery<{ monsters: Monster[] }>(GET_MONSTERS_QUERY);
  const [search, setSearch] = useState("");

  const filteredMonsters = data?.monsters.filter((monster) =>
    monster.name.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <Container className="list-container-monster">
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
        {filteredMonsters?.map(
          ({
            name,
            armor,
            healthPoints,
            challengLevel,
            exp,
            displacement,
            description,
            attacks,
          }) => (
            <ListGroup.Item key={name}>
              <Form.Label>Nome: {name}</Form.Label> <br />
              <Form.Label>Armadura: {armor}</Form.Label> <br />
              <Form.Label>Pontos de vida: {healthPoints}</Form.Label> <br />
              <Form.Label>Nível de desafio: {challengLevel}</Form.Label> <br />
              <Form.Label>Experiencia: {exp} pontos</Form.Label> <br />
              <Form.Label>Deslocamento: {displacement}</Form.Label> <br />
              <Form.Label>Descrição: {description}</Form.Label> <br />
              <Form.Label>Ataques: {attacks}</Form.Label> <br />
            </ListGroup.Item>
          )
        )}
      </ListGroup>
    </Container>
  );
}
