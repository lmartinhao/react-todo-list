import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskDisplay } from './components/TaskDisplay';

function App() {

  return (
    <div>
      <Header />
      <NewTaskForm />
      <main>
        <TaskDisplay />
      </main>
    </div>
  )
}

export default App
