import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from local storage on initial render
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
