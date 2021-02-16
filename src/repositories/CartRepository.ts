import BaseRepository from '@/repositories/BaseRepository';
import store from '@/store';
import { ICartItem } from '@/entities/Cart';

export default class CartRepository implements BaseRepository {
    constructor() {}

    getItems(): ICartItem[] {
        return store.state.cart.cart.items;
    }

    countCart(): number {
        return store.state.cart.cart.items.length;
    }

    isCartOpen(): boolean {
        return store.state.cart.isCartOpen;
    }
}
