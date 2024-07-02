import { describe, expect, it, vi, beforeEach } from "vitest";
import wrapperFactory from "../utils/wrapperFactory";
import AboutView from "./AboutView.vue";
import TitleComponent from "../components/TitleComponent.vue";
import { useAppStore } from './../stores/appStore.ts';

let wrapper;

describe('Home suites tests', () => {

    beforeEach(() => {
        wrapper = wrapperFactory(AboutView);
    })
    // it('should dispatch changeMessage when titleComponent emits on-mounted', () => {{
    //     const titleComponenetWrapper = wrapper.findComponent(TitleComponent)
    //     const store = useAppStore()
    //     titleComponenetWrapper.vm.$emit('on-mounted', 'testis')
    //     expect(store.changeMessage).toHaveBeenCalledWith('testis')
    // }})

    // it("should change the title whente titleComponent emit click event", async () => {
    //     const titleComponenetWrapper = wrapper.findComponent(TitleComponent)
    //     await titleComponenetWrapper.trigger('click')
    //     expect(titleComponenetWrapper.props('value')).toBe('About !!!')
    // })

    // it("should toggle TitleComponent when the button is clicked", async () => {
    //   const button = wrapper.find('button') 
    //   let titleComponenetWrapper = wrapper.findComponent(TitleComponent)

    //   await button.trigger('click')
    //   expect(titleComponenetWrapper.exists()).toBe(false)

   
    //   await button.trigger('click')
    //   titleComponenetWrapper = wrapper.findComponent(TitleComponent)
    //   expect(titleComponenetWrapper.exists()).toBe(false)

    // })

    it("should emmit new message event when myMessage changes", async () => {
        const store = useAppStore()
        store.myMessage = 'new message'

        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('new-message')).toBeTruthy()
        expect(wrapper.emitted('new-message')).toHaveLength(1)
        expect(wrapper.emitted('new-message')?.[0][0]).toBe('Complete message new message')
    })
})
