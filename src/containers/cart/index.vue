<template>
    <transition name="fade">
        <div v-if="presenter.isCartOpen">
            <div class="Cart">
                <template>
                    <div class="Cart__Divisor--Top">
                        <CartHeader
                            @toggle-cart="toggleCart()"
                            :cartCount="cartCount"
                        ></CartHeader>
                    </div>
                    <div class="Cart__Divisor--Mid">
                        <CartEmpty v-if="presenter.isEmpty"></CartEmpty>
                        <CartProduct
                            v-else
                            :cartOpen="true"
                            v-for="(item, idx) in presenter.items"
                            :key="idx"
                            :item="item"
                            :index="idx"
                        />
                    </div>
                    <div class="Cart__Divisor--Bot">
                        <CartCheckOut :totalPrice="totalPrice"></CartCheckOut>
                    </div>
                </template>
            </div>
            <div @click="toggleCart()" class="Cart__Overlay"></div>
        </div>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue';

import Presenter, { IPresenter, IPresenterState } from './presenter';
import ToggleCartUseCase, {
    IToggleCartUseCase,
} from '@/usecases/ToggleCartUseCase';

import { CartEntity } from '@/entities/Cart';
import CartRepository from '@/repositories/CartRepository';

// Components
import CartProduct from '@/components/Modules/CartProduct.vue';
import CartHeader from '@/components/Modules/CartHeader.vue';
import CartCheckOut from '@/components/Modules/CartCheckOut.vue';
import CartEmpty from '@/components/Modules/CartEmpty.vue';

export default Vue.extend({
    components: {
        CartProduct,
        CartHeader,
        CartEmpty,
        CartCheckOut,
    },
    props: {
        totalPrice: {
            type: Number,
            default: 0,
        },
        cartCount: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        presenter(): IPresenterState {
            const params: IPresenter = {
                cartRepository: new CartRepository(),
            };
            return Presenter(params);
        },
    },
    methods: {
        async toggleCart() {
            if (!this.presenter.isCartOpen) return;

            const params: IToggleCartUseCase = {
                cart: new CartEntity(),
            };
            await new ToggleCartUseCase(params).execute();
        },
    },
});
</script>
