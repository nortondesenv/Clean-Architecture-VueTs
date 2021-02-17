import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Base/Button.vue';

describe('Button.vue', () => {
    const buttonText = 'Unit';
    const wrapper = shallowMount(Button, {
        propsData: { text: buttonText, disabled: false },
    });
    it('Passagem de texto como prop', () => {
        const div = wrapper.find('div');
        expect(div.text()).toMatch(buttonText);
    });

    it('Emissão de evento click', () => {
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toBeTruthy();
    });

    it('Emissão de evento click bloqueado', async () => {
        const wrapper = shallowMount(Button, {
            propsData: { text: buttonText, disabled: true },
        });

        await wrapper.trigger('click');
        expect(wrapper.emitted().click).toBeFalsy();
    });
});
