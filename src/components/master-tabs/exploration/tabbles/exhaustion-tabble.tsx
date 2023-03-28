import { gql, useQuery } from "@apollo/client";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

type Exhaustion = {
  level: string;
  effect: string;
};

const GET_EXHAUSTIONS_QUERY = gql`
  query {
    exhaustions {
      level
      effect
    }
  }
`;

export function ExhaustionTablle() {
  const { data } = useQuery<{ exhaustions: Exhaustion[] }>(
    GET_EXHAUSTIONS_QUERY,
    { context: { clientName: "client1" } }
  );

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Nível</th>
          <th>
            Efeito{" "}
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip>
                  Um descanso longo com comida e água reduz a exaustão em 1.
                </Tooltip>
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} className="ml-1" />
            </OverlayTrigger>
          </th>
        </tr>
      </thead>

      <tbody>
        {data?.exhaustions.map(({ level, effect }) => (
          <tr key={level}>
            <td>{level}</td>
            <td>{effect}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
