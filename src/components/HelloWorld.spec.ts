
import { it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from './HelloWorld.vue'

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