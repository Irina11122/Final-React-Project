import { useEffect, useState } from "react"

export default function TaskForm({addTask, updateTask, taskToEdit}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if(taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setPriority(taskToEdit.priority);
            setDueDate(taskToEdit.dueDate);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            id: taskToEdit ? taskToEdit.id : Date.now(),
            title,
            description,
            status: taskToEdit ? taskToEdit.status : 'To Do',
            priority,
            dueDate,
        };

        if (taskToEdit) {
            updateTask(taskData);
        } else {
            addTask(taskData);
        }

        setTitle('');
        setDescription('');
        setPriority('Medium');
        setDueDate('');
    }
  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Naslov" required />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Opis" />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High"> Visok </option>
            <option value="Medium"> Sreden </option>
            <option value="Low"> Nizok </option>
        </select>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <button type="submit"> {taskToEdit ? 'Zacuvaj promeni' : 'Dodadi Zadaca'} </button>
    </form>
  )
}
