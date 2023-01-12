import { Circle, Trash } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import Check from '../assets/check.svg';

import styles from './Task.module.css';

interface TaskProps {
  id: string;
  content: string;
  finished: boolean;
  onDeleteTask: (key: {}) => void;
  onCreateTask: (event: FormEvent<Element>) => void;
}

export function Task({ content, finished, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function tasksToShow() {
    if (finished) {
      return (
        <div className={styles.task}>
          <img src={Check} />
          <span className={styles.closedTask}>{content}</span>
          <Trash onClick={handleDeleteTask} className={styles.removeTaskIcon} size={20}/>
        </div>
      )
    } else {
      return (
        <div className={styles.task}>
          <Circle />
          <span className={styles.openTask}>{content}</span>
          <Trash onClick={handleDeleteTask} className={styles.removeTaskIcon} size={20}/>
        </div>
      )
    }
  }

  return (
    tasksToShow()
  )
}
