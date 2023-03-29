import { gql, useQuery } from "@apollo/client";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

type Grab = {
  type: string;
  effect: string;
};

const GET_GRABS_QUERY = gql`
  query {
    grabs {
      type
      effect
    }
  }
`;

export function GrabTablle() {
  const { data } = useQuery<{ grabs: Grab[] }>(GET_GRABS_QUERY, {
    context: { clientName: "client1" },
  });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>
            Efeito{" "}
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip>
                  Para empurrar (1 ataque): Força (Atletismo) do atacante contra
                  Força (Atletismo) ou Destreza (Acrobacia) do alvo. <br/>
                  Sucesso - Derruba o alvo ou o empurra 1,5m.
                </Tooltip>
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} className="ml-1" />
            </OverlayTrigger>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.grabs.map(({ type, effect }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{effect}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
