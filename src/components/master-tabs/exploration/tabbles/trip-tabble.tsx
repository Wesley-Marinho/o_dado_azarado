import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Trip = {
  rhythm: string;
  hour: string;
  day: string;
  effect: string;
};

const GET_TRIPS_QUERY = gql`
  query {
    trips {
      rhythm
      hour
      day
      effect
    }
  }
`;

export function TripTablle() {
  const { data } = useQuery<{ trips: Trip[] }>(GET_TRIPS_QUERY, {
    context: { clientName: "client1" },
  });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Ritmo</th>
          <th>Distancia por hora</th>
          <th>Distancia por dia</th>
          <th>Efeito</th>
        </tr>
      </thead>

      <tbody>
        {data?.trips.map(({ rhythm, hour, day, effect }) => (
          <tr key={rhythm}>
            <td>{rhythm}</td>
            <td>{hour}</td>
            <td>{day}</td>
            <td>{effect}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
