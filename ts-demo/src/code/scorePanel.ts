
// 定义 ScorePanel 类

// 记分面板

class ScorePanel {
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  
  score:number = 0;
  level:number = 1;
  maxLevel:number; // 最大等级
  upscore:number; // 多少分升级
  constructor(maxLevel:number = 10, upscore:number = 10) { // maxLevel设置默认值
    this.maxLevel = maxLevel;
    this.upscore = upscore;

    this.scoreElement = document.getElementById("score")!;
    this.levelElement = document.getElementById("level")!;
  }

  // 加分方法
  addScore() {
    this.scoreElement.innerHTML = ++this.score + '';
    // 这里调用升级 
    if (this.score % this.upscore === 0) {
      this.levelUp();
    }
  }

  // 提升等级
  levelUp () {
    // 将 最大等级设为一个变量，可扩展性更强
    if (this.level < this.maxLevel) {
      this.levelElement.innerHTML = ++this.level + '';
    }
  }
}

// 暴露模块
export default ScorePanel;
