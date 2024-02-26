import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DetailsItem = ({ detail, handleDelete }) => {
  return (
    <li className="data">
      <h3>{detail.name}</h3>
      <h3>{detail.age}</h3>
      <FaTrashAlt
        role="button"
        id={detail.id}
        tabIndex="0"
        onClick={() => handleDelete(detail.id)}
        aria-label="Delete Item"
        className="deleteBtn"
      />
    </li>
  );
};

export default DetailsItem;
