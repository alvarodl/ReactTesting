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
        getArrayBuffer: (url: string) => axios.get(url, {responseType: 'arraybuffer'}).then(response => new Buffer(response.data, 'binary').toString('base64')),
    }
};

const photos = {
    jpeg: () => requests.buffer.getArrayBuffer('/image/jpeg')
};

export default {
    photos
}