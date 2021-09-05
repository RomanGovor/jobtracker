import axios from 'axios';
import { defaultPath } from './user';

const jogsApi = {
  getJogs() {
    return axios.get(`${defaultPath}data/sync`).then((response) => response.data.response.jogs);
  },
};

export default jogsApi;
