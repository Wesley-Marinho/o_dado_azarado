import { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

type Item = {
  name: string;
  price: string;
  quantity: string;
};

const GET_ITEMS_QUERY = gql`
  query {
    items(first: 95, orderBy: name_ASC) {
      name
      quantity
      price
    }
  }
`;

export function Items() {
  const { data } = useQuery<{ items: Item[] }>(GET_ITEMS_QUERY);
  const [show, setShow] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSelectItem = (item: Item) =>
    setSelectedItems(selectedItems.concat(item));

  const handleDeleteItem = (index: number) => {
    const updatedItems = [...selectedItems];
    updatedItems.splice(index, 1);
    setSelectedItems(updatedItems);
  };
  return (
    <>
      <div className="edit-button">
        <h1>Itens</h1>
        <Button variant="light" onClick={handleShow}>
          Editar
        </Button>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDeleteItem(index)}
                >
                  <FontAwesomeIcon className="fa-solid" icon={faTrashCan} />
                </Button>
              </td>
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
              {data?.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleSelectItem(item)}
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
