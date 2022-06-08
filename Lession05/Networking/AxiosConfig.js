import axios from 'axios';
import {Alert} from 'react-native'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if ((error.code = 'ERR_NETWORK')) {
      Alert.alert('Network Error', 'Please check your internet connection')
    }
    return Promise.reject(error);
  },
);

export default instance;
