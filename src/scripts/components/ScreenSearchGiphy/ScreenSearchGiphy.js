import React from "react";
import Reflux from 'reflux';

import { ScreenSearchGiphyActions } from './ScreenSearchGiphyActions';
import { ScreenSearchGiphyStore } from './ScreenSearchGiphyStore';

import { InputFilter } from "../Shared/InputFilter/InputFilter";
import { Gallery } from "../Shared/Gallery/Gallery";
import { BoxPicture } from "../Shared/BoxPicture/BoxPicture";


export class ScreenSearchGiphy extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = ScreenSearchGiphyStore;

    this._changeValueInput = this._changeValueInput.bind(this);
    this._keyPress = this._keyPress.bind(this);
    this._shuffle = this._shuffle.bind(this);
    this._favoriteGiphy = this._favoriteGiphy.bind(this);
  }

  componentDidMount() {
    ScreenSearchGiphyActions.UpdateFavorites();
  }

  componentWillUnmount() {
    ScreenSearchGiphyActions.ResetState();
    super.componentWillUnmount();
  }

  _changeValueInput(event) {
    ScreenSearchGiphyActions.ChangeValueInput(event);
  }

  _getGifs() {
    ScreenSearchGiphyActions.GetGifs();
  }

  _shuffle() {
    ScreenSearchGiphyActions.Shuffle();
  }

  _favoriteGiphy() {
    ScreenSearchGiphyActions.SaveFavorites();
  }

  _keyPress(event) {
    if (event.keyCode === 13) this._getGifs();
  }

  _copyUrl() {
    document.getElementById("input-shared").select()
    document.execCommand('copy');
  }

  render() {
    const { data } = this.state;
    const { controls, giphys } = this.state;

    const url = giphys[controls.numberShuffle] ? giphys[controls.numberShuffle].url : ''

    return (
      <div className="screen-search-giphy">
        <div className="header">
          <InputFilter
            className={"screen=search-giphy"}
            onChange={this._changeValueInput}
            onKeyPress={this._keyPress}
            onClick={this._getGifs}
            value={data.valueInput}
          />
          <BoxPicture
            image={url}
            onShuffle={this._shuffle}
            onCopy={this._copyUrl}
            onFavorite={this._favoriteGiphy}
          />
        </div>
        <div className="row">
          <Gallery images={data.favorites} />
        </div>
      </div>
    );
  }
}
