<template>
  <tr>
    <td class="cell2" colspan="4">
      <div align="left">
        <font color="#ff0000">
          说明：进出校验证时间须在离校具体时间~返校具体时间之间；否则验证不通过。
        </font>
      </div>
    </td>
  </tr>
  <tr>
    <td class="cell2" colspan="2">
      <div style="text-align: center">
        <font size="3">附&emsp;&emsp;件</font>
      </div>
    </td>
    <td class="cell2" colspan="2">
      <div id="groupFJList" name="groupFJList" class="infoplus_repeatParentElement">
        <div class="xdRepeatingSection xdRepeating infoplus_repeatingSection" style="width: 100%">
          <div widgetindex="0" style="margin-bottom: 0px; width: 100%" align="left">
            <div align="left" style="padding: 5px">
              <div
                id="file_1e614a11-1b90-48f2-9c3b-22213ea08bf7"
                style="font-size: small; font-family: 'PingFang SC', 微软雅黑; width: 100%"
                class="infoplus_control infoplus_fileControl"
              >
                <div class="display" style="display: inline-flex; max-width: 100%">
                  <a
                    target="_blank"
                    href="http://e-office.nuist.edu.cn/file/87fa69c7-fa5a-459d-aa35-d5c666d09420"
                    :title="`${uploadFileName} 创建于${applyDate} 11:45:14`"
                    style="
                      display: inline-flex;
                      flex-wrap: nowrap;
                      max-width: 100%;
                      text-decoration: none;
                    "
                  >
                    <div
                      class="uploadFileName"
                      style="flex-grow: 1; flex-shrink: 1; text-overflow: ellipsis"
                    >
                      {{ uploadFileName }}
                    </div>
                    <div class="uploadFileSize" style="flex-grow: 1; flex-shrink: 1">(427.8K)</div>
                  </a>
                  <div
                    id="d94e8a5d-0aed-49c1-b617-e6da2a245577"
                    class="infoplus_popMenu top left"
                    style="display: none"
                  >
                    <ul class="horz">
                      <li
                        id="d94e8a5d-0aed-49c1-b617-e6da2a245577_preview"
                        class="infoplus_popMenuItem horz"
                        style="display: none"
                      >
                        <span class="infoplus_popMenuItemIcon">
                          <i class="i-icon-search2"></i>
                        </span>
                        <span class="infoplus_popMenuItemText">预览</span>
                      </li>
                      <li
                        id="d94e8a5d-0aed-49c1-b617-e6da2a245577_download"
                        class="infoplus_popMenuItem horz"
                      >
                        <a
                          id="d94e8a5d-0aed-49c1-b617-e6da2a245577_download_link"
                          href="http://e-office.nuist.edu.cn/file/87fa69c7-fa5a-459d-aa35-d5c666d09420"
                          target="_blank"
                        >
                          <span class="infoplus_popMenuItemIcon">
                            <i class="i-icon-cloud-download"></i>
                          </span>
                          <span class="infoplus_popMenuItemText">下载</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="infoplus_repeatSectionExpandButton infoplus_repeatSection_shrink opacity5"
            title="收起"
            style="display: none"
          ></div>
        </div>
      </div>
    </td>
  </tr>
</template>
<script setup lang="ts">
defineProps<{ uploadFileName: string; applyDate: string }>();
</script>
