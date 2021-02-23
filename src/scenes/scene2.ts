import * as Phaser from "phaser";

class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene1" });
  }

  preload() {
    console.log(this);
  }
}

export { Scene1 };
