import React, { useState } from "react";

const Dropdown = (props: {
  identifier: string;
  selectedItem: string;
  optionList: ReadonlyArray<{ key: string; value: string }>;
  callback: (identifier: string, value: string) => void;
}) => {
  const { selectedItem, optionList, identifier, callback } = props;
  const [selectedValue, setSelectedValue] = useState(selectedItem);

  const handleSelectedValueChange = (value: string) => {
    setSelectedValue(value);
    callback(identifier, value);
  };
  return (
    <select
      name="select" defaultValue={selectedValue}
      onChange={(event) => handleSelectedValueChange(event.target.value)}
    >
      {optionList.map((n) => {
        return (
          <option value={n.key} key={n.key}>
            {n.value}
          </option>
        );
      })}
    </select>
  );
};
export default Dropdown;
