import { defineStore } from 'pinia';
import IData from '../types/IData';

const defaultData: IData = {
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

const configStr = localStorage.getItem('config');
const parsedData = configStr ? (JSON.parse(configStr) as IData) : undefined;

const useDataStore = defineStore('data', {
  state: () => ({
    data: parsedData || defaultData,
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    changeData(data: IData) {
      this.data = data;
    },
  },
});

export default useDataStore;
