<template>
    <div id="app">
        <Header />
        <Banner />
        <transition name="fade-in-up">
            <router-view />
        </transition>
        <CartContainer />
    </div>
</template>

<script lang="ts">
import Header from '@/components/Modules/Header.vue';
import Banner from '@/components/Modules/Banner.vue';
import CartContainer from '@/containers/cart/index.vue';

export default {
    components: {
        Header,
        Banner,
        CartContainer,
    },
};
</script>
