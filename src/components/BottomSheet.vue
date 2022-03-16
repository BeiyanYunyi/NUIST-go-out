<template>
  <div :class="$style.bottom_sheet_overlay" @click="handleClick">
    <div :class="$style.bottom_sheet_container">
      <div style="margin: auto" :class="$style.bottom_sheet_container">
        <div :class="$style.bottom_sheet_content_wrap_div">
          <div style="height: 50vh; text-align: left">
            <ul :class="$style.more_menu_group">
              <li id="moreMenuCompare" :class="$style.more_menu_item">
                <span class="menu_icon_compare">
                  <i class="i-icon-my-library-books"></i>
                </span>
                <span :class="$style.more_menu_text">数据比较</span>
              </li>
            </ul>
            <div :class="$style.more_info">
              <div>流水号：{{ dataStore.data.no }}</div>
              <div>主管部门：公共服务</div>
              <div>联系方式：025-58731542</div>
              <div :class="$style.feedback"><a>填表说明</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDisplayBottomSheetStore from '../state/displayBottomSheet';
import useDataStore from '../state/data';

const dataStore = useDataStore();
const displayBottomSheet = useDisplayBottomSheetStore();
const handleClick = (e: MouseEvent) => {
  e.preventDefault();
  window.document.body.style.overflow = '';
  displayBottomSheet.hide();
};
</script>
<style module>
.bottom_sheet_overlay {
  z-index: 21;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  zoom: 1;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#66000000, endColorstr=#66000000);
  -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#66000000, endColorstr=#66000000)';
}
.bottom_sheet_container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  transition: bottom 0.1s ease-out;
}
.bottom_sheet_content_wrap_div {
  position: relative;
  padding: 15px 10px;
  height: 100%;
  color: #616161;
}
.more_menu_group {
  box-sizing: border-box;
  list-style: none;
  padding: 2px 0 8px 0;
  position: relative;
  font-size: 1.625rem;
  border-bottom: solid 1px #aaaaaa;
}
.more_menu_text {
  margin-left: 20px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  top: -1px;
}
.more_menu_item {
  padding: 10px 0 10px 5px;
  line-height: 1;
}
.more_info {
  font-size: 1rem;
  padding: 8px 4px;
}
.more_info div {
  padding: 5px;
}
.more_info .feedback {
  font-size: 1.1rem;
  text-align: right;
}
</style>
<style scoped>
.i-icon-my-library-books::before {
  content: '\e90e';
}
</style>
