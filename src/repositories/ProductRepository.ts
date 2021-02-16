import BaseRepository from '@/repositories/BaseRepository';
import store from '@/store';
import { APIClient } from '@/network/APIClient';
import { ProductAPI } from '@/network/api/Product';
import { StoreItems, ClearItems } from '@/store/modules/product/types';
import { IProduct } from '@/entities/Product';

export default class ProductRepository implements BaseRepository {
    constructor() {}

    async fetchItems() {
        return await APIClient.shared.request(new ProductAPI.GetProducts(null));
    }

    saveItems(params: List<IProduct>) {
        store.commit(new StoreItems(params));
    }

    clearItems() {
        store.commit(new ClearItems());
    }

    getItems(): List<IProduct> {
        return store.state.product.items;
    }
}
