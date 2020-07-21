import axios from 'axios';

// Default API will be your root
// const baseURL = process.env.URL;

const api_key= 'here your api key will come'

class Api {
    static headers(headersparams) {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': api_key,
            ...headersparams,
        };
    }
    static get(route, key = null) {
        return this.request(route, null, 'GET', key);
    }

    static put(route, params, key = null) {
        return this.request(route, params, 'PUT', key);
    }

    static post(route, params, key) {
        return this.request(route, params, 'POST', key);
    }

    static delete(route, params, key = null) {
        return this.request(route, params, 'DELETE', key);
    }

    static patch(route, params, key = null) {
        return this.request(route, params, 'PATCH', key);
    }

    static request(route, params, verb, key) {
        if (!!route.match('https://')) {
            const url = `${route}`;
            const options = { method: verb, params };
            return axios(url, options);
        } else {
            // const host = baseURL;
            // const url = `${host}${route}`;
            const url = `${route}`;
            const options = { method: verb, data: params };
            let keys = { ...key, Authorization: localStorage.getItem('Authorization') };
            options.headers = Api.headers(keys);
            return axios(url);
        }
    }
}
export default Api;
