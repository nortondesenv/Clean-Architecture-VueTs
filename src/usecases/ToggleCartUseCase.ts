import BaseUseCase from '@/usecases/BaseUseCase';
import ErrorService from '@/services/ErrorService';
import { CartEntity } from '@/entities/Cart';

export interface IToggleCartUseCase {
    cart: CartEntity;
}

export default class ToggleCartUseCase implements BaseUseCase {
    cart: CartEntity;
    errorService: ErrorService;

    constructor({ cart }: IToggleCartUseCase) {
        this.cart = cart;
    }

    async execute() {
        await this.cart.toggleCart();
        return;
    }
}
