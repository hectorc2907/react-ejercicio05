import { ListGroup,Button } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <i className="bi bi-trash-fill text-danger btn" onClick={() => borrarTarea(tarea)}></i>
    </ListGroup.Item>
  );
};

export default ItemTarea;
