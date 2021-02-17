import { shallowMount } from '@vue/test-utils';
import CartProduct from '@/components/modules/CartProduct.vue';

describe('Header.vue', () => {
    it('Renderiza lista de navegação do menu', () => {
        const product: any = {
            available: true,
            image: 'testeImage.png',
            name: 'testProduct',
            priceMember: 5.55,
            pricePromotional: 5.55,
            priceStock: 5.55,
            checkoutPrice: 5.55,
            amount: 55,
        };
        const wrapper = shallowMount(CartProduct, {
            propsData: { item: product },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
