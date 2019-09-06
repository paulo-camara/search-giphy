import React from "react";
import { InputFilter } from "../Shared/InputFilter/InputFilter";
// import { Gallery } from "../Shared/Gallery/Gallery";
import { BoxPicture } from "../Shared/BoxPicture/BoxPicture";

import ApiRoutes from "../../ApiRoutes";
import { Request } from "../../Request";

export class ScreenSearchGiphy extends React.Component {
  constructor(props) {
    super(props);
    this.request = new Request();

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onClickFunc = this.onClickFunc.bind(this);

    this.onClickFuncSuccess = this.onClickFuncSuccess.bind(this);
    this.onClickFuncFail = this.onClickFuncFail.bind(this);

    this._shuffle = this._shuffle.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.state = {
      controls: {
        numberShuffle: 0
      },
      data: {
        favorites: [],
        valueInput: ""
      },
      giphys: []
    };
  }

  onKeyPress(event) {
    console.log(event.keyCode);

    if (event.keyCode === 13) this.onClickFunc()
  }

  onChangeValue(event) {
    this.setState({
      data: {
        valueInput: event.target.value
      }
    });
  }

  _shuffle() {
    const { numberShuffle } = this.state.controls;

    this.setState({
      controls: {
        numberShuffle: numberShuffle + 1
      }
    })
  }

  onClickFunc() {
    if (!this.state.data.valueInput) return;

    const payload = {
      q: this.state.data.valueInput
    };

    this.request.SendRequestGet(
      ApiRoutes.search,
      payload,
      this.onClickFuncSuccess,
      this.onClickFuncFail
    );
  }

  onClickFuncSuccess(values) {
    this.setState({
      giphys: this._formatterArray(values.data)
    })
  }

  _formatterArray(data) {
    return data.map((current) => {
      return {
        url: current.images.original.url,
        id: current.id,
        title: current.title
      }
    })
  }

  onClickFuncFail(err) {
    console.log("Err: ", err);
  }

  render() {
    const { valueInput } = this.state.data;
    const { controls, giphys } = this.state;

    const url = giphys[controls.numberShuffle] ? giphys[controls.numberShuffle].url : ''

    return (
      <div className="screen-search-giphy">
        <div className="header">
          <InputFilter
            className={"screen=search-giphy"}
            onChange={this.onChangeValue}
            onKeyPress={this.onKeyPress}
            onClick={this.onClickFunc}
            value={valueInput}
          />
          <BoxPicture
            image={url}
            onShuffle={this._shuffle}
            onCopy={() => console.log("Copy")}
            onFavorite={() => console.log('Favoritou')}
          />
        </div>
        {/* <div className="row">
          <Gallery images={this.state.giphys} />
        </div> */}
      </div>
    );
  }
}
