<template>
    <div class="Cart__Header">
        <img
            @click.prevent="toggleCart()"
            class="Cart__Header__Arrow"
            src="@/../public/svg/arrow-cart.svg"
        />
        <p class="Cart__Header__Box Cart__Header__Box--Text">
            Wine-Box({{ cartCount }})
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        cartCount: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        toggleCart() {
            this.$emit('toggle-cart');
        },
    },
});
</script>
