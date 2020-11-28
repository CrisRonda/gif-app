import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  const [params, setParams] = useState({
    category: "Rainbow",
    limit: 10,
  });
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

export default GiftExpertApp;
