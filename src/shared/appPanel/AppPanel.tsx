import React, { useState } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import AppPanelStyles from "./AppPanel.styles";

interface IProps {
  classes: any;
  collapsable?: boolean;
  title: string;
  children?: any;
}

const AppPanel = (props: IProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const { classes, title, collapsable, children } = props;

  return (
    <Paper classes={{ root: classes.root, rounded: classes.rounded }}>
      <div className={classes.titleBox}>
        <Typography variant="h4">{title}</Typography>
        {collapsable && (
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleOpen}
          >
            {open ? "Close" : "Open"}
          </Button>
        )}
      </div>
      {collapsable && open && <div>{children}</div>}
      {!collapsable && <div>{children}</div>}
    </Paper>
  );
};

export default withStyles(AppPanelStyles)(AppPanel);
