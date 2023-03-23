import { gql, useQuery } from "@apollo/client";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";

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
    GET_EXHAUSTIONS_QUERY
  );

  return (
    <Table bordered>
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip>
            Um descanso longo com comida e água reduz a exaustão em 1.
          </Tooltip>
        }>
        <thead>
          <tr>
            <th>Nível</th>
            <th>Efeito</th>
          </tr>
        </thead>
      </OverlayTrigger>

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
