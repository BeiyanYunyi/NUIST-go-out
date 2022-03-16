import IData from '../types/IData';

const formatData = (data: IData) => ({
  ...data,
  step1Time: data.step1Time.replace('T', ' ').replace(/-/g, '/'),
  step2Time: data.step2Time.replace('T', ' ').replace(/-/g, '/'),
});

export default formatData;
