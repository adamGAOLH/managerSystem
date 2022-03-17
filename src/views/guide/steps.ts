/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-17 09:42:25
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-17 10:45:50
 */
interface step {
  element: string;
  popover: {
    title: string;
    description: string;
    position: string;
  };
}

const steps: Array<step> = [
  {
    element: "#floder-icon",
    popover: {
      title: "Fold",
      description: "Open && Close sidebar",
      position: "bottom",
    },
  },
  {
    element: "#screen",
    popover: {
      title: "FullScreen",
      description: "Open && Close fullScreen",
      position: "bottom",
    },
  },
  {
    element: "#message",
    popover: {
      title: "Message",
      description: "Message prompt",
      position: "left",
    },
  },
];

export default steps;
