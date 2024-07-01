import { describe, expect, it, vi } from "vitest";
import wrapperFactory from "../utils/wrapperFactory";
import AboutView from "./AboutView.vue";
import TitleComponent from "../components/TitleComponent.vue";
import { useAppStore } from "../stores/appStore";


describe('Home suites tests', () => {
    it('should dispatch changeMessage when titleComponent emits on-mounted', () => {{
        const wrapper = wrapperFactory(AboutView)

        const titleComponenetWrapper = wrapper.findComponent(TitleComponent)

        const store = useAppStore()

        titleComponenetWrapper.vm.$emit('on-mounted', 'testis')

        expect(store.changeMessage).toHaveBeenCalledWith('testis')
    }})

})
