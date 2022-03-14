<template>
  <div id="command_bar_title_icon" style="position: absolute" class="title_icon complete">
    <i class="i-icon-menu"></i>
  </div>
  <div :style="divStyle" />
</template>

<script setup lang="ts">
import { ref, StyleValue } from 'vue';

const showing = ref(true);
const showingDivStyle: StyleValue = { width: '42px', height: '48px', display: 'inline-block' };
const hidingDivStyle: StyleValue = { width: '42px', height: '48px', display: 'none' };
const divStyle = showing.value ? showingDivStyle : hidingDivStyle;
</script>

<style scoped>
@keyframes show {
  0% {
    left: -42px;
    position: absolute;
    overflow: hidden;
  }
  25% {
    left: 0px;
    position: absolute;
    overflow: hidden;
  }
  50% {
    left: 0px;
    position: absolute;
    overflow: hidden;
  }
  75% {
    left: -42px;
    position: absolute;
    overflow: hidden;
  }
  100% {
    left: -42px;
    position: absolute;
    overflow: hidden;
  }
}
#command_bar_title_icon {
  animation-name: show;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
