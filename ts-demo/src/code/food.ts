// 定义食物类
class Food {
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;
  constructor() {
    // 加上 ！ 表示确定是已经 必须有的属性
    this.element = document.querySelector('#food')!;
  }

  // 获取食物的坐标
  // X 轴
  get X () {
    return this.element.offsetLeft;
  }
  // Y 轴
  get Y () {
    return this.element.offsetTop;
  }

  // 定义修改食物位置的方法
  change () {
    // 生成一个随机的位置
    // 食物的位置最小是 0  最大是290 
    // 🐍 移动一次就是一格， 一格大小就是10， 所以随机生成的坐标只能是 整10 的
    

    // round() 四舍五入   Math.random * 29 =>  0 ~ 29 之间的数
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    // 赋值
    this.element.style.left = left + "px";
    this.element.style.top = top + "px"; 
  }
}

// 暴露模块
export default Food;
