// 引入模块
import Food from './food';
import ScorePanel from './scorePanel';
import Snake from './snake';

// 游戏的控制器
class GameControl {
  food: Food;
  scorePanel: ScorePanel;
  snake:Snake;
  direction: string = '';  // 用来存储 按键的属性,  默认值为 '' 
  isLive: boolean = true;  // 空值这局游戏的开关
  constructor() {
    // 创建实例
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 1);
    this.snake = new Snake();
    this.init();
  }

  // 游戏开始时， 初始化的方法， 调用后即游戏开始
  init() {
    // 1. 绑定键盘按下的事件 
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 初始时， 让🐍 动起来
    this.run();
  }

  keydownHandler(event: KeyboardEvent) { // event 参数， 表示键盘事件
    // 需要检查 event.key 的值是否合法 （用户是否按了正确案件）
    // 修改 direction 的值
    this.direction = event.key;
  }


  // 创建一个 🐍 移动的方法
  run() {
    /**
     * 根据方向 this.direction 来使🐍 的位置发生改变
     * 向上 top 减少
     * 向下 top 增大
     * 向左 left 减小
     * 向右 left 增大
     */
    
    // 获取🐍现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    // 根据按方向键来修改X和 Y的值
    switch(this.direction) {
      case "ArrowUp":
        // 向上
        Y -= 10;
        break;
      case "ArrowDown":
        // 向下
        Y += 10;
        break;      
      case "ArrowLeft":
        // 向左
        X -= 10;
        break;
      case "ArrowRight":
        // 向右
        X += 10;
        break;
    }

    // 判断是否吃到食物
    this.checkEat(X, Y)

    // 重新赋值
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    }catch (e: any) {
      alert(e.message + 'Game Over');
      this.isLive = false;  // 设置游戏结束
    }

    // 让🐍动起来 
    // this.isLive 确定本局游戏在进行
    // this.run.bind(this) 每格一段时间移动🐍， 时间是 🐍 的等级  
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level -1) * 30);
    
  }

  checkEat (X:number, Y:number) {
    if(X === this.food.X && Y === this.food.Y) {
      // 出现问题，初始时， 这里会执行一次，初始时 它们的坐标都一样
      
      // 食物随机出现
      this.food.change();

      // 积分面板 加一 
      this.scorePanel.addScore();
      
      // 🐍 身 + 1 
      this.snake.addBody();
    }
  }
}

export default GameControl

/**
 * ArrowUp
 * ArrowDown
 * ArrowLeft
 * ArrowRight
 */