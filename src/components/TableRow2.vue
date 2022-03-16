<template>
  <tr>
    <td class="cell2">
      <div style="text-align: center">
        <font size="3">{{ column1 }}</font>
      </div>
    </td>
    <td class="cell2" colspan="3">
      <div style="text-align: center">
        <div
          id="label_fdc26bf4-7f5f-446b-843c-e862f839c52c_Container"
          class="infoplus_labelControlContainer inline"
        >
          <div
            id="label_fdc26bf4-7f5f-446b-843c-e862f839c52c"
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
defineProps<{ column1: string; column2: string }>();
</script>
