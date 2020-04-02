import agent from '../agent';
import axiosMock from '../../../__mocks__/axios';
import { cleanup } from '@testing-library/react';
import { Base64ToArrayBuffer } from '../../helpers/arrayBufferHelpers';

afterEach(cleanup);

it('call axios and returns an image', async () => {
    const base64encoded = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    axiosMock.get.mockImplementationOnce(() =>
        Promise.resolve(
            { data: Base64ToArrayBuffer(base64encoded) } 
        )
    );

    const jpeg = await agent.Photos.jpeg();

    expect(jpeg).toBe(base64encoded);
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
});
