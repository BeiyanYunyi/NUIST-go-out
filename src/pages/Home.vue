<template>
  <div id="help_content"></div>
  <div id="div_render_container" style="display: block">
    <form id="renderForm">
      <div id="div_content" class="div_content">
        <header-holder :no="data.no" />
        <div id="renderContent_holder">
          <nav-menu />
          <form-milestone />
          <!-- 2.the holder for form renderer -->
          <render-holder>
            <table-wrapper>
              <table-row column1="申请日期" :column2="data.applyDate" />
              <table-row column1="学&emsp;&emsp;号" :column2="data.stuNumber" />
              <table-row column1="姓&emsp;&emsp;名" :column2="data.stuName" />
              <table-row column1="性&emsp;&emsp;别" :column2="data.gender" required />
              <table-row column1="联系方式" :column2="data.phoneNumber" required />
              <table-row column1="所在院系" :column2="data.collage" />
              <table-row column1="专&emsp;&emsp;业" :column2="data.major" required />
              <table-row column1="班&emsp;&emsp;级" :column2="data.class" required />
              <table-row column1="身份证号" :column2="data.ID" required />
              <table-row column1="辅导员姓名" :column2="data.counselorName" required />
              <table-space1 />
              <table-row column1="选择类型" :column2="data.type" required align-left />
              <go-out-target
                :leave-nanjing="data.leaveNanjing"
                :province="data.target.province"
                :city="data.target.city"
                :zone="data.target.zone"
              />
              <table-row column1="请假事由" :column2="data.reason" required />
              <table-row column1="请假天数" :column2="data.day" />
              <out-back-time name="离校具体时间" :date="data.leave.date" :time="data.leave.time" />
              <out-back-time name="返校具体时间" :date="data.back.date" :time="data.back.time" />
              <table-file :upload-file-name="data.uploadFileName" :apply-date="data.applyDate" />
              <has-teacher-table-row :have-class="data.haveClass" />
              <table-space2 />
              <table-opinion />
              <table-row2 column1="审批人" :column2="data.counselorName" />
              <table-row2 column1="审批时间" :column2="data.applyDate" />
            </table-wrapper>
          </render-holder>
          <!-- 5.the holder for form remark renderer -->
          <div
            id="form_remark_holder"
            class="form_remark_holder shadow round-corner"
            style="width: 100vw; display: block; height: 100%; text-align: center"
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
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import '../assets/isolated.css';
import '../assets/origin.css';
import ApproveRecord from '../components/ApproveRecord.vue';
import FormMilestone from '../components/FormMilestone.vue';
import GoOutTarget from '../components/GoOutTarget.vue';
import HasTeacherTableRow from '../components/HasTeacherTableRow.vue';
import HeaderHolder from '../components/HeaderHolder.vue';
import NavMenu from '../components/NavMenu.vue';
import OutBackTime from '../components/OutBackTime.vue';
import RenderHolder from '../components/RenderHolder.vue';
import TableFile from '../components/TableFile.vue';
import TableOpinion from '../components/TableOpinion.vue';
import TableRow from '../components/TableRow.vue';
import TableRow2 from '../components/TableRow2.vue';
import TableSpace1 from '../components/TableSpace1.vue';
import TableSpace2 from '../components/TableSpace2.vue';
import TableWrapper from '../components/TableWrapper.vue';
import useDataStore from '../state/data';
import formatData from '../utils/formatData';

const dataStore = useDataStore();
const { data: storedData } = dataStore;
const data = formatData(storedData);
</script>

<style scoped>
[autoheight] {
  overflow: hidden;
  box-sizing: border-box;
}
@font-face {
  font-family: 'icomoon';
  src: url('../assets/icomoon.ttf');
  font-weight: normal;
  font-style: normal;
}
</style>
