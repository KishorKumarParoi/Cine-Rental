import { useImmerReducer } from 'use-immer';
import AddTask from './components/AddTask';
import TaskList from './components/Tasklist';
import tasksReducer from './components/taskReducer';

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch(
      {
        type: 'added',
        id: nextId++,
        text: text,
        done: false,
      },
    );
  }

  function handleChangeTask(task) {
    // action object
    dispatch({
      type: 'changed',
      task,
    })
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
