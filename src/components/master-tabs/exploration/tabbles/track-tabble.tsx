import { gql, useQuery } from "@apollo/client";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

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
  const { data } = useQuery<{ tracks: Track[] }>(GET_TRACKS_QUERY, {
    context: { clientName: "client1" },
  });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>
            Dificuldade{" "}
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip>
                  Falha no Teste. Leva 1h para reencontrar a trilha (ar livre)
                  ou 10 minutos em área confinada (masmorra).
                </Tooltip>
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} className="ml-1" />
            </OverlayTrigger>
          </th>
        </tr>
      </thead>

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
