import BaseUseCase from '@/usecases/BaseUseCase';
import ErrorService from '@/services/ErrorService';
import { CartEntity } from '@/entities/Cart';

export interface IRemoveItemUseCase {
    cart: CartEntity;
    errorService: ErrorService;
}

export default class RemoveItemUseCase implements BaseUseCase {
    cart: CartEntity;
    errorService: ErrorService;

    constructor({ cart, errorService }: IRemoveItemUseCase) {
        this.cart = cart;
        this.errorService = errorService;
    }

    async execute(params) {
        try {
            await this.cart.removeItem(params);
        } catch (e) {
            await this.errorService.handle(e);
        }
        return;
    }
}
