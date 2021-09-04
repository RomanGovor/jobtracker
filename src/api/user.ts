import axios from 'axios';
import { getAccessTokenFromStorage } from '../utils/storage';

export const defaultPath = 'https://jogtracker.herokuapp.com/api/v1/auth/';

export const jogtrackerApi = {
  getUserToken(uuid: string) {
    return axios
      .post(`${defaultPath}uuidLogin`, `uuid=${uuid}`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => response.data.response)
      .catch(() => {
        alert('Troubles!!!');
      });
  },
  isTokenValid() {
    return axios
      .get(`${defaultPath}user`)
      .then(() => true)
      .catch(() => false);
  },
  installingAuthorizationConfig(config: any) {
    const token = getAccessTokenFromStorage();

    if (token) {
      config.headers = {
        'Content-type': 'application/json',
      };
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
};

axios.interceptors.request.use(jogtrackerApi.installingAuthorizationConfig);
