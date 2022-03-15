<template>
  <div id="help_content"></div>
  <div id="div_loader" style="display: none">
    <div id="div_loader_content">
      <div id="div_loader_text">
        <span class="content">加载完成(100%)</span>
      </div>
      <div id="div_loader_progress" style="height: 0px; opacity: 0.5">
        <div id="div_loader_progress_percent" style="right: 0%"></div>
      </div>
    </div>
  </div>

  <div id="div_render_container" style="display: block">
    <form id="renderForm">
      <div id="div_content" class="div_content">
        <div id="header_holder" style="top: 0px; z-index: 20">
          <div id="title_holder" class="complete">
            <div id="title_icon" class="title_icon">
              <i class="i-icon-menu"></i>
            </div>
            <div id="title_content" style="max-width: 67vw">
              <nobr>学生请假申请:申请人(已完成)</nobr>
            </div>
            <div>
              <div id="title_description" style="display: none">
                流水号:{{ data.no }},主管部门:公共服务,联系方式:025-58731542
              </div>
              <div id="title_description_short" style="display: block">流水号:{{ data.no }}</div>
            </div>
          </div>
          <!-- 1.form command bar -->
          <div id="command_holder">
            <div class="clear"></div>
            <div id="command_bar_title_icon" class="title_icon complete" style="display: none">
              <i class="i-icon-menu"></i>
            </div>
            <menu-icon />
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
        <div id="renderContent_holder">
          <div id="nav_menu" style="display: none; top: 94px">
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
          <div
            id="form_milestone_holder"
            class="form_milestone_holder round-corner"
            style="visibility: visible; width: 100vw"
          >
            <div class="form_milestone_holder_wrap_outer shadow round-corner" style="width: 100vw">
              <div class="form_milestone_holder_wrap_inner">
                <ul class="form_milestone_view" style="width: 100vw; display: flex">
                  <li
                    class="form_milestone_step green first"
                    style="flex-grow: 26; padding-left: 10px"
                  >
                    <div class="floater green singleLine"></div>
                    <div class="content">
                      <div class="content_name">填写申请</div>
                    </div>
                  </li>
                  <li class="form_milestone_step_arrow_li green">
                    <div class="form_milestone_step_arrow_wrap">
                      <div class="form_milestone_step_arrow green"></div>
                      <div class="form_milestone_step_arrow white"></div>
                    </div>
                  </li>
                  <li class="form_milestone_step green" style="flex-grow: 30">
                    <div class="floater green singleLine"></div>
                    <div class="content">
                      <div class="content_name">辅导员审核</div>
                    </div>
                  </li>
                  <li class="form_milestone_step_arrow_li green">
                    <div class="form_milestone_step_arrow_wrap">
                      <div class="form_milestone_step_arrow green"></div>
                      <div class="form_milestone_step_arrow white"></div>
                    </div>
                  </li>
                  <li class="form_milestone_step green last" style="flex-grow: 30">
                    <div class="floater green singleLine"></div>
                    <div class="content">
                      <div class="content_name">完成（审核通过）</div>
                    </div>
                  </li>
                </ul>
                <div class="clear" style="height: 10px"></div>
              </div>
            </div>
          </div>
          <!-- 2.the holder for form renderer -->
          <div id="render_holder">
            <div id="form_holder" style="width: 100vw; display: block">
              <div class="infoplus_view_wrap_outer">
                <div class="infoplus_view_wrap_inner">
                  <div id="infoplus_view_2138_0" class="infoplus_view">
                    <div align="center">
                      <table
                        style="
                          border-top-style: none;
                          word-wrap: break-word;
                          border-left-style: none;
                          width: 93.75vw;
                          border-collapse: collapse;
                          table-layout: fixed;
                          border-bottom-style: none;
                          border-right-style: none;
                        "
                        class="xdFormLayout"
                      >
                        <colgroup>
                          <col style="width: 93.75vw" />
                        </colgroup>
                        <tbody>
                          <tr class="xdTitleRow">
                            <td class="xdTitleCell cell1">
                              <h1 align="center">
                                <strong>
                                  <font color="#0070c0">学生请假申请</font>
                                </strong>
                              </h1>
                              <div align="center">&nbsp;</div>
                            </td>
                          </tr>
                          <tr class="xdTableContentRow">
                            <td
                              class="xdTableContentCell"
                              style="
                                border-top: #000000 1pt;
                                border-right: #bfbfbf 1pt;
                                border-bottom: #bfbfbf 1pt;
                                padding-bottom: 10px;
                                padding-top: 10px;
                                padding-left: 10px;
                                border-left: #bfbfbf 1pt;
                                padding-right: 10px;
                              "
                              valign="top"
                            >
                              <div align="center">
                                <table
                                  style="
                                    word-wrap: break-word;
                                    border-top: medium none;
                                    border-right: medium none;
                                    width: 88vw;
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-bottom: medium none;
                                    border-left: medium none;
                                  "
                                  class="xdLayout"
                                  bordercolor="buttontext"
                                  border="1"
                                >
                                  <colgroup>
                                    <col style="width: 35vw" />
                                    <col style="width: 3vw" />
                                    <col style="width: 25vw" />
                                    <col style="width: 25vw" />
                                  </colgroup>
                                  <tbody>
                                    <table-row column1="申请日期" :column2="data.applyDate" />
                                    <table-row
                                      column1="学&emsp;&emsp;号"
                                      :column2="data.stuNumber"
                                    />
                                    <table-row column1="姓&emsp;&emsp;名" :column2="data.stuName" />
                                    <table-row
                                      column1="性&emsp;&emsp;别"
                                      :column2="data.gender"
                                      required
                                    />
                                    <table-row
                                      column1="联系方式"
                                      :column2="data.phoneNumber"
                                      required
                                    />
                                    <table-row column1="所在院系" :column2="data.collage" />
                                    <table-row
                                      column1="专&emsp;&emsp;业"
                                      :column2="data.major"
                                      required
                                    />
                                    <table-row
                                      column1="班&emsp;&emsp;级"
                                      :column2="data.class"
                                      required
                                    />
                                    <table-row column1="身份证号" :column2="data.ID" required />
                                    <table-row
                                      column1="辅导员姓名"
                                      :column2="data.counselorName"
                                      required
                                    />
                                    <table-space1 />
                                    <table-row
                                      column1="选择类型"
                                      :column2="data.type"
                                      required
                                      align-left
                                    />
                                    <go-out-target
                                      :leave-nanjing="data.leaveNanjing"
                                      :province="data.target.province"
                                      :city="data.target.city"
                                      :zone="data.target.zone"
                                    />
                                    <table-row column1="请假事由" :column2="data.reason" required />
                                    <table-row column1="请假天数" :column2="data.day" />
                                    <out-back-time
                                      name="离校具体时间"
                                      :date="data.leave.date"
                                      :time="data.leave.time"
                                    />
                                    <out-back-time
                                      name="返校具体时间"
                                      :date="data.back.date"
                                      :time="data.back.time"
                                    />
                                    <tr>
                                      <td class="cell2" colspan="4">
                                        <div align="left">
                                          <font color="#ff0000">
                                            说明：进出校验证时间须在离校具体时间~返校具体时间之间；否则验证不通过。
                                          </font>
                                        </div>
                                      </td>
                                    </tr>
                                    <table-file
                                      :upload-file-name="data.uploadFileName"
                                      :apply-date="data.applyDate"
                                    />
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
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
                                            style="
                                              font-size: small;
                                              font-family: 'PingFang SC', 微软雅黑;
                                            "
                                            name="fieldYWRKjs"
                                            class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled infoplus_fieldChange"
                                            readonly="true"
                                            disabled="true"
                                            :checked="data.haveClass"
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
                                            style="
                                              font-size: small;
                                              font-family: 'PingFang SC', 微软雅黑;
                                            "
                                            name="fieldYWRKjs"
                                            class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled checked infoplus_fieldChange"
                                            readonly="true"
                                            disabled="true"
                                            :checked="!data.haveClass"
                                          />
                                          <label for="V0_CTRL254" class="infoplus_radioLabel">
                                            <font size="3">无</font>
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">郑重提醒</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="left">
                                          <font size="3">
                                            请假期间请注意生命财产安全，责任自负！
                                          </font>
                                        </div>
                                      </td>
                                    </tr>
                                    <table-space2 />
                                    <table-opinion />
                                    <table-row2 column1="审批人" :column2="data.counselorName" />
                                    <table-row2 column1="审批时间" :column2="data.applyDate" />
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div align="center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 5.the holder for form remark renderer -->
          <div
            id="form_remark_holder"
            class="form_remark_holder shadow round-corner"
            style="width: 100vw; display: block; height: 100%"
            align="center"
          >
            <ul>
              <approve-record name="辅导员审核意见" :time="data.step2Time">
                {{ data.counselorName }}
              </approve-record>
              <approve-record name="申请人" :time="data.step1Time" is-bottom>
                您({{ data.stuName }})
              </approve-record>
            </ul>
          </div>
        </div>
      </div>
    </form>
    <div id="master_footer">
      <div id="div_footer_copy_containers">
        <div style="height: 1px; background-color: #999999"></div>
        <div style="height: 1px; background-color: #ffffff"></div>
        <div id="div_footer_copy_content">
          <span class="copyright">©</span> 2009 - 2021. 南京信息工程大学(nuist.edu.cn), All rights
          reserved. Version 20211117-095344
        </div>
      </div>
    </div>
  </div>
  <div id="div_invoice"></div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import './assets/isolated.css';
import './assets/origin.css';
import ApproveRecord from './components/ApproveRecord.vue';
import GoOutTarget from './components/GoOutTarget.vue';
import MenuIcon from './components/MenuIcon.vue';
import OutBackTime from './components/OutBackTime.vue';
import TableFile from './components/TableFile.vue';
import TableOpinion from './components/TableOpinion.vue';
import TableRow from './components/TableRow.vue';
import TableRow2 from './components/TableRow2.vue';
import TableSpace1 from './components/TableSpace1.vue';
import TableSpace2 from './components/TableSpace2.vue';
import IData from './types/IData';

const data: IData = {
  applyDate: '',
  stuNumber: '',
  stuName: '',
  gender: '',
  phoneNumber: '',
  collage: '',
  major: '',
  class: '',
  ID: '',
  counselorName: '',
  type: '事假',
  leaveNanjing: false,
  target: { province: '', city: '', zone: '' },
  reason: '',
  day: '',
  leave: { date: '', time: '' },
  back: { date: '', time: '' },
  haveClass: false,
  approveDate: '',
  uploadFileName: 'Screenshot_20220314-114514_微信.png',
  step1Time: '',
  step2Time: '',
  no: '114514',
};
</script>

<style>
[autoheight] {
  overflow: hidden;
  box-sizing: border-box;
}
@font-face {
  font-family: 'icomoon';
  src: url('./assets/icomoon.ttf');
  font-weight: normal;
  font-style: normal;
}
</style>
