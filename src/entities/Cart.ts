import { IProduct } from '@/entities/Product';
import store from '@/store';
import { AddItem, ClearItems, ToggleCart } from '@/store/modules/cart/types';

export interface ICartItem extends IProduct {
    checkoutPrice: number;
    amount: number;
}

export interface ICart {
    items: ICartItem[];
}

export class CartEntity {
    constructor() {}

    async toggleCart() {
        await store.commit(new ToggleCart(store.state.cart.isCartOpen));
    }

    removeItem(index: number) {
        store.state.cart.cart.items.splice(index, 1);
    }

    async addItemToCart(item: IProduct) {
        const checkoutPrice = item.priceMember;
        const amount = 1;
        const cartItem = {
            ...item,
            checkoutPrice,
            amount,
        };
        await store.commit(new AddItem(cartItem));
        alert('Produto adicionado em seu carrinho.');
    }

    async checkOut() {
        // Start operation
        store.commit(new ClearItems());
        alert('Obrigado e volte sempre!');
        return;
    }
}
