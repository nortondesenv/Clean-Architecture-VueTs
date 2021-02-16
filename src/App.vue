<template>
    <div id="app">
        <Header />
        <transition name="fade-in-up">
            <router-view />
        </transition>
        <div class="Cart"></div>
    </div>
</template>

<script lang="ts">
import Header from '@/components/Modules/Header.vue';

export default {
    components: {
        Header,
    },
};
</script>
