import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TasksContext";

export default function Tasklist() {
    const tasks = useTasks();

    return (
        <>
            <ul>
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            <Task task={task} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

function Task({ task }) {
    let taskContent = 'hello kkp';
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();

    if (isEditing) {
        taskContent = (
            <>
                <input type="text" value={task.text} onChange={(e) => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            text: e.target.value,
                        }
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
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked,
                        }
                    })
                }} />
                {taskContent}
                <button type="submit" onClick={() =>
                    dispatch({
                        type: 'deleted',
                        id: task.id,
                    })
                }>
                    Delete
                </button>
            </label>
        </>
    )
}