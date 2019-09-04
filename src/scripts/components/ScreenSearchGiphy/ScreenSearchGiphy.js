import React from 'react';
import { InputFilter } from '../Shared/InputFilter/InputFilter';
import { Gallery } from '../Shared/Gallery/Gallery';
import { BoxPicture } from '../Shared/BoxPicture/BoxPicture';

export class ScreenSearchGiphy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                valueInput: '',
            },
            images: [
                {
                    src:
                        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    src:
                        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    src:
                        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    src:
                        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    src:
                        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    src:
                        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    src:
                        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
            ]
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onClickFunc = this.onClickFunc.bind(this);
    }

    onChangeValue(event) {
        this.setState({
            data: {
                valueInput: event.target.value
            }
        })
    }

    onClickFunc() {
        console.log('Faz a request para a api');
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
                        onShuffle={() => console.log('Shuffle')}
                        onCopy={() => console.log('Copy')} />
                </div>
                <div className="row">
                    <Gallery
                        images={this.state.images}
                        onOpenPicture={() => console.log('Abre a foto')} />
                </div>
            </div>
        )
    }
}