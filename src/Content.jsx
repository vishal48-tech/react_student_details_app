import React from "react";
import DetailsItem from "./DetailsItem";

const Content = ({ details, handleDelete }) => {
  return (
    <ul>
      <li>
        <h2>Name</h2>
        <h2>Age</h2>
        <h2>Delete</h2>
      </li>
      {details.length ? (
        details.map((detail) => (
          <DetailsItem
            key={detail.id}
            detail={detail}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <h1>No rows to display.</h1>
      )}
    </ul>
  );
};

export default Content;
