<template>
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
          <h1 style="text-align: center">
            <strong>
              <font color="#0070c0">学生请假申请</font>
            </strong>
          </h1>
          <div style="text-align: center">&nbsp;</div>
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
                <slot />
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
