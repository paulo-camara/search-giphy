import React from "react";
import { InputFilter } from "../Shared/InputFilter/InputFilter";
import { Gallery } from "../Shared/Gallery/Gallery";
import { BoxPicture } from "../Shared/BoxPicture/BoxPicture";

export class ScreenSearchGiphy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        valueInput: ""
      },
      images: [
        {
          src: "https://media.giphy.com/media/d5fdHJvgjQztHqCLhC/giphy.gif"
        },
        {
          src: "https://media.giphy.com/media/iieZBiRO5F9V6/giphy.gif"
        },
        {
          src: "https://media.giphy.com/media/iCTs8CcnOl6KI/giphy.gif"
        },
        {
          src: "https://media.giphy.com/media/bzL59QAV2Pny/giphy.gif"
        },
        {
          src: "https://media.giphy.com/media/3fN8BMRnvIdR6/giphy.gif"
        }
      ]
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onClickFunc = this.onClickFunc.bind(this);
  }

  onChangeValue(event) {
    this.setState({
      data: {
        valueInput: event.target.value
      }
    });
  }

  onClickFunc() {
    console.log("Faz a request para a api");
  }

  render() {
    const { valueInput } = this.state.data;

    return (
      <div className="screen-search-giphy">
        <div className="header">
          <InputFilter
            className={"screen=search-giphy"}
            onChange={this.onChangeValue}
            onClick={this.onClickFunc}
            value={valueInput}
          />
          <BoxPicture
            image={this.state.images[0]}
            onShuffle={() => console.log("Shuffle")}
            onCopy={() => console.log("Copy")}
          />
        </div>
        <div className="row">
          <Gallery
            images={this.state.images}
            onOpenPicture={() => console.log("Abre a foto")}
          />
        </div>
      </div>
    );
  }
}
