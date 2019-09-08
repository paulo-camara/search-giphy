import React from "react";
import PropTypes from "prop-types";

export class BoxPicture extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderImage(image, isLoading) {
    if (isLoading === true) {
      return <h1 className="loading-message"> Carregando... </h1>
    } else if (isLoading === false && image) {
      return <img src={image} alt="gif" />
    }
  }

  render() {
    const { onCopy, onShuffle, onFavorite, image, index, isLoading } = this.props;

    return (
      <div className="box-picture">
        <input
          placeholder={"Url"}
          className="input-shared-giphy"
          id={"input-shared"}
          value={image}
        ></input>
        <div key={index} className="container-picture">
          {this._renderImage(image, isLoading)}
        </div>
        <div>
          <button className="btn copy" onClick={onCopy}>
            Copy
          </button>
          <button className="btn shuffle" onClick={onShuffle}>
            Shuffle
          </button>
          <button className="btn favorite" onClick={onFavorite}>
            Favoritar
          </button>
        </div>
      </div>
    );
  }
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  onShuffle: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onClick: PropTypes.func
};
