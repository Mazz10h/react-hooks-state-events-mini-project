import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

// Define TASKS and CATEGORIES here (replace with import if "../data" exists)
const TASKS = [
  { id: 1, text: "Buy rice", category: "Food" },
  { id: 2, text: "Save a tenner", category: "Money" },
  { id: 3, text: "Build a todo app", category: "Code" },
  { id: 4, text: "Bake a pie", category: "Cooking" },
  { id: 5, text: "Learn Express.js", category: "Code" },
  { id: 6, text: "Buy apples", category: "Food" },
  { id: 7, text: "Paint a wall", category: "Home" },
  { id: 8, text: "Visit grandma", category: "Misc" },
  { id: 9, text: "Buy stamps", category: "Misc" },
  { id: 10, text: "Make a pie", category: "Cooking" }
];

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Delete a task (by ID)
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Filter tasks by category
  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  // Add a new task
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  }

  // Filtered tasks
  const displayedTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(cat => cat !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={displayedTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;