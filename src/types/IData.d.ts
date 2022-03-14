export default interface IData {
  applyDate: string;
  stuNumber: string;
  stuName: string;
  gender: string;
  phoneNumber: string;
  collage: string;
  major: string;
  class: string;
  ID: string;
  counselorName: string;
  type: '事假' | '病假';
  leaveNanjing: boolean;
  target: { province: string; city: string; zone: string };
  reason: string;
  day: string;
  leave: { date: string; time: string };
  back: { date: string; time: string };
  haveClass: boolean;
  approveDate: string;
  uploadFileName: string;
  step1Time: string;
  step2Time: string;
  no: string;
}
