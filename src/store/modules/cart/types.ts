import { ICartItem } from '@/entities/Cart';

export enum Types {
    ADD_ITEM = 'cart/add_item',
    CLEAR_ITEMS = 'cart/clear_items',
    SET_CHECKING_OUT = 'cart/set_checking_out',
    TOGGLE_STATUS_CART = 'cart/toggle-status-cart',
}

export class AddItem implements FluxStandardAction {
    type = Types.ADD_ITEM;
    constructor(public payload: ICartItem) {}
}

export class SetCheckingOut implements FluxStandardAction {
    type = Types.SET_CHECKING_OUT;
    constructor(public payload: boolean) {}
}

export class ClearItems implements FluxStandardAction {
    type = Types.CLEAR_ITEMS;
}

export class ToggleCart implements FluxStandardAction {
    type = Types.TOGGLE_STATUS_CART;
    constructor(public payload: boolean) {}
}
