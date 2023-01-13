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

  const completedTasks = taskList.filter(task => {
    return task.finished;
  }).length

  const [newTaskText, setNewTaskText] = useState('')

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

    const newTask = {
      id: uuidv4(),
      content: event.target.task.value,
      finished: false
    }
    setTaskList([newTask, ...taskList]);
    setNewTaskText('');
  };

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Hey, não se esqueça de escrever alguma coisa 😯');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement> & {
    target: HTMLFormElement
  }) {
    setNewTaskText(event.target.value);
  }

  function setTaskAsCompleted(taskToComplete: string) {
    const tasksWithoutCompletedOne = taskList.filter(task => {
      return task.id !== taskToComplete;
    })

    const completedTask = {
      id: taskToComplete,
      content: taskList.find(task => task.id === taskToComplete)!.content,
      finished: true,
    }
    const taskListWithCompletedOnesMarked = [...tasksWithoutCompletedOne, completedTask];
    setTaskList(taskListWithCompletedOnesMarked);
  }

  function setTaskAsOpen(taskToOpen: string) {
    const tasksWithoutOpenedOne = taskList.filter(task => {
      return task.id !== taskToOpen;
    })

    const openTask = {
      id: taskToOpen,
      content: taskList.find(task => task.id === taskToOpen)!.content,
      finished: false,
    }

    const taskListWithOpenedOnesMarked = [openTask, ...tasksWithoutOpenedOne];
    setTaskList(taskListWithOpenedOnesMarked);
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
              onCompleteTask={setTaskAsCompleted}
              onOpenTask={setTaskAsOpen}
            />
          )
        })
      )
    }
  }

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input
          name="task"
          className={styles.taskInputArea}
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
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
            <span className={styles.numberOfTasksText}>{taskList.length}</span>
          </div>
          <div className={styles.numberOfTasks}>
            <span className={styles.purpleText}>Concluídas</span>
            <span className={styles.numberOfTasksText}>{completedTasks} de {taskList.length}</span>
          </div>
        </header>

        <div className={styles.taskDisplay}>
          {displayTasks()}
        </div>
      </div>
    </article>
  );
}
