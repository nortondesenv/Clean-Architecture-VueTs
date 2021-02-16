<template>
  <div id="app">
    <div class="Header"></div>
    <transition name="fade-in-up">
      <router-view />
    </transition>
    <div class="Cart"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
