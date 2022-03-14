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
                          width: 85vw;
                          border-collapse: collapse;
                          table-layout: fixed;
                          border-bottom-style: none;
                          border-right-style: none;
                        "
                        class="xdFormLayout"
                      >
                        <colgroup>
                          <col style="width: 85vw" />
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
                                    width: 80vw;
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
                                    <col style="width: 30vw" />
                                    <col style="width: 2vw" />
                                    <col style="width: 24vw" />
                                    <col style="width: 24vw" />
                                  </colgroup>
                                  <tbody>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">申请日期</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_a4d8bfa4-28ed-42ec-ab3d-fdd33bb75eb2_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_a4d8bfa4-28ed-42ec-ab3d-fdd33bb75eb2"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.applyDate }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">学&emsp;&emsp;号</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_94ce5c66-72b6-4b61-85e0-181cade3bb2f_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_94ce5c66-72b6-4b61-85e0-181cade3bb2f"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.stuNumber }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">姓&emsp;&emsp;名</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_eee79c81-34c4-45fd-b52f-da0519a92495_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_eee79c81-34c4-45fd-b52f-da0519a92495"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.stuName }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            性&emsp;&emsp;别
                                            <font size="3" color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_0c3a34a4-2727-47c8-b4c3-678a7f1a3292_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_0c3a34a4-2727-47c8-b4c3-678a7f1a3292"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.gender }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            联系方式
                                            <font size="3" color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_ee706da1-3fbb-4647-a1a0-5ceb7c8006b8_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_ee706da1-3fbb-4647-a1a0-5ceb7c8006b8"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.phoneNumber }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">所在院系</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_9a9adb36-53e8-4b57-b913-968e3866e80c_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_9a9adb36-53e8-4b57-b913-968e3866e80c"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.collage }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            专&emsp;&emsp;业
                                            <font size="3" color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_6f47d66e-9b8c-4f92-b504-5d78f6bab9a9_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_6f47d66e-9b8c-4f92-b504-5d78f6bab9a9"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.major }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            班&emsp;&emsp;级
                                            <font size="3" color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_0f8eac0d-3b84-4c97-9e7e-54f71555e4b7_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_0f8eac0d-3b84-4c97-9e7e-54f71555e4b7"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.class }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            身份证号
                                            <font color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_fb9897b9-d362-4722-af60-66b5ecf0acd9_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_fb9897b9-d362-4722-af60-66b5ecf0acd9"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.ID }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            辅导员姓名
                                            <font color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_0d6da815-ab55-4a32-906f-01ae275919a3_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_0d6da815-ab55-4a32-906f-01ae275919a3"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.counselorName }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="2"
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="2"
                                      ></td>
                                    </tr>
                                    <tr>
                                      <td
                                        style="
                                          border-top: #0070c0 1pt solid;
                                          border-right: #0070c0 1pt;
                                          vertical-align: middle;
                                          border-bottom: #0070c0 1pt;
                                          padding-bottom: 5px;
                                          padding-top: 5px;
                                          padding-left: 5px;
                                          border-left: #0070c0 1pt solid;
                                          padding-right: 5px;
                                          background-color: #f2f2f2;
                                        "
                                        colspan="2"
                                      >
                                        <div align="center"><font size="3"></font>&nbsp;</div>
                                      </td>
                                      <td
                                        style="
                                          border-top: #0070c0 1pt solid;
                                          border-right: #0070c0 1pt solid;
                                          vertical-align: middle;
                                          border-bottom: #0070c0 1pt;
                                          padding-bottom: 5px;
                                          padding-top: 5px;
                                          padding-left: 5px;
                                          border-left: #0070c0 1pt;
                                          padding-right: 5px;
                                          background-color: #f2f2f2;
                                        "
                                        colspan="2"
                                      ></td>
                                    </tr>
                                    <tr>
                                      <td
                                        style="
                                          border-top: #0070c0 1pt;
                                          border-right: #0070c0 1pt;
                                          vertical-align: middle;
                                          border-bottom: #0070c0 1pt solid;
                                          padding-bottom: 5px;
                                          padding-top: 5px;
                                          padding-left: 5px;
                                          border-left: #0070c0 1pt solid;
                                          padding-right: 5px;
                                          background-color: #f2f2f2;
                                        "
                                        colspan="2"
                                      >
                                        <div align="center"><font size="3"></font>&nbsp;</div>
                                      </td>
                                      <td
                                        style="
                                          border-top: #0070c0 1pt;
                                          border-right: #0070c0 1pt solid;
                                          vertical-align: middle;
                                          border-bottom: #0070c0 1pt solid;
                                          padding-bottom: 5px;
                                          padding-top: 5px;
                                          padding-left: 5px;
                                          border-left: #0070c0 1pt;
                                          padding-right: 5px;
                                          background-color: #f2f2f2;
                                        "
                                        colspan="2"
                                      >
                                        <div align="center"><font size="3"></font>&nbsp;</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            选择类型
                                            <font color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="left">
                                          <div
                                            id="label_bb908f2d-df31-4c02-98ff-ec37ec57fe93_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_bb908f2d-df31-4c02-98ff-ec37ec57fe93"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              size="1"
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.type }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
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
                                            style="
                                              font-size: small;
                                              font-family: 'PingFang SC', 微软雅黑;
                                            "
                                            name="fieldSFLN"
                                            class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled infoplus_fieldChange"
                                            readonly="true"
                                            disabled="true"
                                            :checked="data.leaveNanjing"
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
                                            style="
                                              font-size: small;
                                              font-family: 'PingFang SC', 微软雅黑;
                                            "
                                            name="fieldSFLN"
                                            class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled checked infoplus_fieldChange"
                                            readonly="true"
                                            disabled="true"
                                            :checked="!data.leaveNanjing"
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
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.target.province }}
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
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.target.city }}
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
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.target.zone }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            请假事由
                                            <font color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_07e82fbf-2a2d-449e-862e-ca67767fb812_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_07e82fbf-2a2d-449e-862e-ca67767fb812"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.reason }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">请假天数</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <div
                                            id="label_0f9caa7e-90bf-4d49-af25-ba63513cb058_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_0f9caa7e-90bf-4d49-af25-ba63513cb058"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.day }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            离校具体时间
                                            <font color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2">
                                        <div align="center">
                                          <div
                                            id="label_7d4f45ab-84e1-48df-9a22-a2d193488886_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_7d4f45ab-84e1-48df-9a22-a2d193488886"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.leave.date }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td class="cell2">
                                        <div align="center">
                                          <div
                                            id="label_7df8575f-3814-48d7-a025-57d80fd34dd6_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_7df8575f-3814-48d7-a025-57d80fd34dd6"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.leave.time }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="2">
                                        <div align="center">
                                          <font size="3">
                                            返校具体时间
                                            <font color="#ff0000">*</font>
                                          </font>
                                        </div>
                                      </td>
                                      <td class="cell2">
                                        <div align="center">
                                          <div
                                            id="label_201c8b93-0866-47d0-8da6-ff22454871a1_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_201c8b93-0866-47d0-8da6-ff22454871a1"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.back.date }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td class="cell2">
                                        <div align="center">
                                          <div
                                            id="label_7e237420-c5f6-420f-b073-dea39388e4fc_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_7e237420-c5f6-420f-b073-dea39388e4fc"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.back.time }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
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
                                        <div align="center">
                                          <font size="3">附&emsp;&emsp;件</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="2">
                                        <div
                                          id="groupFJList"
                                          name="groupFJList"
                                          class="infoplus_repeatParentElement"
                                        >
                                          <div
                                            class="xdRepeatingSection xdRepeating infoplus_repeatingSection"
                                            style="width: 100%"
                                          >
                                            <div
                                              widgetindex="0"
                                              style="margin-bottom: 0px; width: 100%"
                                              align="left"
                                            >
                                              <div align="left">
                                                <table
                                                  style="
                                                    word-wrap: break-word;
                                                    border-top: medium none;
                                                    border-right: medium none;
                                                    width: 182px;
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
                                                    <col style="width: 182px" width="182" />
                                                  </colgroup>
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        style="
                                                          vertical-align: middle;
                                                          padding-bottom: 5px;
                                                          padding-top: 5px;
                                                          padding-left: 5px;
                                                          padding-right: 10px;
                                                        "
                                                      >
                                                        <div align="left">
                                                          <div
                                                            id="file_1e614a11-1b90-48f2-9c3b-22213ea08bf7"
                                                            style="
                                                              font-size: small;
                                                              font-family: 'PingFang SC', 微软雅黑;
                                                              width: 100%;
                                                            "
                                                            class="infoplus_control infoplus_fileControl"
                                                          >
                                                            <div class="display">
                                                              <a
                                                                target="_blank"
                                                                href="http://e-office.nuist.edu.cn/file/87fa69c7-fa5a-459d-aa35-d5c666d09420"
                                                                class="infoplus_fileControl_link"
                                                                :title="`${data.uploadFileName} 创建于${data.applyDate} 11:45:14`"
                                                              >
                                                                <div
                                                                  class="uploadFileName"
                                                                  style="max-width: 75px"
                                                                >
                                                                  {{ data.uploadFileName }}
                                                                </div>
                                                                <div class="uploadFileSize">
                                                                  (427.8K)
                                                                </div>
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
                                                                    <span
                                                                      class="infoplus_popMenuItemIcon"
                                                                    >
                                                                      <i class="i-icon-search2"></i>
                                                                    </span>
                                                                    <span
                                                                      class="infoplus_popMenuItemText"
                                                                      >预览</span
                                                                    >
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
                                                                      <span
                                                                        class="infoplus_popMenuItemIcon"
                                                                      >
                                                                        <i
                                                                          class="i-icon-cloud-download"
                                                                        ></i>
                                                                      </span>
                                                                      <span
                                                                        class="infoplus_popMenuItemText"
                                                                        >下载</span
                                                                      >
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
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
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="2"
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="2"
                                      ></td>
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
                                    <tr>
                                      <td
                                        class="cell2"
                                        style="border-right: #0070c0 1pt; border-left: #0070c0 1pt"
                                        colspan="2"
                                      ></td>
                                      <td
                                        style="
                                          vertical-align: middle;
                                          border-right: #0070c0 1pt;
                                          border-left: #0070c0 1pt;
                                        "
                                        class="cell2"
                                        colspan="2"
                                      >
                                        <div></div>
                                      </td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        class="fake"
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" rowspan="2">
                                        <div align="center">
                                          <font size="3">辅导员意见</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="3">
                                        <div align="left">
                                          <div>
                                            <input
                                              id="V0_CTRL231"
                                              type="radio"
                                              value="1"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                              "
                                              name="fieldSF"
                                              class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled checked infoplus_fieldChange"
                                              readonly="true"
                                              disabled="true"
                                              checked="true"
                                            />
                                            <label for="V0_CTRL231" class="infoplus_radioLabel">
                                              <font size="3">同意</font>
                                            </label>
                                          </div>
                                          <div>
                                            <input
                                              id="V0_CTRL232"
                                              type="radio"
                                              value="2"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                              "
                                              name="fieldSF"
                                              class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled infoplus_fieldChange"
                                              readonly="true"
                                              disabled="true"
                                            />
                                            <label for="V0_CTRL232" class="infoplus_radioLabel">
                                              <font size="3">退回</font>
                                            </label>
                                          </div>
                                          <div>
                                            <input
                                              id="V0_CTRL233"
                                              type="radio"
                                              value="3"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                              "
                                              name="fieldSF"
                                              class="xdBehavior_Boolean infoplus_control infoplus_radioControl infoplus_readonly disabled infoplus_fieldChange"
                                              readonly="true"
                                              disabled="true"
                                            />
                                            <label for="V0_CTRL233" class="infoplus_radioLabel">
                                              <font size="3">不同意</font>
                                            </label>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2" colspan="3">
                                        <div align="left">
                                          <div
                                            id="label_e11ae8d6-ea33-4002-b242-63ad7d490cc3_Container"
                                            class="infoplus_labelControlContainer"
                                          >
                                            <div
                                              id="label_e11ae8d6-ea33-4002-b242-63ad7d490cc3"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                                min-height: 50px;
                                              "
                                              class="infoplus_control infoplus_labelControl"
                                            >
                                              外出期间请做好个人防护，注意安全
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2">
                                        <div align="center">
                                          <font size="3">审批人</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="3">
                                        <div align="center">
                                          <div
                                            id="label_fdc26bf4-7f5f-446b-843c-e862f839c52c_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_fdc26bf4-7f5f-446b-843c-e862f839c52c"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.counselorName }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="cell2">
                                        <div align="center">
                                          <font size="3">审批时间</font>
                                        </div>
                                      </td>
                                      <td class="cell2" colspan="3">
                                        <div align="center">
                                          <div
                                            id="label_83833fc6-0190-444e-975e-f8429350c52f_Container"
                                            class="infoplus_labelControlContainer inline"
                                          >
                                            <div
                                              id="label_83833fc6-0190-444e-975e-f8429350c52f"
                                              style="
                                                font-size: small;
                                                font-family: 'PingFang SC', 微软雅黑;
                                                width: 100%;
                                              "
                                              class="infoplus_control infoplus_labelControl inline"
                                            >
                                              {{ data.applyDate }}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        class="fake"
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        class="fake"
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr class="fake">
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                      ></td>
                                      <td
                                        style="
                                          border-color: rgb(0, 112, 192);
                                          border-style: none;
                                          border-width: 0px;
                                          vertical-align: middle;
                                          padding: 0px;
                                          background-color: rgb(242, 242, 242);
                                        "
                                        colspan="3"
                                      ></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div></div>
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
              <li class="remark_item">
                <div class="form_remark_title">
                  <span class="color_b2">
                    <span class>
                      <b>{{ data.counselorName }}</b>
                    </span>
                    填写/办理了
                    <b>
                      <a
                        target="_blank"
                        title="查看该环节表单的快照"
                        href="http://e-office.nuist.edu.cn/infoplus/form/114514/render?snapshot=true"
                        >辅导员审核意见</a
                      > </b
                    >( <span class="color_b3"> <b>提交</b> </span>)
                  </span>
                  <span class="form_remark_time">{{ data.step2Time }}</span>
                </div>
              </li>
              <li class="remark_item" style="border-bottom: medium none">
                <div class="form_remark_title">
                  <span class="color_b2">
                    <span class>
                      <b>您({{ data.stuName }})</b>
                    </span>
                    填写/办理了
                    <b>
                      <a
                        target="_blank"
                        title="查看该环节表单的快照"
                        href="http://e-office.nuist.edu.cn/infoplus/form/114514/render?snapshot=true"
                        >申请人</a
                      > </b
                    >( <span class="color_b3"> <b>提交</b> </span>)
                  </span>
                  <span class="form_remark_time">{{ data.step1Time }}</span>
                </div>
              </li>
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
import IData from './types/IData';
import MenuIcon from './components/MenuIcon.vue';

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
