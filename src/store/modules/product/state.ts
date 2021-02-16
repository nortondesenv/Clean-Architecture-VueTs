import { IProduct } from '@/entities/Product';

export interface ProductState {
    items: List<IProduct> | null;
    item: IProduct | null;
}

export const initialState = (): ProductState => {
    return {
        items: null,
        item: null,
    };
};
