import axios from 'axios';

axios.defaults.baseURL = "https://httpbin.org";

const requests = {
    default: {
        get: (url: string) => axios.get(url).then((response) => response.data),
        post: (url: string, body: {}) => axios.post(url, body).then((response) => response.data),
        put: (url:string, body: {}) => axios.put(url, body).then((response) => response.data),
        delete: (url:string) => axios.delete(url).then((response) => response.data),
    },
    buffer: {
        get: (url: string) => axios.get(url, {responseType: 'arraybuffer'}).then(response => Buffer.from(response.data, 'binary').toString('base64')),
    }
};

const Photos = {
    jpeg: () => requests.buffer.get('/image/jpeg')
};

export default {
    Photos
};