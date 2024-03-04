const formatTelNum = (telNum: string) =>
  `${telNum.slice(0, 3)} ${telNum.slice(3, 7)} ${telNum.slice(7, 11)}`;

export default formatTelNum;
