import Reflux from 'reflux';
import update from 'immutability-helper';
import { ScreenSearchGiphyActions } from './ScreenSearchGiphyActions';

import ApiRoutes from "../../ApiRoutes";
import { Request } from "../../Request";

const _getInitialState = () => {
    return {
        controls: {
            numberShuffle: 0
        },
        data: {
            favorites: [],
            valueInput: ""
        },
        giphys: []
    }
}

export class ScreenSearchGiphyStore extends Reflux.Store {
    constructor() {
        super();

        this.listenables = ScreenSearchGiphyActions;

        this.state = { ..._getInitialState() }

        this.request = new Request();

        this._onGetGifsSuccess = this._onGetGifsSuccess.bind(this);
        this._onGetGifsFail = this._onGetGifsFail.bind(this);
    }

    onChangeValueInput(event) {
        this.setState(
            update(this.state, {
                data: {
                    valueInput: { $set: event.target.value }
                }
            })
        )
    }

    onShuffle() {
        const { numberShuffle } = this.state.controls;

        this.setState({
            controls: {
                numberShuffle: numberShuffle + 1
            }
        })
    }

    onUpdateFavorites() {
       console.log('Atualizou os favoritos');
    }

    onSaveFavorites() {
        console.log('salvou nos favoritos');
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

    onGetGifs() {
        if (!this.state.data.valueInput) return;

        const payload = {
            q: this.state.data.valueInput
        };

        this.request.SendRequestGet(
            ApiRoutes.search,
            payload,
            this._onGetGifsSuccess,
            this._onGetGifsFail
        );
    }

    _onGetGifsSuccess(values) {
        this.numberShuffle = 0;

        this.setState({
            giphys: this._formatterArray(values.data)
        })
    }

    _onGetGifsFail(err) {
        alert(err);
    }

    onResetState() {
        this.setState({
            ..._getInitialState()
        })
    }
}