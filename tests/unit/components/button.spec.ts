import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Base/Button.vue';

describe('Button.vue', () => {
    it('Passagem de texto como prop', () => {
        const buttonText = 'Adicionar';
        const wrapper = shallowMount(Button, {
            propsData: { text: buttonText },
        });
        const div = wrapper.find('div');
        expect(div.text()).toMatch(buttonText);
    });

    it('Emissão de evento click', async () => {
        const wrapper = shallowMount(Button, {
            propsData: { text: 'teste' },
        });
        await wrapper.trigger('click');
        expect(wrapper.emitted().click).toBeTruthy();
    });
});
