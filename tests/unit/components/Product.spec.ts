import { shallowMount } from '@vue/test-utils';
import Product from '@/components/modules/Product.vue';
import { IProduct } from '@/entities/Product';

describe('Product.vue', () => {
    const product: IProduct = {
        available: true,
        image: 'testeImage.png',
        name: 'testProduct',
        priceMember: 5.55,
        pricePromotional: 5.55,
        priceStock: 5.55,
    };

    it('Renderiza Product disponivel', () => {
        const wrapper = shallowMount(Product, {
            propsData: { product: product },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Renderiza Product não disponivel', () => {
        product.available = false;
        const wrapper = shallowMount(Product, {
            propsData: { product: product },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
