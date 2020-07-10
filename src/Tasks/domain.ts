import { useState } from "react";

export type TaskId = string;

export interface Task {
  id: TaskId;
  title: string;
  description: string;
  important: boolean;
}

export const addTask = (tasks: Task[], task: Task): Task[] => {
  const tasksUpdated = [...tasks];
  tasksUpdated.push(task);
  return tasksUpdated;
};

export const removeTask = (tasks: Task[], taskId: TaskId): Task[] => {
  return [...tasks.filter(task => !isTaskWithId(taskId)(task))];
};

export const isTaskWithId = (taskId: TaskId) => (task: Task): boolean =>
  task.id === taskId;

export default (): {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: TaskId) => void;
} => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return {
    tasks,
    addTask: (task: Task) => setTasks(addTask(tasks, task)),
    removeTask: (taskId: TaskId) => setTasks(removeTask(tasks, taskId))
  };
};
