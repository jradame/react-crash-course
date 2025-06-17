import React, { useState } from "react";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  const [showModal, setModal] = useState(false);

  const onTodoDelete = () => {
    console.log("Todo deleted");
  };

  return (
    <div>
      <Title />

      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />

      <button onClick={() => setModal(true)}>Add todo</button>

      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Finish React Section" />
      </div>

      {showModal && <Modal title="Confirm Delete?" />}

    
    </div>
  );
}

export default App;


