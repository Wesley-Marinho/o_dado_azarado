import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Mount = {
  type: string;
  displacement: string;
};

const GET_MOUNTS_QUERY = gql`
  query {
    mounts {
      type
      displacement
    }
  }
`;

export function MountTablle() {
  const { data } = useQuery<{ mounts: Mount[] }>(GET_MOUNTS_QUERY);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Efeito</th>
        </tr>
      </thead>
      <tbody>
        {data?.mounts.map(({ type, displacement }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{displacement}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
