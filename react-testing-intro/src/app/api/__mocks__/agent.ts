const base64image = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

const Photos = {
    jpeg: async () => await new Promise<any>((resolve) => {
        resolve(base64image);
    })
};

export default {
    Photos,
}