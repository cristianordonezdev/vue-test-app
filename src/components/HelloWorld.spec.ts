
import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from './HelloWorld.vue'

it("Should render the msg property", () => {
    const instance = mount(HelloWorld, {
        props: {
            msg: 'My first test'
        }
    })
    expect(instance.html()).toContain('My first test')

    expect(instance.find('h1').text()).toBe('My first test')
    console.log(instance.html())
});