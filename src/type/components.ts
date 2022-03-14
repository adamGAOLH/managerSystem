/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-14 10:26:27
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
