function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggleTask(task.id)}>{task.text}</span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
