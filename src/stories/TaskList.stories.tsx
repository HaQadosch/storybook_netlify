import React from 'react';

import { storiesOf } from '@storybook/react';
import { TaskList } from '../components/TaskList';
import { TTask, TaskState } from '../components/Task';
import { defaultTask, actions } from './Task.stories';

const defaultTasks: TTask[] = [
  { ...defaultTask, id: '1', title: 'Todo 1' },
  { ...defaultTask, id: '2', title: 'Todo 2' },
  { ...defaultTask, id: '3', title: 'Todo 3' },
  { ...defaultTask, id: '4', title: 'Todo 4' },
  { ...defaultTask, id: '5', title: 'Todo 5' },
  { ...defaultTask, id: '6', title: 'Todo 6' },
];

const withPinnedTask = [
  ...defaultTasks.slice(0, 5),
  { ...defaultTask, id: '6', title: 'Todo 6 (pinned)', state: TaskState.PINNED },
];

export const defaultList = () => <TaskList loading={false} tasks={defaultTasks} {...actions} />;
export const taskPinnedList = () => <TaskList loading={false} tasks={withPinnedTask} {...actions} />;
export const loadingList = () => <TaskList loading={true} tasks={[]} {...actions} />;
export const emptyList = () => <TaskList loading={false} tasks={[]} {...actions} />;

storiesOf('TaskList', module)
  .add('default', defaultList)
  .add('1 taks pinned', taskPinnedList)
  .add('loading', loadingList)
  .add('empty', emptyList);
