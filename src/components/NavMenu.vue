<template>
  <transition name="navMenu">
    <div
      v-show="displayNavMenu.displayNavMenu"
      id="nav_menu"
      :class="{
        navMenuWithHeader: displayHeader.displayHeader,
        navMenuWithoutHeader: !displayHeader.displayHeader,
      }"
      style="z-index: 22; position: fixed"
    >
      <ul class="nav_menu_group">
        <li id="nav_menu_history">
          <span class="menu_icon menu_icon_history">
            <i class="i-icon-history"></i>
          </span>
          <span class="menu_text">历史</span>
        </li>
        <li id="nav_menu_save">
          <span class="menu_icon menu_icon_save disabled">
            <i class="i-icon-save"></i>
          </span>
          <span class="menu_text">保存</span>
        </li>
        <li id="nav_menu_print">
          <span class="menu_icon menu_icon_print disabled">
            <i class="i-icon-print"></i>
          </span>
          <span class="menu_text">打印</span>
        </li>
        <li id="nav_menu_download">
          <span class="menu_icon menu_icon_download disabled">
            <i class="i-icon-cloud-download"></i>
          </span>
          <span class="menu_text">下载</span>
        </li>
        <li id="nav_menu_instruction">
          <span class="menu_icon menu_icon_instruction">
            <i class="i-icon-local-library"></i>
          </span>
          <span class="menu_text">填表说明</span>
        </li>
      </ul>
      <ul class="nav_menu_group">
        <li class="nav_menu_line"></li>
      </ul>
      <ul class="nav_menu_group">
        <li id="nav_menu_help">
          <span class="menu_icon menu_icon_help">
            <i class="i-icon-help"></i>
          </span>
          <span class="menu_text">帮助</span>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import useDisplayHeaderStore from '../state/displayHeader';
import useDisplayNavMenuStore from '../state/displayNavMenu';

const displayHeader = useDisplayHeaderStore();
const displayNavMenu = useDisplayNavMenuStore();
</script>
<style scoped>
.navMenuWithHeader {
  top: 94px;
}
.navMenuWithoutHeader {
  top: 48px;
}
@keyframes show {
  0% {
    left: -158px;
    position: fixed;
    overflow: hidden;
  }
  100% {
    left: 0px;
    position: fixed;
    overflow: hidden;
  }
}
@keyframes hide {
  0% {
    left: 0px;
    position: fixed;
    overflow: hidden;
  }
  100% {
    left: -158px;
    position: fixed;
    overflow: hidden;
  }
}
.navMenu-enter-active {
  animation-name: show;
  animation-duration: 0.25s;
  animation-iteration-count: 1;
}
.navMenu-leave-active {
  animation-name: hide;
  animation-duration: 0.1s;
  animation-iteration-count: 1;
}
#nav_menu {
  height: 100%;
  width: 158px;
  left: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.18);
  box-shadow: 0 0 4px #0000001a, 0 4px 8px #0000002e;
  filter: progid:DXImageTransform.Microsoft.Shadow(color=#cccccc,direction=90,strength=4);
  overflow-y: auto;
  padding-top: 8px;
}
#nav_menu li {
  list-style: none;
  line-height: 1.8rem;
  text-align: left;
  padding: 6px 0 1px 10px;
  color: #858585;
  cursor: pointer;
}
#nav_menu li.nav_menu_line {
  height: 1px;
  background-color: #e5e5e5;
  padding: 0;
  line-height: 1px;
}
#nav_menu .menu_icon {
  font-size: 20px;
}
#nav_menu .menu_icon.disabled {
  color: #acacac;
}
#nav_menu .menu_icon_history {
  color: #4caf50;
}
#nav_menu .menu_icon_help,
#nav_menu .menu_icon_save {
  color: #eead1d;
}
#nav_menu .menu_icon_download {
  color: #039be5;
}
#nav_menu .menu_text {
  margin-left: 10px;
  vertical-align: top;
  display: inline-block;
  overflow: hidden;
  width: 100px;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 700;
}
#nav_menu li:hover {
  background-color: #f8f8f8;
}
.nav_menu_group {
  box-sizing: border-box;
  list-style: none;
  padding: 2px 0;
  position: relative;
}
.nav_menu_line {
  height: 1px;
  background-color: #e5e5e5;
}
</style>
