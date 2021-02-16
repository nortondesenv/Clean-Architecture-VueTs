import BaseUseCase from '@/usecases/BaseUseCase';
import ErrorService from '@/services/ErrorService';
import ProductRepository from '@/repositories/ProductRepository';

export interface ILoadContainerUseCase {
    productRepository: ProductRepository;
    errorService: ErrorService;
}

export default class LoadContainerUseCase implements BaseUseCase {
    productRepository: ProductRepository;
    errorService: ErrorService;

    constructor({ productRepository, errorService }: ILoadContainerUseCase) {
        this.productRepository = productRepository;

        this.errorService = errorService;
    }

    async execute() {
        try {
            const data = await this.productRepository.fetchItems();
            this.productRepository.saveItems(data);
        } catch (e) {
            await this.errorService.handle(e);
        }
        return;
    }
}
