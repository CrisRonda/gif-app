import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, Input, Select } from "react-rainbow-components";

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
      // setInputValue("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Input
        id="input"
        ref={ref}
        label="Search"
        style={{ maxWidth: 700, width: "80%" }}
        placeholder="Search your Gift"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Select
        label="By"
        value={limit}
        onChange={({ target: { value } }) => setLimit(value)}
        options={options}
        style={{ maxWidth: 100, margin: "0 12px " }}
      />
      <Button
        style={{ height: 38 }}
        label="Search"
        onClick={handleSubmit}
        variant="brand"
        className="rainbow-m-around_medium"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setParams: PropTypes.func.isRequired,
};

export default AddCategory;
