import axios from 'axios';
import { defaultPath } from './user';
import { jogType } from '../types';

const jogsApi = {
  getJogs() {
    return axios.get(`${defaultPath}data/sync`).then((response) => response.data.response.jogs);
  },
  postJog(jog: jogType) {
    return axios
      .post(`${defaultPath}data/jog`, `date=${jog.date}&time=${jog.time}&distance=${jog.distance}`)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  },
};

export default jogsApi;
