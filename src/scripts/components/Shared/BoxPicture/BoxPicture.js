import React from "react";
import PropTypes from "prop-types";

// Método recebe a imagem a ser renderizada e valida se mostrara 
//  a mensagem de loading ou a imagem carregada
const _renderImage = (image, isLoading) => {
  if (isLoading === true) {
    return <h1 className="loading-message"> Carregando... </h1>
  } else if (isLoading === false && image) {
    return <img src={image} alt="gif" />
  }
}

export const BoxPicture = ({ onCopy, onShuffle, onFavorite, image, index, isLoading }) => {
  return (
    <div className="box-picture">
      <input
        placeholder={"Url"}
        className="input-shared-giphy"
        id={"input-shared"}
        value={image}
      ></input>
      <div key={index} className="container-picture">
        {_renderImage(image, isLoading)}
      </div>
      <div>
        <button className="btn copy" onClick={onCopy}>
          Copy
        </button>
        <button className="btn shuffle" onClick={onShuffle}>
          Próximo
        </button>
        <button className="btn favorite" onClick={onFavorite}>
          Favoritar
        </button>
      </div>
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  onShuffle: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onClick: PropTypes.func
};
