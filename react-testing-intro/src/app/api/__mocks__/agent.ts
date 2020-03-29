const fakeImage = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

const photos = {
    jpeg: async () => await new Promise<any>((resolve) => {
        resolve(fakeImage);
    })
};

export default {
    photos
}