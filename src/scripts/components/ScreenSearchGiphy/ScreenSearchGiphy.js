import React from "react";
import Reflux from "reflux";
import { ScreenSearchGiphyActions } from "./ScreenSearchGiphyActions";
import { ScreenSearchGiphyStore } from "./ScreenSearchGiphyStore";
import { InputFilter } from "../Shared/InputFilter/InputFilter";
import { Gallery } from "../Shared/Gallery/Gallery";
import { BoxPicture } from "../Shared/BoxPicture/BoxPicture";

export class ScreenSearchGiphy extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = ScreenSearchGiphyStore;

    // Binds feitos no constructor para que não fossem
    //  feitos no render e excutados a cada setState novamente
    this._changeValueInput = this._changeValueInput.bind(this);
    this._keyPress = this._keyPress.bind(this);
    this._shuffle = this._shuffle.bind(this);
    this._favoriteGiphy = this._favoriteGiphy.bind(this);
    this._removeGif = this._removeGif.bind(this);
  }

  // Função responsavel por executar os metodos
  //  necessarios quando monta o componente
  componentDidMount() {
    ScreenSearchGiphyActions.UpdateFavorites();
  }

  // Função responsavel por executar os metodos
  //  necessariosde quando vai desmontar o componente
  componentWillUnmount() {
    ScreenSearchGiphyActions.ResetState();
    super.componentWillUnmount();
  }

  // Método responsavel por executar a action de controle
  //  de estado passando o evento de change do input
  _changeValueInput(event) {
    ScreenSearchGiphyActions.ChangeValueInput(event);
  }

  // Método responsavel por chamar a action que executará a request
  _getGifs() {
    ScreenSearchGiphyActions.GetGifs();
  }

  _shuffle() {
    ScreenSearchGiphyActions.Shuffle();
  }

  // Método responsavel por chamar a action de favoritar o gif
  _favoriteGiphy() {
    ScreenSearchGiphyActions.SaveFavorites();
  }

  // Método responsavel por validar a chamada do método que chama
  //  a request somente quando a tecla prescionada no input for o ENTER (keyCode 13)
  _keyPress(event) {
    if (event.keyCode === 13) this._getGifs();
  }

  // Método responsavel por selectionar a url e copiar o link do gif
  _copyUrl() {
    document.getElementById("input-shared").select();
    document.execCommand("copy");
  }

  // Método responavel por chamar a action de remoção do
  //  gif dos favoritos
  _removeGif(gif) {
    ScreenSearchGiphyActions.RemoveGif(gif);
  }

  render() {
    const { data } = this.state;
    const { controls, giphys } = this.state;

    const url = giphys[controls.numberShuffle]
      ? giphys[controls.numberShuffle].url
      : "";

    return (
      <div className="screen-search-giphy">
        <div className="header">
          <InputFilter
            isValid={controls.isLoading}
            className={"screen=search-giphy"}
            onChange={this._changeValueInput}
            onKeyPress={this._keyPress}
            onClick={this._getGifs}
            value={data.valueInput}
          />
          <BoxPicture
            image={url}
            isLoading={controls.isLoading}
            onShuffle={this._shuffle}
            onCopy={this._copyUrl}
            onFavorite={this._favoriteGiphy}
          />
        </div>
        <div className="row">
          <Gallery images={data.favorites} onRemove={this._removeGif} />
        </div>
      </div>
    );
  }
}
