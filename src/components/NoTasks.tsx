import Clipboard from '../assets/Clipboard.svg'

import styles from './NoTasks.module.css';

export function NoTasks() {
  return (
    <main className={styles.taskBox}>
      <img src={Clipboard} alt='Clipboard' />
      <div className={styles.noTaskText}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </main>
  )
}
