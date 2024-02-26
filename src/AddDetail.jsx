import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddDetail = ({ name, age, newName, newAge, handleSubmit }) => {
  const inputref = useRef();

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => newName(e.target.value)}
          name="student name"
          required
          autoComplete="off"
          ref={inputref}
        />
        <input
          type="number"
          placeholder="Add Age"
          value={age}
          onChange={(e) => newAge(e.target.value)}
          name="student age"
          required
          autoComplete="off"
        />
        <button
          type="submit"
          aria-label="Add Detail"
          onClick={() => inputref.current.focus()}
        >
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default AddDetail;
