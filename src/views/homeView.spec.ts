import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi, beforeEach } from "vitest";
import HomeView from "./HomeView.vue";
import wrapperFactory from "../utils/wrapperFactory";
import { useAppStore } from "../stores/appStore";
import TitleComponent from "../components/TitleComponent.vue";

const push = vi.fn();
let wrapper;

vi.mock('vue-router', () => ({
    useRouter: () => ({
        push
    })
}))

describe('Home suites tests', () => {
    beforeEach(() => {
        wrapper = wrapperFactory(HomeView);
    })

    it('should go the about view when i click on "go to about" button', async () => {{
        const wrapper = shallowMount(HomeView)

        const button = wrapper.find('button')
        await button.trigger('click')

         expect(push).toHaveBeenCalledWith('/about')
    }})

    it('should dispatch changeMessagge action when mmyComplete message changes', async () =>{
      const store = useAppStore()  

      await store.$patch({ myMessage: 'some new value' })

      expect(store.changeMessage).toHaveBeenCalledOnce()
    })


    it('should binf correctly the state myMessage with the value property of TitleComponent', async () =>{
        
        const store = useAppStore()
        await store.$patch({ myMessage: 'myMessage CHANGE' })
        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        expect(titleComponentWrapper.props('value')).toBe('myMessage CHANGE')
    })

    it.each([
        {msg: 'test', titleComponentExist: true},
        {msg: '', titleComponentExist: false}
    ])("should render the titleComponent only if the myCompleteMessage is set", async ({msg, titleComponentExist}) => {
        const store = useAppStore()

        await store.$patch({ myMessage: msg })

        const titleComponentWrapper = wrapper.findComponent(TitleComponent)
        expect(titleComponentWrapper.exists()).toBe(titleComponentExist)
    })
})