import { NoTasks } from './NoTasks';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';
import { FormEvent, useState } from 'react';

import styles from './TaskDisplay.module.css';
import { PlusCircle } from 'phosphor-react';

interface TaskProps {
  id: string;
  content: string;
  finished: boolean;
  onDeleteTask: (key: {}) => void;
  onCreateTask: (event: FormEvent<Element>) => void;
}

export function TaskDisplay() {
  const [taskList, setTaskList] = useState([
    {
      id: uuidv4(),
      content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper.",
      finished: false
    },
    {
      id: uuidv4(),
      content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      finished: true
    }
  ])

  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    content: "",
    finished: false,
  })

  function deleteTask(taskToDelete: {}) {
    const tasksWithoutDeletedOne = taskList.filter(task => {
      return task !== taskToDelete;
    })

    console.log(`Deletar a task: ${taskToDelete}`)
    setTaskList(tasksWithoutDeletedOne);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTaskList([...taskList, newTask]);
    setNewTask({
      id: uuidv4(),
      content: "",
      finished: false,
    });

    console.log('Criando uma nova tarefa')
  }

  function displayTasks() {
    if (taskList.length === 0) {
      return <NoTasks />;
    } else {
      return (
        taskList.map(task => {
          return (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              finished={task.finished}
              onDeleteTask={deleteTask}
              onCreateTask={handleCreateNewTask}
            />
          )
        })
      )
    }
  }

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input className={styles.taskInputArea}
          name='task'
          placeholder="Adicione uma nova tarefa"
          required
        />
        <button className={styles.addBtn} type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.numberOfTaskDisplay}>
        <header>
          <div className={styles.numberOfTasks}>
            <span className={styles.blueText}>Tarefas criadas</span>
            <span className={styles.numberOfTasksText}>0</span>
          </div>
          <div className={styles.numberOfTasks}>
            <span className={styles.purpleText}>Concluídas</span>
            <span className={styles.numberOfTasksText}>10 de 10</span>
          </div>
        </header>

        <div className={styles.taskDisplay}>
          {displayTasks()}
        </div>
      </div>
    </article>
  );
}
