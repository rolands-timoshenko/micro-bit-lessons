import React from "react";
import { withStyles, Button } from "@material-ui/core";
import AppActivityNavigationStyles from "./AppActivityNavigation.styles";

interface IProps {
  classes: any;
  hasNextStep: boolean;
  hasPrevStep: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const AppActivityNavigation = (props: IProps) => {
  const { classes, hasNextStep, hasPrevStep, onNext, onPrev } = props;
  return (
    <div className={classes.root}>
      {hasPrevStep && (
        <Button
          onClick={onPrev}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Previous
        </Button>
      )}
      {hasNextStep && (
        <Button
          onClick={onNext}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default withStyles(AppActivityNavigationStyles)(AppActivityNavigation);
