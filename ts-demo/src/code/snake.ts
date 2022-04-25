
class Snake {
  // 表示🐍头的元素 
  head: HTMLElement;
  // 🐍的所有身体
  bodies: HTMLCollection;  // HTmlCollection 实时刷新元素
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element?.getElementsByTagName('div');
  }


  // 获取蛇头坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇头坐标
  set X(value: number) {
    // 当X轴没有移动
    if (this.X === value) {
      return;
    }
    // 判断是否撞墙
    if (this.X < 0 || this.X >= 290) {
      throw new Error('🐍撞墙了')
    }

    // 修改X时，是在修改水平坐标， 蛇在左右移动， 🐍在向左移动时， 不能向右掉头， 反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // 如果发生了掉头
      // 取消掉头， 继续移动
      if (value > this.X) {
        // 如果新值 value 大于旧值 X， 则说明🐍 在向右走， 此时发生掉头，应该使🐍继续向右走
        value = this.X - 10;
      } else {
        // 向右走
        value = this.X + 10;
      }
    }


    // 设置身体的移动
    this.moveBody();
    // 修改值
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }
  set Y(value: number) {
    // 当X轴没有移动
    if (this.Y === value) {
      return;
    }
    // 判断是否撞墙
    if (this.Y < 0 || this.Y >= 290) {
      throw new Error('🐍撞墙了');
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        // 向右走
        value = this.Y + 10;
      }
    }

    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
  }

  // 设置🐍增加身体方法
  addBody() {
    this.element.insertAdjacentHTML('beforeend', "<div></div>");
  }
  // 移动🐍的身体
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 检查蛇头有没有个蛇身重合


      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // checkHeadBody 检查🐍是否撞到自己
  checkHeadBody() {
    for(let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('撞到自己了');
      }
    }
  }
}

export default Snake;