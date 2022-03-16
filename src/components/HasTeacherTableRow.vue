<template>
  <tr>
    <td class="cell2" colspan="2">
      <div style="text-align: center">
        <font size="3">
          请假期间有无任课教师
          <font color="#ff0000">*</font>
        </font>
      </div>
    </td>
    <td class="cell2" colspan="2">
      <div>
        <input
          id="V0_CTRL253"
          type="radio"
          value="1"
          style="font-size: small; font-family: 'PingFang SC', 微软雅黑"
          name="fieldYWRKjs"
          class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled infoplus_fieldChange"
          readonly="true"
          disabled="true"
          :checked="haveClass"
        />
        <label for="V0_CTRL253" class="infoplus_radioLabel">
          <font size="3">有</font>
        </label>
      </div>
      <div>
        <input
          id="V0_CTRL254"
          type="radio"
          value="2"
          style="font-size: small; font-family: 'PingFang SC', 微软雅黑"
          name="fieldYWRKjs"
          class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled checked infoplus_fieldChange"
          readonly="true"
          disabled="true"
          :checked="!haveClass"
        />
        <label for="V0_CTRL254" class="infoplus_radioLabel">
          <font size="3">无</font>
        </label>
      </div>
    </td>
  </tr>
</template>
<script setup lang="ts">
defineProps<{ haveClass: boolean }>();
</script>
