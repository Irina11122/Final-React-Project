import { useMemo } from "react"
import TaskCard from "./TaskCard";

export default function TaskList({tasks, onEdit, onDelete}) {
    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => task.status === 'To Do');
    })
  return (
    <div>
      {filteredTasks.map((task) => ( <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} /> ))}
    </div>
  )
}
