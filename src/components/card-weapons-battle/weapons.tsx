import { Table} from 'react-bootstrap';
export function Weapons(){
  return (
    <>
    <h1>
      Armas
    </h1>
    <Table bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Range</th>
          <th>Damage</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Longsword</td>
          <td>Melee</td>
          <td>-</td>
          <td>1d8 slashing</td>
          <td>3 lb.</td>
        </tr>
        <tr>
          <td>Shortbow</td>
          <td>Ranged</td>
          <td>80/320 ft.</td>
          <td>1d6 piercing</td>
          <td>2 lb.</td>
        </tr>
        <tr>
          <td>Dagger</td>
          <td>Melee/Ranged</td>
          <td>20/60 ft.</td>
          <td>1d4 piercing</td>
          <td>1 lb.</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};
