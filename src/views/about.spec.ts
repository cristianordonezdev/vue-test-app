import { describe, expect, it, vi, beforeEach } from "vitest";
import wrapperFactory from "../utils/wrapperFactory";
import AboutView from "./AboutView.vue";
import TitleComponent from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";

let wrapper = wrapperFactory(AboutView);

describe('Home suites tests', () => {

    beforeEach(() => {
        wrapper = wrapperFactory(AboutView);
    })
    it('should dispatch changeMessage when titleComponent emits on-mounted', () => {{
        const titleComponenetWrapper = wrapper.findComponent(TitleComponent)
        const store = useAppStore()
        titleComponenetWrapper.vm.$emit('on-mounted', 'testis')
        expect(store.changeMessage).toHaveBeenCalledWith('testis')
    }})

    it("should change the title whente titleComponent emit click event", async () => {
        const titleComponenetWrapper = wrapper.findComponent(TitleComponent)
        
        await titleComponenetWrapper.trigger('click')

        expect(titleComponenetWrapper.props('value')).toBe('About !!!')
    })
})
