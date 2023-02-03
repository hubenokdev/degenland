import Phaser from 'phaser';
import store from "../../../../store";

class BuildingTile extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, type) {
    super(scene, x, y, 'ground-0');

		this.setScale(0.5);

    this.game = scene;
    this.type = type;
    this.chatClicked = 0;

    this.initialize();
  }
  initialize() {
    this.add();
  }
  add() {
    this.game.add.existing(this);
    this.game.tilesGroup.add(this);

    this.isEmpty = true;

    let shape = new Phaser.Geom.Polygon([
      0, 73,
      128, 146,
      256, 73,
      128, 0
    ]);

    this.setInteractive(shape, Phaser.Geom.Polygon.Contains);

    this.on('pointermove', (pointer) => {
      if (pointer.isDown) {
        this.game.tilePointedFlag = 1;
      }
    }, this);
    this.on('pointerup', this.onTileClick, this);
  }

  onTileClick() {
    if (this.game.tilePointedFlag != 1) {
      if (this.game.mapTweenFlag == true) { return; }

      if (this.game.playerCreated == 1 && this.game.player.isSelected == true) {
        if (this.isEmpty == false) { return; }

        let target = {
          tilem: this.m,
          tilen: this.n
        };

        this.game.socket.emit("playerMovementInside", target, this.game.playerInfo.accountId, this.game.buildingId);
        this.game.getPath(this.m, this.n, this.game.player);
      }
      this.game.currentTile = this;
    }
    this.game.tilePointedFlag = 0;
  }
}/*class*/

export default BuildingTile;