<template>
    <div Class="Header">
        <div class="Header__Container">
            <img
                class="Header__Container__Logo"
                src="@/../public/svg/logo.svg"
                alt="Logo"
            />
            <nav class="Header__Container__Nav">
                <ul class="Header__Container__Nav__Ul">
                    <li
                        class="Header__Container__Nav__Ul__Li"
                        v-for="(option, index) in mockMenu"
                        :key="index"
                    >
                        <a class="Header__Container__Nav__Ul__Li__Text">{{
                            option.name
                        }}</a>
                    </li>
                </ul>
            </nav>
            <div class="Header__Cart">
                <a>
                    <span class="Header__Cart__Amount">{{ cartCount }}</span>
                    <img
                        @click="toggleCart()"
                        class="Header__Cart__Img"
                        src="@/../public/svg/cart-icon.svg"
                        alt="Cart"
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            mockMenu: [
                { name: 'Clube' },
                { name: 'Loja' },
                { name: 'Produtores' },
                { name: 'Ofertas' },
                { name: 'Eventos' },
            ],
        };
    },
    props: {
        cartCount: {
            type: Number,
            default: 0,
        },
    },
});
</script>
