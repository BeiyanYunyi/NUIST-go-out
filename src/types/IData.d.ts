export default interface IData {
  /** 申请日期 */
  applyDate: string;
  /** 学号 */
  stuNumber: string;
  /** 姓名 */
  stuName: string;
  /** 性别 */
  gender: string;
  /** 联系方式 */
  phoneNumber: string;
  /** 所在院系 */
  collage: string;
  /** 专业 */
  major: string;
  /** 班级 */
  class: string;
  /** 身份证号 */
  ID: string;
  /** 辅导员姓名 */
  counselorName: string;
  /** 选择类型 */
  type: '事假' | '病假';
  /** 是否离宁 */
  leaveNanjing: boolean;
  /** 去向目的地 */
  target: {
    /** 省 */
    province: string;
    /** 市 */
    city: string;
    /** 区 */
    zone: string;
  };
  /** 请假事由 */
  reason: string;
  /** 请假天数 */
  day: string;
  /** 离校具体时间 */
  leave: { date: string; time: string };
  /** 返校具体时间 */
  back: { date: string; time: string };
  /** 请假期间有无任课教师 */
  haveClass: boolean;
  /** 批准日期 */
  approveDate: string;
  /** 上传文件名 */
  uploadFileName: string;
  /** 申请时间，yyyy/MM/dd HH:mm:ss */
  step1Time: string;
  /** 批准时间，yyyy/MM/dd HH:mm:ss */
  step2Time: string;
  /** 流水号 */
  no: string;
}
