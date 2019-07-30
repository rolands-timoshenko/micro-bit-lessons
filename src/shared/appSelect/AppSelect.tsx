import { MenuItem, Select } from "@material-ui/core";
import React from "react";

interface IProps {
  items: {
    name: string;
    value: string;
  }[];
  selectedValue: string;
  onChange: (evt: any) => void;
}

const AppSelect = (props: IProps): JSX.Element => {
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
