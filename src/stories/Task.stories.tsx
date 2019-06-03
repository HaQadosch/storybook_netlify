import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import produce from 'immer';

import { Task, TTask, TaskState } from '../components/Task';

export const defaultTask: TTask = {
  id: '1',
  title: 'Test',
  updatedAt: new Date(2019, 5, 27),
  state: TaskState.INBOX,
};

const setTaskState = (task: TTask) => (state: TaskState) =>
  produce(task, draft => {
    draft.state = state;
  });
const setState = setTaskState(defaultTask);

const setTaskTitle = (task: TTask) => (title: string) =>
  produce(task, draft => {
    draft.title = title;
  });
const setTitle = setTaskTitle(defaultTask);

export const actions = {
  onPin: action('PIN'),
  onArchive: action('ARCHIVE'),
};

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`;

export const inboxTask = () => <Task task={object('task', setState(TaskState.INBOX))} {...actions} />;
export const longTitleTask = () => <Task task={object('task', setTitle(longTitle))} {...actions} />;
export const pinnedTask = () => <Task task={setState(TaskState.PINNED)} {...actions} />;
export const archivedTask = () => <Task task={setState(TaskState.ARCHIVED)} {...actions} />;

storiesOf('Task', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .addParameters({ viewport: { defaultViewport: 'iphonex' } })
  .add('inbox -- default', inboxTask)
  .add('long title', longTitleTask)
  .add('pinned', pinnedTask)
  .add('archived', archivedTask);
