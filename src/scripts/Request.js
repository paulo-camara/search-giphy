import axios from "axios";
import { KEYS } from "./constants";

export class Request {
  //Método recebe a rota o objeto de queryString e duas funções (succeso e erro)
  SendRequestGet(route, stringSearch, success, fail) {
    axios
      .get(route, {
        params: {
          ...stringSearch,
          api_key: KEYS.API_KEY
        }
      })
      .then(res => success(res.data))
      .catch(err => fail(err));
  }
}
