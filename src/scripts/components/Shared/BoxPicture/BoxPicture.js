import React from "react";
import PropTypes from "prop-types";

export class BoxPicture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { onCopy, onShuffle, onFavorite, image, index } = this.props;

    return (
      <div className="box-picture">
        <input
          placeholder={"Url"}
          className="input-shared-giphy"
          id={"input-shared"}
          value={image}
        ></input>
        <div key={index} className="container-picture">
          {image && <img src={image} alt="gif" />}
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
