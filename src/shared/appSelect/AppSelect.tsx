import React, { ChangeEvent } from "react";
import { Select, MenuItem } from "@material-ui/core";

interface IProps {
  items: {
    name: string;
    value: string;
  }[];
  selectedValue: string;
  onChange: (evt: any) => void;
}

const AppSelect = (props: IProps) => {
  const { selectedValue, items, onChange } = props;
  return (
    <Select value={selectedValue} onChange={onChange}>
      {items.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.name}
        </MenuItem>
      ))}
      ;
    </Select>
  );
};

export default AppSelect;
