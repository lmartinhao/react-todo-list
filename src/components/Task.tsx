import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { NoTasks } from './NoTasks';

import styles from './Task.module.css';

const tasks = [
  {
    id: 1,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    finished: false,
  },
  {
    id: 2,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    finished: true,
  },
];

export function Task() {


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
            <span className={styles.numberOfTasksText}>0</span>
          </div>
        </header>

        <main className={styles.taskBox}>
          <NoTasks />

          {tasks.map((task) => {
            if (task.finished) {
              return (
                <div className={styles.task}>
                  <CheckCircle className={styles.checkTaskCircle} size={22} />
                  <span className={styles.closedTask}>{task.content}</span>
                  <Trash size={20}/>
                </div>
              )
            } else {
              return (
                <div className={styles.task}>
                  <Circle size={22} />
                  <span className={styles.openTask}>{task.content}</span>
                  <Trash size={20}/>
                </div>
              )
            }
          })}
        </main>
      </div>
    </article>
  );
}
