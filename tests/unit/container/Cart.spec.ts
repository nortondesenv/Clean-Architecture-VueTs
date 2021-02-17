import { shallowMount } from '@vue/test-utils';
import Cart from '@/containers/cart/index.vue';
import { IPresenterState } from '@/containers/cart/presenter';
import { ICartItem } from '@/entities/Cart';

describe('Header.vue', () => {
    const cartItem: ICartItem[] = [];

    const presenterCart: IPresenterState = {
        items: cartItem,
        isEmpty: false,
        isCartOpen: false,
    };

    it('Cart propriedade fechada', () => {
        const wrapper = shallowMount(Cart, {
            computed: {
                presenter() {
                    return presenterCart;
                },
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Cart propriedade aberta', () => {
        presenterCart.isCartOpen = true;
        const wrapper = shallowMount(Cart, {
            computed: {
                presenter() {
                    return presenterCart;
                },
            },
        });
        expect(wrapper.html()).toContain('Cart__Divisor--Top');
    });

    it('Cart vazio', () => {
        presenterCart.isEmpty = true;
        const wrapper = shallowMount(Cart, {
            computed: {
                presenter() {
                    return presenterCart;
                },
            },
        });
        expect(wrapper.html()).toContain('cartempty');
    });
});
