import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import AppPanelStyles from "./AppPanel.styles";

const AppPanel = (props: any) => {
  return (
    <Paper classes={props.classes}>
      <Typography variant="h4">{props.title}</Typography>
      <div>{props.children}</div>
    </Paper>
  );
};

export default withStyles(AppPanelStyles)(AppPanel);
