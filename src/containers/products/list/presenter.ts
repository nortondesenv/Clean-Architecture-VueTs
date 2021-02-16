import { IProduct } from '@/entities/Product';
import ProductRepository from '@/repositories/ProductRepository';

export interface IPresenter {
    productRepository: ProductRepository;
}

export interface IPresenterState {
    items: List<IProduct>;
}

export default ({ productRepository }: IPresenter): IPresenterState => {
    return {
        items: productRepository.getItems(),
    };
};
