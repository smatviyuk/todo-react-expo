import { Button } from "antd";
import { useState } from "react";
import "../index.css";

const AddToDo = ({ addTodo }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter text");
      return;
    }

    addTodo({ name, status });

    setName("");
    setStatus(false);
  };

  return (
    <div>
      <div className="input-btn">
        <input
          type="text"
          className="input"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setStatus(false);
          }}
          placeholder="Add new todo"
        />

        <Button className="add-btn" onClick={handleSubmit}>
          Add new 🧾
        </Button>
      </div>
    </div>
  );
};

export default AddToDo;
