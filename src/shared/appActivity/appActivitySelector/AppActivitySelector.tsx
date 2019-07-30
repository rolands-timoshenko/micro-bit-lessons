import React from "react";
import AppSelect from "../../appSelect/AppSelect";
import { withStyles, Typography } from "@material-ui/core";
import AppActivitySelectorStyles from "./AppActivitySelector.styles";

interface IProps {
  classes: any;
  items: {
    name: string;
    value: string;
  }[];
  selectedValue: string;
  onChange: (evt: any) => void;
}

const AppActivitySelector = (props: IProps) => {
  const { classes, items, selectedValue, onChange } = props;
  return (
    <div className={classes.root}>
      <Typography style={{ marginRight: 100 }} variant="body1">
        {items.length} steps
      </Typography>
      <AppSelect
        items={items}
        selectedValue={selectedValue}
        onChange={onChange}
      />
    </div>
  );
};

export default withStyles(AppActivitySelectorStyles)(AppActivitySelector);
