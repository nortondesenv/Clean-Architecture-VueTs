import { ICart } from '@/entities/Cart';

export interface CartState {
    cart: ICart;
    isCartOpen: boolean;
}

export const initialState = (): CartState => {
    return {
        cart: {
            items: [],
        },
        isCartOpen: false,
    };
};
