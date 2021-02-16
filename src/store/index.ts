import Vue from 'vue';
import Vuex from 'vuex';

// modules
import * as product from '@/store/modules/product';
import * as cart from '@/store/modules/cart';

Vue.use(Vuex);

export interface RootState {
    product: product.ProductState;
    cart: cart.CartState;
}

export default new Vuex.Store<RootState>({
    modules: {
        product: product.store,
        cart: cart.store,
    },
});
