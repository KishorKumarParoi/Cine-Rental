import { useState } from "react";

export default function Tasklist({ tasks, onChangeTask, onDeleteTask }) {
    console.log(tasks);

    return (
        <>
            <ul>
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

function Task({ task, onChange, onDelete }) {
    let taskContent = 'hello kkp';
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        taskContent = (
            <>
                <input type="text" value={task.text} onChange={(e) => {
                    onChange({
                        ...task,
                        text: e.target.value,
                    })
                }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    }
    else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }

    return (
        <>
            <label htmlFor="">
                <input type="checkbox" checked={task.done} onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked,
                    })
                }} />
                {taskContent}
                <button type="submit" onClick={() => onDelete(task.id)}>
                    Delete
                </button>
            </label>
        </>
    )
}