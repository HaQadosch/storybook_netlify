import React from 'react';
import { TaskList } from './TaskList';
import './InboxScreen.css';
import { defaultTasks } from '../utils/genTasks';

export const InboxScreen: React.FC<{ error?: Error; errorInfo?: React.ErrorInfo }> = ({ error, errorInfo }) => {
  const errorComponent = (
    <div className='wrapper-message'>
      <span className='icon-face-sad' />
      <div className='title-message'>Oh no!</div>
      <div className='subtitle-message'>Somethig went wrong</div>
    </div>
  );

  const okComponent = (
    <>
      <nav>
        <h1 className='title-page'>
          <span className='title-wrapper'>TaskBox</span>
        </h1>
      </nav>
      <TaskList loading={false} tasks={defaultTasks} onArchive={() => {}} onPin={() => {}} />
    </>
  );

  return <div className='page lists-show'>{error ? errorComponent : okComponent}</div>;
};
