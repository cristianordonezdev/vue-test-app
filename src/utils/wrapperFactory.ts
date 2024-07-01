import { createTestingPinia } from "@pinia/testing";
import { shallowMount } from "@vue/test-utils";
import { vi } from 'vitest'

const wrapperFactory = (component) => shallowMount(component, {
    global: {
        plugins: [createTestingPinia(
            {createSpy: vi.fn,}
        )]
    }
})

export default wrapperFactory;