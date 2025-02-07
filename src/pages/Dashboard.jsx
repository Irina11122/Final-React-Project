import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import '../index.css';
import useSWR, { mutate } from "swr";

const fetchTasks = () => {
    try {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
};

export default function Dashboard() {

    const { data: tasks, error } = useSWR('tasks', fetchTasks);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const addTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        mutate('tasks');
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        mutate('tasks');
    };

    const editTask = (task) => {
        setTaskToEdit(task);
    };

    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTaskToEdit(null);
        mutate('tasks');
    };

    if (error) return <div>Error loading tasks</div>;
    if (!tasks) return <div>Loading tasks...</div>;

    return (
        <div className="dashboard-container">
            <h2> Tabla za Zadaci </h2>
            <TaskForm addTask={addTask} updateTask={updateTask} taskToEdit={taskToEdit} />
            <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
        </div>
    );
}
