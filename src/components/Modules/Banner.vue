<template>
    <div class="Banner">
        <div class="Banner__Card">
            <div class="Banner__Card__Content">
                <img
                    v-if="mobileMode"
                    class="Banner__Card__Content__Image"
                    src="@/../public/img/banner-mobile.png"
                    alt="Logo"
                />
                <img
                    v-else
                    class="Banner__Card__Content__Image"
                    src="@/../public/img/banner.png"
                    alt="Logo"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        mobileMode(): Boolean {
            return this.$vssWidth < 470;
        },
    },
});
</script>
