export default function TaskCard({task, onEdit, onDelete, onStatusChange}) {
    const handleStatusChange = (e) => {
        onStatusChange(task.id, e.target.value);
    }
  return (
    <div className="task-card">
      <h3> {task.title} </h3>
      <p> {task.description} </p>
      <p> Status: <select value={task.status} onChange={handleStatusChange}> <option value="To Do"> To Do </option> <option value="In Progress"> In Progress </option> <option value="Completed"> Completed </option> </select> </p>
      <p> Priority: {task.priority} </p>
      <p> Due Date: {task.dueDate} </p>
      <button onClick={() => onEdit(task)}> Edit </button>
      <button onClick={() => onDelete(task.id)}> Izbrisi </button>
    </div>
  )
}
