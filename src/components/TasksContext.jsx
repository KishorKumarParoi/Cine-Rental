import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import tasksReducer from "./taskReducer";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
    const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];
