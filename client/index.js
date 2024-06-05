import * as Phaser from 'phaser';
import PlayScene from './src/scenes/PlayScene';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1280,
  height: 780,
  dom: {
      createContainer: true
  },
  scene: [
      PlayScene,
  ],
  scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
        debug: true,
        gravity: { y: 600 }
    }
  },
};

const game = new Phaser.Game(config);