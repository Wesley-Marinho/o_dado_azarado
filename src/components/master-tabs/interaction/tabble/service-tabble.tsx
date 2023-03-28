import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Service = {
  name: string;
  price: string;
};

const GET_SERVICE_QUERY = gql`
  query {
    services {
      name
      price
    }
  }
`;

export function ServiceTablle() {
  const { data } = useQuery<{ services: Service[] }>(GET_SERVICE_QUERY, {
    context: { clientName: "client1" },
  });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {data?.services.map(({ name, price }) => (
          <tr key={price}>
            <td>{name}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
