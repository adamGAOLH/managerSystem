/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-18 16:24:50
 */
/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "screenfull";
declare module "sortablejs";
declare module "file-saver";
declare module "xlsx/xlsx.mjs";
declare module "*.module.scss" {
  const classes: [readonly [key: string], string];
  export default classes;
}
declare module "*.scss";
