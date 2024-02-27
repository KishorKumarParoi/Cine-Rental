import { useImmerReducer } from 'use-immer';
import AddTask from './components/AddTask';
import TaskList from './components/Tasklist';
import { TasksContext, TasksDispatchContext } from './components/TasksContext';
import tasksReducer from './components/taskReducer';

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList
        />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}


const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
