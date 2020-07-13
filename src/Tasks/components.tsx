import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { random } from "faker";
import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import useTask, { Task, TaskId } from "./domain";

const taskFactory = (): Task => ({
  id: random.uuid(),
  important: false,
  description: "",
  title: ""
});

export default () => {
  const { addTask, removeTask, tasks } = useTask();

  const [task, setTask] = useState<Task>(taskFactory());

  const updateTitleOfCurrentTask = (event: any) => {
    const {
      target: { value: title }
    } = event;
    const taskUpdated = { ...task, title };
    setTask(taskUpdated);
  };

  const deleteTaskById = (taskId: TaskId) => {
    removeTask(taskId);
  };

  const resetTaskInput = () => {
    setTask(taskFactory());
  };

  const addTaskHandler = () => {
    addTask(task);
    resetTaskInput();
  };

  const keyPress = (event: React.SyntheticEvent) => {
    const { key } = event;
    if (key === "Enter") {
      addTaskHandler();
      event.preventDefault();
    }
  };

  return (
    <>
      <Paper component="form" variant="outlined">
        <TextField
          id="standard-basic"
          color="primary"
          value={task.title}
          onChange={updateTitleOfCurrentTask}
          label="Nouvelle tâche"
          variant="outlined"
          size="small"
          onKeyPress={keyPress}
        />
        <Button onClick={addTaskHandler} size="large" variant="contained">
          Ajouter
        </Button>
      </Paper>
      <TaskList deleteTaskById={deleteTaskById} tasks={tasks} />
    </>
  );
};
