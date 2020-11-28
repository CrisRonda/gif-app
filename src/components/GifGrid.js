import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GiftGridItem from "./GiftGridItem";

import PropTypes from "prop-types";

const GifGrid = ({ category, limit }) => {
  const { data: images, loading } = useFetchGifs({ category, limit });

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">
        {category.toUpperCase()}
      </h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <main className="card-grid">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </main>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  limit: PropTypes.any.isRequired,
};
export default GifGrid;
