import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTaskForm } from './components/NewTaskForm';
import { Task } from './components/Task';

function App() {

  return (
    <div>
      <Header />
      <NewTaskForm />
      <main>
        <Task />
      </main>
    </div>
  )
}

export default App
