import { NoTasks } from './NoTasks';
import { Task } from './Task';

import styles from './TaskDisplay.module.css';


const taskList = [
  {
    id: 1,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper.",
    finished: false
  },
  {
    id: 2,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    finished: true
  }
];

export function TaskDisplay() {

  return (
    <article>
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
          {taskList.map(task => {
            return (
              <Task
                key={task.id}
                content={task.content}
                finished={task.finished}
              />
            )
          })}

          <NoTasks />
        </div>
      </div>
    </article>
  );
}
