import React from "react";

export class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.x = 0;
  }

  openLightbox(index, event) {}

  _renderMiniature() {
    return this.props.images.map((image, index) => {
      return (
        <span key={index} className="miniature">
          <a href={image.src} target="_blank" onClick={e => this.openLightbox(index, e)}>
            <img src={image.src} width="250" height="150" alt="" />
          </a>
        </span>
      );
    });
  }

  render() {
    return (
      <div className="gallery">
        <h3 className="title">Favoritos</h3>
        <div className="container">{this._renderMiniature()}</div>
      </div>
    );
  }
}
