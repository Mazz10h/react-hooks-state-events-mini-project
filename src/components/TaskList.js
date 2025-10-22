import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) { // Changed prop name
  const taskElements = tasks.map((task) => (
    <Task
      key={task.id} // Changed to task.id for uniqueness
      text={task.text}
      category={task.category}
      onDelete={() => onDelete(task.id)} // Pass ID to callback
    />
  ));

  return <div className="tasks">{taskElements}</div>;
}

export default TaskList;