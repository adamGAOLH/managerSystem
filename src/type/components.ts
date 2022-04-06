/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-18 15:53:27
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
  smooth: boolean;
}
export interface echartsStyle {
  width: string;
  height: string;
}
export interface draggable {
  name: string;
  id: number;
}
export interface dragTable {
  date: string;
  name: string;
  state: string;
  city: string;
  address: string;
  zip: string;
  tag: string;
  id: number;
}
export class InitDraggable {
  list1: Array<draggable> = [];
  list2: Array<draggable> = [];
  list3: Array<draggable> = [];
  tableData: Array<dragTable> = [];
  group: string = "";
  flag: boolean = false;
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
