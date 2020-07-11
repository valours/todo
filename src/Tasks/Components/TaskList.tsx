import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import React from "react";
import { Task } from "../domain";

export default ({ tasks }: { tasks: Task[] }) => {
  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Tâches
        </ListSubheader>
      }
    >
      {tasks.map(t => (
        <ListItem key={t.id}>
          <ListItemText primary={t.title} />
        </ListItem>
      ))}
    </List>
  );
};
