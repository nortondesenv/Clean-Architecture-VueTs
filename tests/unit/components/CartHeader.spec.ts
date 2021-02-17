import { shallowMount } from '@vue/test-utils';
import CartHeader from '@/components/Modules/CartHeader.vue';

describe('CartHeader.vue', () => {
    it('Emissão de evento click', async () => {
        const wrapper = shallowMount(CartHeader);
        await wrapper.find('img').trigger('click');

        expect(wrapper.emitted().toggleCart).toBeTruthy();
    });

    it('Quantidade na Wine-Box de acordo com prop', () => {
        const cartCountItem = 5;
        const wrapper = shallowMount(CartHeader, {
            propsData: { cartCount: cartCountItem },
        });
        const span = wrapper.find('p');
        expect(span.text()).toBe('Wine-Box(5)');
    });
});
