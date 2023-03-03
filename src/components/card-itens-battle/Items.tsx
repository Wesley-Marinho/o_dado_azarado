import { Table } from 'react-bootstrap';

export function Items(){
  return (
    <>
   <h1>Itens</h1>
<Table bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Backpack</td>
          <td>5 lb.</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Bedroll</td>
          <td>7 lb.</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Crossbow bolts (20)</td>
          <td>1.5 lb.</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Healing potion</td>
          <td>-</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Rations (1 day)</td>
          <td>2 lb.</td>
          <td>10</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};
