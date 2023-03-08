import { Table, Button } from 'react-bootstrap';
export function Magic(){
  return (
    <>
      <div className="edit-button">
        <h1>Magias</h1>
        <Button variant="light">Editar</Button>
      </div>
    <Table bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>School</th>
          <th>Casting Time</th>
          <th>Range</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fireball</td>
          <td>3rd</td>
          <td>Evocation</td>
          <td>1 action</td>
          <td>150 ft.</td>
          <td>Instantaneous</td>
        </tr>
        <tr>
          <td>Bless</td>
          <td>1st</td>
          <td>Enchantment</td>
          <td>1 action</td>
          <td>30 ft.</td>
          <td>Concentration, up to 1 minute</td>
        </tr>
        <tr>
          <td>Healing Word</td>
          <td>1st</td>
          <td>Evocation</td>
          <td>Bonus action</td>
          <td>60 ft.</td>
          <td>Instantaneous</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};
