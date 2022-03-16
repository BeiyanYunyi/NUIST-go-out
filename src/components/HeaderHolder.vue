<template>
  <div id="header_holder" :style="{ top: `${top}px`, zIndex: 20 }">
    <div id="title_holder" class="complete">
      <div id="title_icon" class="title_icon">
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
      <div id="command_bar_title_icon" class="title_icon complete" style="display: none">
        <i class="i-icon-menu"></i>
      </div>
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
          <a id="FormCommandMore" class="tool_button" href="#">
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
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import useDisplayHeaderStore from '../state/displayHeader';
import MenuIcon from './MenuIcon.vue';

const top = ref(0);
const displayHeader = useDisplayHeaderStore();
window.addEventListener('scroll', () => {
  if (window.scrollY <= 46) {
    displayHeader.show();
    top.value = -window.scrollY;
  } else {
    displayHeader.hide();
    top.value = -46;
  }
});

defineProps<{ no: string }>();
</script>
