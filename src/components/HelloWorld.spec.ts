
import { it, expect, vi, describe } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from './HelloWorld.vue'
import axios from "axios";
vi.mock('axios');

it("Should render the msg property", () => {
    const instance = shallowMount(HelloWorld, {
        props: {
            msg: 'My first test'
        }
    })
    expect(instance.html()).toContain('My first test')

    expect(instance.find('h1').text()).toBe('My first test')
    console.log(instance.html())
});


// This use whitebox, difficult to maintain, because we are using methods
it("Should incremment count when the increment method is called", () => {
    const instance = shallowMount(HelloWorld);

    instance.vm.increment()
    expect(instance.vm.count).toBe(1)
})


// This use blackbox, better choice to test, because we are testing inputs and outputs. This case
// input is the buttom, and the output is the final result to be expected

it('Should increment the count and display it', async () => {
    const instance = shallowMount(HelloWorld);

    const button = instance.find('button');
    await button.trigger('click');

    expect(button.text()).toBe('count is 1')
})

describe('Hello world test suites', () => {

    // FETCH CALL
    // global.fetch = vi.fn()
    // it('should mmake a fetch call using correct url depending on msg property', async () => {
    //     // Given the helloWorld component is mounted
    //     const instance = shallowMount(HelloWorld)

    //     //when the msg property changes

    //     await instance.setProps({
    //         msg: 'testing'
    //     })

    //     //then we expect that the fecth function is called with good url
    //     expect(fetch).toHaveBeenNthCalledWith(1, 'https://example.com/testing')
    // })

    // AXIOS CALL
    it('Should call axios function with https://httpbin.org/get', async () => {
        // Given the helloWorld component is mounted
        const instance = shallowMount(HelloWorld)

        //when the msg property changes

        await instance.setProps({
            msg: 'testing'
        })

        //then we expect that the fecth function is called with good url
        expect(axios.get).toHaveBeenNthCalledWith(1, 'https://httpbin.org/get')
    })
})