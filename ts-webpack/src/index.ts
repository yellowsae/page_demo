require('./css/main.scss')

const box = document.querySelector('#rainBox');

if (box) {
  let boxHeight = box.clientHeight;
  let boxWidth = box.clientWidth;
  // 页面大小发生变化时 , 改变盒子的大小
  window.onresize = function () {
    boxHeight = box.clientHeight;
    boxWidth = box.clientWidth;
  }

  // 每个50ms 添加雨滴 
  setInterval(() => {
    const rain:any = document.createElement('div');
    rain.classList.add('rain');
    rain.style.top = 0;
    // 随机刷新雨点
    rain.style.left = Math.random() * boxWidth + 'px';
    // 随机雨点透明度
    rain.style.opacity = Math.random();
  
    box.appendChild(rain);

    // 每隔一点时间， 雨水下落
    let race:number = 1;
    const timer = setInterval(() => {
      // 清除下来的雨滴 
      if (parseInt(rain.style.top) > boxHeight) {
        clearInterval(timer);
        box.removeChild(rain);
      } 
      race++;
      rain.style.top = parseInt(rain.style.top) + race + "px";
    }, 20)
  }, 50)
}