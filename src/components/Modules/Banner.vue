<template>
    <div class="Banner">
        <div class="Banner__Card">
            <div class="Banner__Card__Content">
                <img
                    v-if="mobileMode"
                    class="Banner__Card__Content__Image"
                    src="@/../public/img/banner-mobile.png"
                    alt="Banner Mobile"
                />
                <img
                    v-else
                    class="Banner__Card__Content__Image"
                    src="@/../public/img/banner.png"
                    alt="Banner"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
const MIN_SIZE_MOBILE: Number = 470;

import Vue from 'vue';

export default Vue.extend({
    computed: {
        mobileMode(): Boolean {
            return this.$vssWidth < MIN_SIZE_MOBILE;
        },
    },
});
</script>
