import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Conversation = {
  difficulty: string;
  reaction: string;
};

const GET_TENDENCIES_QUERY = gql`
  query {
    conversations {
      difficulty
      reaction
    }
  }
`;

export function ConversationTablle() {
  const { data } = useQuery<{ conversations: Conversation[] }>(GET_TENDENCIES_QUERY);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Dificuldade</th>
          <th>Reação</th>
        </tr>
      </thead>
      <tbody>
        {data?.conversations.map(({ difficulty, reaction }) => (
          <tr key={difficulty}>
            <td>{difficulty}</td>
            <td>{reaction}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
