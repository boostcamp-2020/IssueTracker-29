import axios from 'axios';
import { BASE_API_URL } from '../../../util/config';

const sendGetRequest = async (path) => {
  try {
    const res = await axios.get(BASE_API_URL + path, {withCredentials: true});
    return await res.data.result;
  } catch(e) {
    return [];
  }
}

export { sendGetRequest };