import * as Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayScene' });
  }

  preload() {
    this.load.image('star', '/static/sample_dog.png');
  }

  create() {

    this.characterA = this.physics.add.image(
      400,
      400,
      'star'
    );

    this.platform = this.add.rectangle(630, 600, 1000, 150);
    this.platform.setStrokeStyle(1, 0x00ff00);
    this.physics.add.existing(this.platform, true);

    this.characterA.setDrag(0.89);
    this.characterA.setMaxVelocity(500);
    this.characterA.setCollideWorldBounds(true);
    this.canJump = true;

    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    this.physics.add.collider(this.characterA, this.platform);
  }

  update() {
    
    if (this.characterA.body.velocity.y == 0) {
      this.canJump = true;
    }
    
    //console.log("Speed: " + this.characterA.body.velocity.x);
    if (this.keyA.isDown) {
      if (this.keyW.isDown && this.canJump) {
        this.characterA.setVelocityY(-350);
        this.characterA.setVelocityX(-200);
        this.canJump = false;
      } else if (this.characterA.body.velocity.y == 0) {
        this.characterA.setVelocityX(-300);
      }
      if (this.characterA.body.velocity.x > 0 && this.characterA.body.velocity.y == 0) {
        this.characterA.setVelocityX(0);
        this.characterA.setAccelerationX(0);
      }
    } else if (this.keyD.isDown) {
      if (this.keyW.isDown && this.canJump) {
        this.characterA.setVelocityY(-350);
        this.characterA.setVelocityX(200);
        this.canJump = false;
      } else if (this.characterA.body.velocity.y == 0) {
        this.characterA.setVelocityX(300);
      }
      if (this.characterA.body.velocity.x < 0 && this.characterA.body.velocity.y == 0) {
        this.characterA.setVelocityX(0);
        this.characterA.setAccelerationX(0);
      }
    } else if (this.keyW.isDown && this.canJump) {
      console.log("Jump boy!");
      this.characterA.setVelocityY(-350);
      this.canJump = false;
    } else if (this.keyA.isUp && this.keyD.isUp && this.characterA.body.velocity.y == 0) {
      this.characterA.setVelocityY(500);
      this.characterA.setVelocityX(0);
      this.characterA.setAccelerationX(0); 
    }
  }
}