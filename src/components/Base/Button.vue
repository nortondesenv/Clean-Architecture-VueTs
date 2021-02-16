<template>
    <button
        :class="[
            typeClassName,
            sizeClassName,
            marginClassName,
            { '--autoWidth': autoWidth },
        ]"
        :type="nativeType"
        :disabled="disabled"
        class="Button"
        @click="handleClick"
    >
        <div class="Button__Text">{{ text }}</div>
    </button>
</template>

<script lang="ts">
import Vue from 'vue';

export enum Type {
    Primary = 'Primary',
    Secondary = 'Secundary',
}

export enum Margin {
    None = 'Margin-None',
    Small = 'Margin-Small',
}

export enum Size {
    Small = 'Small',
    Midium = 'Midium',
    Large = 'Large',
}

export default Vue.extend({
    props: {
        nativeType: {
            type: String,
            default: 'button',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: Type.Primary,
        },
        size: {
            type: String,
            default: Size.Midium,
        },
        autoWidth: {
            type: Boolean,
            default: false,
        },
        margin: {
            type: String,
            default: Margin.None,
        },
        text: {
            type: String,
            required: true,
        },
    },
    computed: {
        typeClassName: function() {
            return `Button--${this.type}`;
        },
        sizeClassName: function() {
            return `Button--${this.size}`;
        },
        marginClassName: function() {
            return `Button--${this.margin}`;
        },
    },
    methods: {
        handleClick(): void {
            this.$emit('click');
        },
    },
});
</script>
