<template>
  <form @submit="handleSubmit">
    <div>
      <label>
        申请日期
        <input v-model="pageData.applyDate" type="date" />
      </label>
    </div>
    <AppInput v-model="pageData.stuNumber" self-label="学号" />
    <AppInput v-model="pageData.stuName" self-label="姓名" />
    <div>
      <label>
        性别
        <select v-model="pageData.gender">
          <option>男（male）</option>
          <option>女（female）</option>
        </select>
      </label>
    </div>
    <AppInput v-model="pageData.phoneNumber" self-label="联系方式" />
    <AppInput v-model="pageData.collage" self-label="所在院系" />
    <AppInput v-model="pageData.major" self-label="专业" />
    <AppInput v-model="pageData.class" self-label="班级" />
    <AppInput v-model="pageData.ID" self-label="身份证号" />
    <AppInput v-model="pageData.counselorName" self-label="辅导员姓名" />
    <div>
      <label>
        选择类型
        <select v-model="pageData.type">
          <option>事假</option>
          <option>病假</option>
        </select>
      </label>
    </div>
    <div>
      <label>
        是否离宁
        <input v-model="pageData.leaveNanjing" type="checkbox" />
      </label>
    </div>
    <div>
      <label>
        去向目的地
        <input v-model="pageData.target.province" />
        <input v-model="pageData.target.city" />
        <input v-model="pageData.target.zone" />
      </label>
    </div>
    <AppInput v-model="pageData.reason" self-label="请假事由" />
    <AppInput v-model="pageData.day" self-label="请假天数" />
    <div>
      <label>
        离校具体时间
        <input v-model="pageData.leave.date" type="date" />
        <input v-model="pageData.leave.time" type="time" />
      </label>
    </div>
    <div>
      <label>
        返校具体时间
        <input v-model="pageData.back.date" type="date" />
        <input v-model="pageData.back.time" type="time" />
      </label>
    </div>
    <div>
      <label>
        请假期间有无任课教师
        <input v-model="pageData.haveClass" type="checkbox" />
      </label>
    </div>
    <div>
      <label>
        批准日期
        <input v-model="pageData.approveDate" type="date" />
      </label>
    </div>
    <AppInput v-model="pageData.uploadFileName" self-label="上传文件名" />
    <div>
      <label>
        申请时间
        <input v-model="pageData.step1Time" type="datetime-local" />
      </label>
    </div>
    <div>
      <label>
        批准时间
        <input v-model="pageData.step2Time" type="datetime-local" />
      </label>
    </div>
    <button type="submit">保存配置</button>
  </form>
  <router-link to="/">回主页</router-link>

  <p>
    <code lang="json" style="word-wrap: break-word">
      {{ JSON.stringify(pageData) }}
    </code>
  </p>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import AppInput from '../components/AppInput.vue';
import useDataStore from '../state/data';
import IData from '../types/IData';

const dataStore = useDataStore();
const { data } = dataStore;
const pageData = ref(data as IData);
const handleSubmit = (e: Event) => {
  e.preventDefault();
  const configStr = JSON.stringify(pageData.value);
  localStorage.setItem('config', configStr);
  dataStore.changeData(pageData.value);
};
</script>
