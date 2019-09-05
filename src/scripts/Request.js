import axios from "axios";
import { KEYS } from "./constants";

export class Request {
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
