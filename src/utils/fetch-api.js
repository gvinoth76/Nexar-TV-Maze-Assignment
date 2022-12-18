import axios from 'axios';

export function fetchApi(url, payload) {
  return axios({
    method: payload.method,
    url: process.env.REACT_APP_AUTH_URL + url,
    data: payload.body ? payload.body : null,
    params: payload.params ? payload.params : null

  }).then((data) => (data))
    .catch((Error) => {
      return { ...Error }
    }
  );
}