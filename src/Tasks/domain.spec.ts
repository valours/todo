import { Task, TaskId, addTask, removeTask } from "./domain";
import { random } from "faker";

test("add task to task list", () => {
  // given
  const tasks: Task[] = [];
  const task: Task = {
    id: random.uuid(),
    description: "",
    important: false,
    title: ""
  };

  // when
  const tasksUpdated = addTask(tasks, task);

  // then
  expect(tasksUpdated).toHaveLength(1);
  expect(tasksUpdated).toContain(task);
});

test("remove task to task list", () => {
  // given
  const taskId: TaskId = random.uuid();
  const task: Task = {
    id: taskId,
    description: "",
    important: false,
    title: ""
  };
  const tasks: Task[] = [task];

  // when
  const tasksUpdated = removeTask(tasks, taskId);

  // then
  expect(tasksUpdated).toHaveLength(tasks.length - 1);
  expect(tasksUpdated).toEqual([]);
});
