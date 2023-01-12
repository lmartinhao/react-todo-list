import { NoTasks } from './NoTasks';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './TaskDisplay.module.css';
import { PlusCircle } from 'phosphor-react';


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


  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = taskList.filter(task => {
      return task.id !== taskToDelete;
    })

    setTaskList(tasksWithoutDeletedOne);
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement> & {
    target: HTMLFormElement
  }) {
    event.preventDefault();

    const newTaskText = {
      id: uuidv4(),
      content: event.target.task.value,
      finished: false
    }
    setTaskList([...taskList, newTaskText]);
  };

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Hey, não se esqueça de escrever alguma coisa 😯');
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
        <textarea
          name="task"
          className={styles.taskInputArea}
          placeholder="Adicione uma nova tarefa"
          onInvalid={() => handleNewTaskInvalid}
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
