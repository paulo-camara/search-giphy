import React from "react";
import PropTypes from "prop-types";

const _renderMiniature = (images, onRemove) => {
  return images.map((image, index) => {
    return (
      <span key={index} className="miniature">
        <label onClick={() => onRemove(image)}>X</label>
        <a href={image} target="blank">
          <img src={image} width="250" height="150" alt="gif" />
        </a>
      </span>
    );
  });
};

export const Gallery = ({ images, onRemove }) => {
  return (
    <div className="gallery">
      <h3 className="title">Favoritos</h3>
      <div className="container">{_renderMiniature(images, onRemove)}</div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
};
