import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import produce from 'immer';

import { Task, TTask, TaskState } from '../components/Task';

const baseTask: TTask = {
  id: 'testId',
  title: 'testTitle',
  state: TaskState.INBOX,
};

const actions = {
  onPin: (task: TTask) => {
    console.log('pinned', { id: task.id });
  },
  onArchive: (task: TTask) => {
    console.log('archived', { id: task.id });
  },
};

// Insert the creation date as updatedAt.
const createTask = (base: TTask): TTask =>
  produce(base, draft => {
    draft.updatedAt = new Date();
  });

test('renders without crashing', () => {
  const task = createTask(baseTask);
  const div = document.createElement('div');
  ReactDOM.render(<Task task={task} {...actions} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
