
import { it, expect, vi, describe, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TitleComponent from './TitleComponent.vue'

describe('TitleComponent test suite', () => {

    it('Should increment the count and display it', () => {
        const instance = shallowMount(TitleComponent, {
            props: {
                value: 'My Title'
            }
        });
    
      
        expect(instance.text()).toBe('My Title')
    })
})
