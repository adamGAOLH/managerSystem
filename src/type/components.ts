/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-10 17:43:03
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
