<template>
    <div id="app">
        <Header
            :totalPrice="presenter.totalPrice"
            :cartItems="presenter.cartItems"
            :cartCount="presenter.cartCount"
        />
        <Banner></Banner>
        <transition name="fade-in-up">
            <router-view />
        </transition>
        <CartContainer
            :totalPrice="presenter.totalPrice"
            :cartCount="presenter.cartCount"
        ></CartContainer>
    </div>
</template>

<script lang="ts">
import Presenter, { IPresenterState } from './presenter';
import CartRepository from '@/repositories/CartRepository';
import Header from '@/components/Modules/Header.vue';
import Banner from '@/components/Modules/Banner.vue';
import CartContainer from '@/containers/cart/index.vue';

export default {
    components: {
        Header,
        Banner,
        CartContainer,
    },
    computed: {
        presenter(): IPresenterState {
            return Presenter({
                cartRepository: new CartRepository(),
            });
        },
    },
};
</script>
