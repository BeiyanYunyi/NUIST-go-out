<template>
  <tr>
    <td class="cell2" colspan="2">
      <div align="center">
        <font size="3">
          是否离宁
          <font color="#ff0000">*</font>
        </font>
      </div>
    </td>
    <td class="cell2" colspan="2">
      <div>
        <input
          id="V0_CTRL242"
          type="radio"
          value="1"
          style="font-size: small; font-family: 'PingFang SC', 微软雅黑"
          name="fieldSFLN"
          class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled infoplus_fieldChange"
          readonly="true"
          disabled="true"
          :checked="leaveNanjing"
        />
        <label for="V0_CTRL242" class="infoplus_radioLabel">
          <font size="3">是</font>
        </label>
      </div>
      <div>
        <input
          id="V0_CTRL243"
          type="radio"
          value="2"
          style="font-size: small; font-family: 'PingFang SC', 微软雅黑"
          name="fieldSFLN"
          class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled checked infoplus_fieldChange"
          readonly="true"
          disabled="true"
          :checked="!leaveNanjing"
        />
        <label for="V0_CTRL243" class="infoplus_radioLabel">
          <font size="3">否</font>
        </label>
      </div>
    </td>
  </tr>
  <tr>
    <td class="cell2" rowspan="3" colspan="2">
      <div align="center">
        <font size="3">
          去向目的地
          <font color="#ff0000">*</font>
        </font>
      </div>
    </td>
    <td class="cell2" colspan="2">
      <div align="center">
        <div
          id="label_a1dedf31-23a1-4cc9-91ba-12f3344b4b1a_Container"
          class="infoplus_labelControlContainer inline"
        >
          <div
            id="label_a1dedf31-23a1-4cc9-91ba-12f3344b4b1a"
            style="font-size: small; font-family: 'PingFang SC', 微软雅黑; width: 100%"
            class="infoplus_control infoplus_labelControl inline"
          >
            {{ province }}
          </div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="cell2" colspan="2">
      <div align="center">
        <div
          id="label_a2d0dc70-97d7-4139-a67d-91f503fa2b41_Container"
          class="infoplus_labelControlContainer inline"
        >
          <div
            id="label_a2d0dc70-97d7-4139-a67d-91f503fa2b41"
            style="font-size: small; font-family: 'PingFang SC', 微软雅黑; width: 100%"
            class="infoplus_control infoplus_labelControl inline"
          >
            {{ city }}
          </div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="cell2" colspan="2">
      <div align="center">
        <div
          id="label_f4125e52-3cc8-419f-b876-d447d8a86df0_Container"
          class="infoplus_labelControlContainer inline"
        >
          <div
            id="label_f4125e52-3cc8-419f-b876-d447d8a86df0"
            style="font-size: small; font-family: 'PingFang SC', 微软雅黑; width: 100%"
            class="infoplus_control infoplus_labelControl inline"
          >
            {{ zone }}
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>
<script setup lang="ts">
defineProps<{ province: string; city: string; zone: string; leaveNanjing: boolean }>();
</script>
