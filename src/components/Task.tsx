import React, { useState } from 'react';
import produce from 'immer';

// TaskState.INBOX is used as default state as well.
export enum TaskState {
  INBOX = 'INBOX',
  PINNED = 'PINNED',
  ARCHIVED = 'ARCHIVED',
}

export type TTask = {
  id: string;
  title: string;
  state: TaskState;
  updatedAt?: Date;
};

interface ITask {
  task: TTask;
  onArchive(task: TTask): void;
  onPin(task: TTask): void;
}

export const Task: React.FC<ITask> = ({ task: initTask, onArchive, onPin }) => {
  const [{ id, title, state, updatedAt }, setTask] = useState(initTask);

  const archive = () => {
    const archivedTask = produce({ id, title, state, updatedAt }, draft => {
      draft.state = TaskState.ARCHIVED;
    });
    setTask(archivedTask);
    onArchive(archivedTask);
  };

  const togglePin = () => {
    const pinnedTask = produce({ id, title, state, updatedAt }, draft => {
      draft.state = draft.state === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED;
      draft.updatedAt = new Date(Date.now());
    });
    setTask(pinnedTask);
    onPin(pinnedTask);
  };

  return (
    <article className={`list-item ${state}`} data-testid={`list-item ${state}`}>
      <label className='checkbox'>
        <input type='checkbox' name='checked' defaultChecked={state === TaskState.ARCHIVED} disabled={true} />
        <span className='checkbox-custom' onClick={archive} />
      </label>

      <section className='title'>
        <input
          type='text'
          value={title}
          name={title}
          style={{ textOverflow: 'ellipsis' }}
          readOnly={true}
          placeholder='input title'
          aria-label={title}
        />
      </section>

      <section className='actions' onClick={evt => evt.stopPropagation()}>
        {state !== TaskState.ARCHIVED ? (
          <button onClick={togglePin}>
            <span className='icon-star' />
          </button>
        ) : null}
      </section>
    </article>
  );
};
