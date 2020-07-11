import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { random } from "faker";
import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import useTask, { Task } from "./domain";

const taskFactory = (): Task => ({
  id: random.uuid(),
  important: false,
  description: "",
  title: ""
});

export default () => {
  const { addTask, tasks } = useTask();

  const [task, setTask] = useState<Task>(taskFactory());

  const updateTitleOfCurrentTask = (event: any) => {
    const {
      target: { value: title }
    } = event;
    const taskUpdated = { ...task, title };
    setTask(taskUpdated);
  };

  const resetTaskInput = () => {
    setTask(taskFactory());
  };

  const addTaskHandler = () => {
    addTask(task);
    resetTaskInput();
  };

  return (
    <>
      <Paper component="form">
        <InputBase
          id="standard-basic"
          color="primary"
          value={task.title}
          onChange={updateTitleOfCurrentTask}
        />
        <Button onClick={addTaskHandler} variant="contained">
          Ajouter
        </Button>
      </Paper>
      <TaskList tasks={tasks} />
    </>
  );
};
