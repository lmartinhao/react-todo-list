import { Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import Check from '../assets/check.svg';

import styles from './Task.module.css';

interface TaskProps {
  content: string;
  finished: boolean;
}

export function Task({ content, finished }: TaskProps) {

  function tasksToShow() {
    if (finished) {
      return (
        <div className={styles.task}>
          <img src={Check} />
          <span className={styles.closedTask}>{content}</span>
          <Trash className={styles.removeTaskIcon} size={20}/>
        </div>
      )
    } else {
      return (
        <div className={styles.task}>
          <Circle />
          <span className={styles.openTask}>{content}</span>
          <Trash className={styles.removeTaskIcon} size={20}/>
        </div>
      )
    }
  }

  return (
    tasksToShow()
  )
}
