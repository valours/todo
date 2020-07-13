import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import React from "react";
import { Task } from "../domain";

export default ({
  tasks,
  deleteTaskById
}: {
  tasks: Task[];
  deleteTaskById: (taskId: string) => void;
}) => {
  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Tâches
        </ListSubheader>
      }
    >
      {tasks.map(t => (
        <ListItem key={t.id} onClick={() => deleteTaskById(t.id)}>
          <ListItemText primary={t.title} />
          <IconButton edge="end" aria-label="comments">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};
