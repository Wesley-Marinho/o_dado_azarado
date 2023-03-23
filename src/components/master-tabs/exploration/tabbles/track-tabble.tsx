import { gql, useQuery } from "@apollo/client";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";

type Track = {
  type: string;
  difficulty: string;
};

const GET_TRACKS_QUERY = gql`
  query {
    tracks {
      type
      difficulty
    }
  }
`;

export function TrackTablle() {
  const { data } = useQuery<{ tracks: Track[] }>(GET_TRACKS_QUERY);

  return (
    <Table bordered>
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip>
            Falha no Teste. Leva 1h para reencontrar a trilha (ar livre) ou 10
            minutos em área confinada (masmorra).
          </Tooltip>
        }
      >
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Dificuldade</th>
          </tr>
        </thead>
      </OverlayTrigger>
      <tbody>
        {data?.tracks.map(({ type, difficulty }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{difficulty}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
