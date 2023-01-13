import { Circle, Trash } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import Check from '../assets/check.svg';

import styles from './Task.module.css';

interface TaskProps {
  id: string;
  content: string;
  finished: boolean;
  onDeleteTask: (key: string) => void;
  onCreateTask: (event: FormEvent<HTMLFormElement> & { target: HTMLFormElement; }) => void;
  onCompleteTask: (key: string) => void;
  onOpenTask: (key: string) => void;
}

export function Task({ id, content, finished, onDeleteTask, onCompleteTask, onOpenTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id);
  }

  function handleOpenTask() {
    onOpenTask(id);
  }

  function tasksToShow() {
    if (finished) {
      return (
        <div className={styles.task}>
          <img onClick={handleOpenTask} src={Check} />
          <span className={styles.closedTask}>{content}</span>
          <Trash onClick={handleDeleteTask} className={styles.removeTaskIcon} size={20}/>
        </div>
      )
    } else {
      return (
        <div className={styles.task}>
          <Circle onClick={handleCompleteTask}/>
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
