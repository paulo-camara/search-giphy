import Reflux from "reflux";
import update from "immutability-helper";
import { ScreenSearchGiphyActions } from "./ScreenSearchGiphyActions";
import ApiRoutes from "../../ApiRoutes";
import { Request } from "../../Request";
import toastr from "toastr";

const _getInitialState = () => {
  return {
    controls: {
      numberShuffle: 0,
      isLoading: false
    },
    data: {
      favorites: [],
      valueInput: ""
    },
    giphys: []
  };
};

export class ScreenSearchGiphyStore extends Reflux.Store {
  constructor() {
    super();

    this.listenables = ScreenSearchGiphyActions;

    this.state = { ..._getInitialState() };

    this.request = new Request();

    // Binds feitos no constructor para que não fossem
    //  feitos no render e excutados a cada setState novamente
    this._onGetGifsSuccess = this._onGetGifsSuccess.bind(this);
    this._onGetGifsFail = this._onGetGifsFail.bind(this);
  }

  // Função responsavel por atualzar o estado do valor do input de pesquisa
  onChangeValueInput(event) {
    this.setState(
      update(this.state, {
        data: {
          valueInput: { $set: event.target.value }
        }
      })
    );
  }

  // Função resposavel por atualizar a posição do gif que está sendo exibido
  onShuffle() {
    const { numberShuffle } = this.state.controls;

    this.setState(
      update(this.state, {
        controls: {
          numberShuffle: { $set: numberShuffle + 1 }
        }
      })
    );
  }

  // Atualiza os gifs da lista de favoritos ao carregar a tela
  onUpdateFavorites() {
    const favorites = localStorage.getItem("favorites");

    if (!favorites) return;

    this.setState(
      update(this.state, {
        data: {
          favorites: { $set: JSON.parse(favorites) }
        }
      })
    );
  }

  // Função responsavel por salvar o gif na lista de favoritos e no localstorage
  onSaveFavorites() {
    const { giphys, controls } = this.state;
    const gif = giphys[controls.numberShuffle]
      ? giphys[controls.numberShuffle].url
      : "";
    const isValid = this._favoriteIsValid(gif);

    if (!isValid) {
      toastr.error("Erro ao favoritar");
      return;
    }

    this._setFavorites("$push", [gif]);
    this._saveInLocalStorage(JSON.stringify(this.state.data.favorites));
  }

  // Função responsavel por setar os itens favoritos
  // O parametro 'method' deixa explicito a ação que
  //  será executado ($push, $merge, $set, $sliced)
  _setFavorites(method, value) {
    this.setState(
      update(this.state, {
        data: {
          favorites: { [method]: value }
        }
      })
    );
  }

  // Função responsavel por validar se o gif a ser adicionado nos favoritos é valido
  _favoriteIsValid(gif) {
    const { favorites } = this.state.data;

    if (favorites.includes(gif) || !gif) {
      return false;
    }

    return true;
  }

  // Função responsavel por remover o gif da lista de favoritos
  //  e atualizar o localstorage sem o gif removido
  onRemoveGif(gif) {
    const { favorites } = this.state.data;

    const fav = favorites.filter(favorite => favorite !== gif);

    this._setFavorites("$set", fav);
    this._saveInLocalStorage(JSON.stringify(this.state.data.favorites));
  }

  // Função responsavel por formatar o array de dados recebido da
  //  API para somente o que será utilizado
  _formatterArray(data) {
    return data.map(current => {
      return {
        url: current.images.original.url,
        id: current.id,
        title: current.title
      };
    });
  }

  // Função que efetua a request de pesquisa de gifs
  onGetGifs() {
    if (!this.state.data.valueInput) return;

    this._setIsLoading(true);

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

  // Função invocada ao terminar com sucesso a request de pesquisa
  _onGetGifsSuccess(values) {
    this._setIsLoading(false);

    this.numberShuffle = 0;

    this.setState({
      giphys:
        values.data.length > 0
          ? this._formatterArray(values.data)
          : toastr.warning("Nenhum GIF encontrado")
    });
  }

  // Função invocada ao terminar com erro a request de pesquisa
  _onGetGifsFail(err) {
    this._setIsLoading(false);
    alert(err);
  }

  // Função recebe dois parametros, a chave em que será gravada
  //  no localstorage e o valor que a chave terá.
  // A chave tem o valor default como 'favorites', mas pode ser
  //  sobrescrita para gravar em outra chave
  _saveInLocalStorage(value, object = "favorites") {
    localStorage.setItem(object, value);
  }

  // Função responsavel por atualizar o estado do carregamento da tela
  _setIsLoading(status) {
    this.setState(
      update(this.state, {
        controls: {
          isLoading: { $set: status }
        }
      })
    );
  }

  // Função para resetar o estado inicial da tela
  onResetState() {
    this.setState({
      ..._getInitialState()
    });
  }
}
