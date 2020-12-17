import React, { useState } from "react";

import styled from "styled-components";

const SelectWrapp = styled.select`
  appearance: none;
  background-color: transparent;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  outline: none;

  border: 1px solid transparent;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;

  ::-ms-expand {
    display: none;
  }

  option {
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    outline: none;
  }
`;

const SelectItem = styled.option``;

const Select = ({ list }) => {
  const [activeSelect, setActiveSelect] = useState(list[0]);

  const selectRef = React.useRef(null);

  React.useEffect(() => {
    console.log(selectRef.current && selectRef.current.value);
  }, [activeSelect]);

  const handleChange = (x) => {
    setActiveSelect(x);
  };

  return (
    <SelectWrapp ref={selectRef} onChange={(e) => handleChange(e.target.value)}>
      {list.map((item) => (
        <SelectItem key={item} value={item}>
          {item}
        </SelectItem>
      ))}
    </SelectWrapp>
  );
};

export default Select;
