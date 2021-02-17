import { shallowMount } from '@vue/test-utils';
import CartCheckOut from '@/components/modules/CartCheckOut.vue';

describe('CartCheckOut.vue', () => {
    it('Preço total retornado por computed', () => {
        const wrapper = shallowMount(CartCheckOut, {
            propsData: { totalPrice: 99 },
        });
        expect(wrapper.html()).toContain('R$&nbsp;99,00');
    });
});
