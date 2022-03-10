/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-10 10:19:16
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-10 15:39:56
 */
import { createI18n } from "vue-i18n";
import elementZhLocale from "element-plus/lib/locale/lang/zh-cn"; // 中文
import elementEnLocale from "element-plus/lib/locale/lang/en"; // 英文
import enLocal from "./en";
import zhLocal from "./zh";
const message = {
  en: {
    ...enLocal,
    ...elementEnLocale,
  },
  "zh-cn": {
    ...zhLocal,
    ...elementZhLocale,
  },
};
export const getLocal = () => {
  const cookieLanguage = localStorage.getItem("lang");
  if (cookieLanguage) {
    return cookieLanguage;
  }
  const language = navigator.language.toLowerCase();
  const locals = Object.keys(message);
  for (const i of locals) {
    if (language.indexOf(i) > -1) {
      return i;
    }
  }
  return "zh";
};

const i18n = createI18n({
  locale: getLocal(), //默认显示的语言
  messages: message,
});
export default i18n;
