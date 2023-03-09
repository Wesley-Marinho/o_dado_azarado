import { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
type Weapon = {
  name: String;
  damage: String;
  properties: String;
};

const GET_WEAPONS_QUERY = gql`
  query MyQuery {
    weapons(first: 25, orderBy: name_ASC) {
      name
      damage
      properties
    }
  }
`;

export function Weapons() {
  const { data } = useQuery<{ weapons: Weapon[] }>(GET_WEAPONS_QUERY);
  const [show, setShow] = useState(false);
  const [selectedWeapons, setSelectedWeapons] = useState<Weapon[]>([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSelectWeapon = (weapon: Weapon) =>
    setSelectedWeapons(selectedWeapons.concat(weapon));
  return (
    <>
      <div className="edit-button">
        <h1>Armas</h1>
        <Button variant="light" onClick={handleShow}>
          Editar
        </Button>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Dano</th>
            <th>Propriedade</th>
          </tr>
        </thead>

        <tbody>
          {selectedWeapons.map((weapon, index) => (
            <tr key={index}>
              <td>{weapon.name}</td>
              <td>{weapon.damage}</td>
              <td>{weapon.properties}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Itens</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.weapons.map((weapon, index) => (
                <tr key={index}>
                  <td>{weapon.name}</td>
                  <td>{weapon.damage}</td>
                  <td>{weapon.properties}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleSelectWeapon(weapon)}
                    >
                      <FontAwesomeIcon className="fa-solid" icon={faCheck} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}
