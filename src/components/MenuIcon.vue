<template>
  <div
    id="command_bar_title_icon"
    style="position: absolute"
    class="title_icon complete"
    :class="$style.command_bar_title_icon"
    @click="handleClick"
  >
    <i class="i-icon-menu"></i>
  </div>
  <div :style="divStyle" />
</template>

<script setup lang="ts">
import { ref, StyleValue } from 'vue';
import useDisplayNavMenuStore from '../state/displayNavMenu';

const showing = ref(true);
const showingDivStyle: StyleValue = { width: '42px', height: '48px', display: 'inline-block' };
const hidingDivStyle: StyleValue = { width: '42px', height: '48px', display: 'none' };
const divStyle = showing.value ? showingDivStyle : hidingDivStyle;
const displayNavMenu = useDisplayNavMenuStore();
const handleClick = () => {
  displayNavMenu.switch();
};
</script>

<style module>
@keyframes show {
  0% {
    left: -42px;
    position: absolute;
    overflow: hidden;
  }
  100% {
    left: 0px;
    position: absolute;
    overflow: hidden;
  }
}
.command_bar_title_icon {
  animation-name: show;
  animation-duration: 0.25s;
  animation-iteration-count: 1;
}
</style>
