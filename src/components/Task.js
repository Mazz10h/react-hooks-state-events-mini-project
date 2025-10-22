import React from "react";

function Task({ text, category, onDelete }) { // Changed prop name
  function handleClick() {
    onDelete(text); // This will be updated in TaskList to pass ID
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default Task;