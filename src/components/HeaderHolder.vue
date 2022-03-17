<template>
  <div id="header_holder" style="z-index: 2; position: sticky; top: -46px">
    <div id="title_holder" class="complete">
      <div id="title_icon" class="title_icon" @click="handleMenuIconClick">
        <i class="i-icon-menu"></i>
      </div>
      <div id="title_content" style="max-width: 67vw">
        <nobr>学生请假申请:申请人(已完成)</nobr>
      </div>
      <div>
        <div id="title_description" style="display: none">
          流水号:{{ no }},主管部门:公共服务,联系方式:025-58731542
        </div>
        <div id="title_description_short" style="display: block">流水号:{{ no }}</div>
      </div>
    </div>
    <!-- 1.form command bar -->
    <div id="command_holder">
      <div class="clear"></div>
      <menu-icon v-if="!displayHeader.displayHeader" />
      <ul id="form_command_bar" style="display: inline-block; flex-grow: 1">
        <li id="command_menu" class="command_menu btn-group hide">
          <a
            class="command_button_content dropdown-toggle command_button_all"
            href="#"
            data-toggle="dropdown"
          >
            所有操作...
            <span class="caret"></span>
          </a>
          <ul id="command_menu_dropdown" class="dropdown-menu"></ul>
          <span class="alpha40 scroll_tip left" style="display: none">点此区域按钮提交</span>
        </li>
        <li class="no_action">此任务已处理,您无需任何操作</li>
        <li class="tool_button">
          <a id="FormCommandMore" class="tool_button" href="#" @click="handleClick">
            <i class="i-icon-more-vert"></i>
          </a>
        </li>
        <li class="tool_button hide" style="display: none">
          <a id="FormCommandGoTop" class="tool_button" href="#">
            <i class="i-icon-publish"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <bottom-sheet v-if="displayBottomSheet.displayBottomSheet" />
</template>
<script lang="ts" setup>
import useDisplayBottomSheetStore from '../state/displayBottomSheet';
import useDisplayHeaderStore from '../state/displayHeader';
import MenuIcon from './MenuIcon.vue';
import BottomSheet from './BottomSheet.vue';
import useDisplayNavMenuStore from '../state/displayNavMenu';

defineProps<{ no: string }>();
const displayBottomSheet = useDisplayBottomSheetStore();
const displayHeader = useDisplayHeaderStore();
const displayNavMenu = useDisplayNavMenuStore();
window.addEventListener('scroll', () => {
  if (window.scrollY <= 46) {
    displayHeader.show();
  } else {
    displayHeader.hide();
  }
});
const handleClick = (e: MouseEvent) => {
  e.preventDefault();
  window.document.body.style.overflow = 'hidden';
  displayBottomSheet.show();
};
const handleMenuIconClick = () => {
  displayNavMenu.switch();
};
</script>
