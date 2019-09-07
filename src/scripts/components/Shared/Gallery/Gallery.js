import React from "react";

const _renderMiniature = (images) => {
  return images.map((image, index) => {
    return (
      <span key={index} className="miniature">
        <a href={image} target="blank">
          <img src={image} width="250" height="150" alt="gif" />
        </a>
      </span>
    );
  });
}


export const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      <h3 className="title">Favoritos</h3>
      <div className="container">{_renderMiniature(images)}</div>
    </div>
  );
}