<template>
  <tr>
    <td class="cell2" colspan="2">
      <div style="text-align: center">
        <font size="3">
          {{ name }}
          <font color="#ff0000">*</font>
        </font>
      </div>
    </td>
    <td class="cell2">
      <div style="text-align: center">
        <div
          id="label_7d4f45ab-84e1-48df-9a22-a2d193488886_Container"
          class="infoplus_labelControlContainer inline"
        >
          <div
            id="label_7d4f45ab-84e1-48df-9a22-a2d193488886"
            style="font-size: small; font-family: 'PingFang SC', 微软雅黑; width: 100%"
            class="infoplus_control infoplus_labelControl inline"
          >
            {{ date }}
          </div>
        </div>
      </div>
    </td>
    <td class="cell2">
      <div style="text-align: center">
        <div
          id="label_7df8575f-3814-48d7-a025-57d80fd34dd6_Container"
          class="infoplus_labelControlContainer inline"
        >
          <div
            id="label_7df8575f-3814-48d7-a025-57d80fd34dd6"
            style="font-size: small; font-family: 'PingFang SC', 微软雅黑; width: 100%"
            class="infoplus_control infoplus_labelControl inline"
          >
            {{ time }}
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>
<script setup lang="ts">
defineProps<{ date: string; time: string; name: string }>();
</script>
