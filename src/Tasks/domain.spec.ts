import { Task, addTask } from "./domain";
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
