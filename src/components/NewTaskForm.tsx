import styles from './NewTaskForm.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTaskForm() {

  return (
    <form className={styles.taskForm}>
      <input className={styles.taskInputArea}
        name='task'
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button className={styles.addBtn} type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}
