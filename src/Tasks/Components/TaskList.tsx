import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DeleteIcon from "@material-ui/icons/Delete";
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
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
