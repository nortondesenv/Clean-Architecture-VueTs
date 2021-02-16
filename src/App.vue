<template>
    <div id="app">
        <Header />
        <Banner />
        <transition name="fade-in-up">
            <router-view />
        </transition>
        <div class="Cart"></div>
    </div>
</template>

<script lang="ts">
import Header from '@/components/Modules/Header.vue';
import Banner from '@/components/Modules/Banner.vue';

export default {
    components: {
        Header,
        Banner,
    },
};
</script>
