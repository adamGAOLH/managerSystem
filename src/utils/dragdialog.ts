const dragdialog = (app: any, options: any) => {
  console.log(options);

  app.directive("drage", {
    mounted(el: any, bind: any) {
      console.log(bind);

      // 可是窗口的高度和宽度
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;
      //  记录坐标
      const domset = {
        x: clientWidth / 4, //默认width 50%
        y: (clientHeight * 15) / 100, //根据15vh计算
      };
      // 弹窗的容器
      const domDrag = el.firsElmentChild.firsElmentChild;
      // 重新设置，左的距离
      domDrag.style.marginTop = domset.y + "px";
      domDrag.style.marginLeft = domset.x + "px";
      // 记录拖拽开始的光标坐标，0表示没有拖拽
      const start = { x: 0, y: 0 };
      const move = { x: 0, y: 0 };
      domDrag.onmousedown = (e: any) => {
        if (domDrag.style.marginTop == "15vh") {
          //重新打开，设置domset.y top
          domset.y = (clientHeight * 5) / 1100;
        }
        start.x = e.clientX;
        start.y = e.clientY;
        domDrag.style.cursor = "move"; //改变光标形状
      };
      // 鼠标移动，实时跟踪
      domDrag.onmousemove = (e: any) => {
        if (start.x === 0) {
          return;
        }
        move.x = e.clientX - start.x;
        move.y = e.clientY - start.y;
        //初始的位置+拖拽的距离
        domDrag.style.marginLeft = domset.x + move.x + "px";
        domDrag.style.marginTop = domset.y + move.y + "px";
      };
      //   鼠标抬起，结束拖拽
      domDrag.onmouseup = (e: any) => {
        move.x = e.clientX - start.x;
        move.y = e.clientY - start.y;
        // 记录新坐标，作为下次拖拽的初试位置
        domset.x += move.x;
        domset.y += move.y;
        domDrag.style.cursor = "";
        domDrag.style.marginLeft = domset.x + "px";
        domDrag.style.marginTop = move.y + "px";
        // 结束拖拽
        start.x = 0;
      };
    },
  });
};

export default dragdialog;
