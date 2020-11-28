import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Input, Select } from "react-rainbow-components";

const options = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 30, label: "30" },
];

const AddCategory = ({ setParams }) => {
  const [inputValue, setInputValue] = useState("");
  const [limit, setLimit] = useState(10);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  // useEffect(() => {
  //   if (inputValue) setParams({ category: inputValue, limit });
  // }, [inputValue, limit, setParams]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length >= 2) {
      setParams({ category: inputValue, limit });
      setInputValue("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Input
        id="input"
        ref={ref}
        label="Search"
        style={{ maxWidth: 700, width: "80%" }}
        placeholder="Search your Gift"
        bottomHelpText="ex: Shaman King"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Select
        label="By"
        value={limit}
        onChange={({ target: { value } }) => setLimit(value)}
        options={options}
        style={{ maxWidth: 356, marginLeft: 8 }}
        // className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setParams: PropTypes.func.isRequired,
};

export default AddCategory;
