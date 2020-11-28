import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import PropTypes from "prop-types";

const GiftExpertApp = ({ initialState }) => {
  const [params, setParams] = useState(initialState);
  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setParams={setParams} />
      <ol>
        <GifGrid category={params.category} limit={params.limit} />
      </ol>
    </>
  );
};
GiftExpertApp.propTypes = {
  initialState: PropTypes.shape(),
};

GiftExpertApp.defaultProps = {
  initialState: {
    category: "Rainbow",
    limit: 10,
  },
};
export default GiftExpertApp;
