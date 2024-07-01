import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import HomeView from "./HomeView.vue";


const push = vi.fn();
vi.mock('vue-router', () => ({
    useRouter: () => ({
        push
    })
}))

describe('Home suites tests', () => {
    it('should go the about view when i click on "go to about" button', async () => {{
        const wrapper = shallowMount(HomeView)

        const button = wrapper.find('button')
        await button.trigger('click')

         expect(push).toHaveBeenCalledWith('/about')
    }})
})