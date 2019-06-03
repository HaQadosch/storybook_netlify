import { TTask, TaskState } from '../components/Task';

export const defaultTask: TTask = {
  id: '1',
  title: 'Test',
  updatedAt: new Date(2019, 5, 27),
  state: TaskState.INBOX,
};

export const defaultTasks: TTask[] = [
  { ...defaultTask, id: '1', title: 'Todo 1' },
  { ...defaultTask, id: '2', title: 'Todo 2' },
  { ...defaultTask, id: '3', title: 'Todo 3' },
  { ...defaultTask, id: '4', title: 'Todo 4' },
  { ...defaultTask, id: '5', title: 'Todo 5' },
  { ...defaultTask, id: '6', title: 'Todo 6' },
];

export const withPinnedTask = [
  ...defaultTasks.slice(0, 5),
  { ...defaultTask, id: '6', title: 'Todo 6 (pinned)', state: TaskState.PINNED },
];
