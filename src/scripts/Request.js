import unirest from 'unirest';
import { KEYS } from './constants';

export class Request {
    SendRequestGet(route, stringSearch, success, fail) {
        unirest('GET', route)
            .query({
                q: stringSearch,
                "api_key": KEYS.API_KEY
            })
            .headers({
                "x-rapidapi-key": KEYS.API_KEY
            })
            .end(response => {
                if (response.error) {
                    fail(response.error);
                } else {
                    success(response.body);
                }
            })
    }
}