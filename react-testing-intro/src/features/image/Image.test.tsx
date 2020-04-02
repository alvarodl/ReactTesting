import { mount, shallow } from "enzyme";
import React from "react";
import Image from "./Image";
import { act, cleanup } from "@testing-library/react";

jest.mock('../../app/api/agent');

afterEach(cleanup);

test('component shallow snapshot', () => {
    const wrapper = shallow(
        <Image />
    );

    expect(wrapper).toMatchSnapshot();
})

it("fetches image and renders it on mount", async (done) => {
    await act(async () => {
        const wrapper = mount(
            <Image />
        );
        setTimeout(() => {
            wrapper.update();
            expect(wrapper.find('img').length).toEqual(1);
            expect(wrapper.find('img').prop('src')).toEqual('data:image/jpg;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==');  
            done();
        });
    });
});