import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c7e9c.firebaseio.com/'
})

export default instance;