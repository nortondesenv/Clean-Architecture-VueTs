import { MutationTree } from 'vuex';
import { CartState, initialState } from './state';
import { Types, AddItem, SetCheckingOut, ToggleCart } from './types';

export const mutations: MutationTree<CartState> = {
    [Types.ADD_ITEM]: (state, action: AddItem) => {
        const item = action.payload;
        state.cart = {
            items: [...state.cart.items, item],
        };
    },
    [Types.CLEAR_ITEMS]: state => {
        const initial = initialState().cart.items;

        state.cart.items = [...initial];
    },
    [Types.TOGGLE_STATUS_CART]: (state, action: ToggleCart) => {
        state.isCartOpen = !action.payload;
    },
};
