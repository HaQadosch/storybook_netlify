import React, { useState } from 'react';
import { Task, TTask, TaskState } from './Task';
import './TaskList.css';

interface ITaskList {
  loading: boolean;
  tasks: TTask[];
  onArchive(task: TTask): void;
  onPin(task: TTask): void;
}

export const TaskList: React.FC<ITaskList> = ({ loading, tasks: origTasks, onArchive: archive, onPin: pin }) => {
  const [tasks, setTasks] = useState(origTasks);

  const events = {
    onArchive: (archivedTask: TTask) => {
      setTasks(tasks.map(task => (task.id === archivedTask.id ? archivedTask : task)));
      archive(archivedTask);
    },
    onPin: (toggledTask: TTask) => {
      setTasks(tasks.map(task => (task.id === toggledTask.id ? toggledTask : task)));
      pin(toggledTask);
    },
  };

  const loadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox' />
      <span className='glow-text'>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className='list-items'>
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className='list-items'>
        <div className='wrapper-message'>
          <span className='icon-check' />
          <div className='title-messag'>You have no tasks.</div>
          <div className='subtitle-message'>Sit back and relax</div>
        </div>
      </div>
    );
  }

  return (
    <div className='list-items' data-testid='list-items'>
      {tasks.map(task => (task.state !== TaskState.ARCHIVED ? <Task key={task.id} task={task} {...events} /> : null))}
    </div>
  );
};
