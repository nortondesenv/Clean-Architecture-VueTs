import { shallowMount } from '@vue/test-utils';
import Header from '@/components/modules/Header.vue';

describe('Header.vue', () => {
    it('Renderiza lista de navegação do menu', () => {
        const itemMenu = [
            { name: 'Clube' },
            { name: 'Loja' },
            { name: 'Produtores' },
            { name: 'Ofertas' },
            { name: 'Eventos' },
        ];
        const wrapper = shallowMount(Header);
        wrapper.setData({ mockMenu: itemMenu });
        expect(wrapper.findAll('li')).toHaveLength(itemMenu.length);
    });

    it('Quantidade no carrinho de acordo com prop', () => {
        const cartCountItem = 5;
        const wrapper = shallowMount(Header, {
            propsData: { cartCount: cartCountItem },
        });
        const span = wrapper.find('span');
        expect(span.text()).toBe('5');
    });
});
