<template>
  <tr>
    <td class="cell2" colspan="2">
      <div align="center">
        <font size="3">{{ column1 }}<font v-if="required" size="3" color="#ff0000">*</font></font>
      </div>
    </td>
    <td class="cell2" colspan="2">
      <div :align="alignLeft ? 'left' : 'center'">
        <div class="infoplus_labelControlContainer inline">
          <div
            style="font-size: small; font-family: 'PingFang SC', 微软雅黑; width: 100%"
            class="infoplus_control infoplus_labelControl inline"
          >
            {{ column2 }}
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
defineProps<{ column1: string; column2: string; required?: boolean; alignLeft?: boolean }>();
</script>
