import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Light = {
  item: string;
  vision: string;
  distance: string;
};

const GET_LIGHTS_QUERY = gql`
  query {
    lights {
      item
      vision
      distance
    }
  }
`;

export function LightTablle() {
  const { data } = useQuery<{ lights: Light[] }>(GET_LIGHTS_QUERY);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Item</th>
          <th>Visão</th>
          <th>Distância</th>
        </tr>
      </thead>
      <tbody>
        {data?.lights.map(({ item, vision, distance }) => (
          <tr key={item}>
            <td>{item}</td>
            <td>{vision}</td>
            <td>{distance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
