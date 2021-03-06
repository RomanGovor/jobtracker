import axios from 'axios';
import { getAccessTokenFromStorage } from '../utils/storage';

export const defaultPath = 'https://jogtracker.herokuapp.com/api/v1/';

export const userApi = {
  getUserToken(uuid: string) {
    return axios
      .post(`${defaultPath}auth/uuidLogin`, `uuid=${uuid}`, {
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
      .get(`${defaultPath}auth/user`)
      .then(() => true)
      .catch(() => false);
  },
  installingAuthorizationConfig(config: any) {
    const token = getAccessTokenFromStorage();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
};

axios.interceptors.request.use(userApi.installingAuthorizationConfig);
