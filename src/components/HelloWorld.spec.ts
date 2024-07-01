
import { it, expect, vi, describe, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from './HelloWorld.vue'
import axios from "axios";
import { createTestingPinia } from '@pinia/testing'
import { useAppStore } from '../stores/appStore' // Asegúrate de ajustar la ruta
import { setActivePinia, createPinia } from "pinia";
import TitleComponent from "./TitleComponent.vue";
import { propsInterface } from "../interfaces/test_interfaces";

vi.mock('axios');
const create_wrapper = (props?: propsInterface) => shallowMount(HelloWorld, {props})
    
// it("Should render the msg property", () => {
//     const instance = shallowMount(HelloWorld, {
//         props: {
//             msg: 'My first test'
//         }
//     })
//     expect(instance.html()).toContain('My first test')

//     expect(instance.find('h1').text()).toBe('My first test')
//     console.log(instance.html())
// });


// // This use whitebox, difficult to maintain, because we are using methods
// it("Should incremment count when the increment method is called", () => {
//     const instance = shallowMount(HelloWorld);

//     instance.vm.increment()
//     expect(instance.vm.count).toBe(1)
// })


// // This use blackbox, better choice to test, because we are testing inputs and outputs. This case
// // input is the buttom, and the output is the final result to be expected

// it('Should increment the count and display it', async () => {
//     const instance = shallowMount(HelloWorld);

//     const button = instance.find('button');
//     await button.trigger('click');

//     expect(button.text()).toBe('count is 1')
// })

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
    // it('Should call axios function with https://httpbin.org/get', async () => {
    //     // Given the helloWorld component is mounted
    //     const instance = shallowMount(HelloWorld)

    //     //when the msg property changes

    //     await instance.setProps({
    //         msg: 'testing'
    //     })

    //     //then we expect that the fecth function is called with good url
    //     expect(axios.get).toHaveBeenNthCalledWith(1, 'https://httpbin.org/get')
    // })
    beforeEach(() => {
        setActivePinia(createPinia())

    })
    it('should dispatch change message with test, if msg property changes as test', async () => {
        const wrapper = shallowMount(HelloWorld, {
            global: {
                plugins: [createTestingPinia(
                    {createSpy: vi.fn,}
                )]
            }
        })

        const store = useAppStore()

        await wrapper.setProps({
            msg: 'test'
        })

        expect(store.changeMessage).toHaveBeenNthCalledWith(1, 'test')
    })

    it('should bind the msg property with a prefix (my Title:) to titleComponent', () => {
        const wrapper = shallowMount(HelloWorld, {
            props: {
                msg: 'First section'
            }
        })
        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        expect(titleComponentWrapper.props('value')).toBe('My Title: First section')
    })

    // it.each([
    //     {msg: 'Message from prop to rendering', titleComponentExist: true},
    //     {msg: undefined, titleComponentExist: false}
    // ])('msg: $msg --> titleComponentExits: $titleComponentExist', ({msg, titleComponentExist}) => {
    //     const wrapper = shallowMount(HelloWorld, {
    //         props: {
    //             msg,
    //         }
    //     })

    //     const titleComponentWrapper = wrapper.findComponent(TitleComponent)

    //     expect(titleComponentWrapper.exists()).toBe(titleComponentExist);
    // })

    it.each([
        {msg: 'Message from prop to rendering', successClassExists: false},
        {msg: undefined, successClassExists: true},
        {msg: '', successClassExists: true}
    ])('msg: $msg --> successClassExists: $successClassExists', ({msg, successClassExists}) => {
        const wrapper = shallowMount(HelloWorld, {
            props: {
                msg,
            }
        })

        const card_element_wrapper = wrapper.find<HTMLDivElement>('.card-success')

        expect(card_element_wrapper.exists()).toBe(successClassExists);
    })


    it("should emit cad-clicked when the card is clicked", async () => {
        const wrapper = create_wrapper();

        const card = wrapper.find('.card')
        await card.trigger('click')

        expect(wrapper.emitted('card-clicked')).toBeTruthy()
    })

    it('should emit up event when title component emit on-mounted', () => {
        const wrapper = create_wrapper();

        const titleComponentWrapper = wrapper.findComponent(TitleComponent)
        titleComponentWrapper.vm.$emit('on-mounted')

        expect(wrapper.emitted('up')).toBeTruthy()

        expect(wrapper.emitted('up')).toHaveLength(1)

        // Verify if parammeter of prop is correct 
        expect(wrapper.emitted('up')?.[0][0]).toBe(1)

    })
})