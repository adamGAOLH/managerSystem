/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-16 15:47:09
 */
export interface headerdata {
  show: boolean;
  msg: number;
}

export interface tageData {
  url: string;
  name: string;
}
export interface switcInit {
  ishow: boolean;
}
export interface menuInit {
  id: string;
  title: string;
  path: string;
  children?: Array<menuInit>;
}
export interface echartsInit {
  name: string;
  type: string;
  stack: string;
  data: Array<number>;
}
export interface echartsStyle {
  width: string;
  height: string;
}
export class InitEcharts {
  style: echartsStyle = {
    width: "100%",
    height: "100%",
  };
  series: Array<echartsInit> = [];
}
export class Initdata {
  header: headerdata = {
    show: false,
    msg: 0,
  };
  tagAry: Array<tageData> = [];
  switchishow: switcInit = {
    ishow: true,
  };
}
