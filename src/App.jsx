import AddTask from './components/AddTask';
import TaskList from './components/Tasklist';
import TasksProvider from './components/TasksContext';

export default function TaskApp() {

  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}


