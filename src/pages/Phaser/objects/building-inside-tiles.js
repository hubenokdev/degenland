import BuildingTile from "./sprites/buildingTile";

class BuildingInsideTiles {

  constructor(game) {

    this.game = game;
    this.initialize();
  }
  initialize() {
    this.tilesCount = 0;
    this.isoMetric = true;
  }

  addTiles() {
    var type;
    var x;
    var y;

    var w = this.game.tileWidth; // 128
    var h = this.game.tileHeight; // 73

    var startX = 500 + w/2; //sidebar_width plus
    var startY = 1080 - h/2;
    var angle = 30 * Math.PI / 180;

    for (var j = 0; j < this.game.mapsizex + 1; j++) {
      if (j > 0) {
        startX = startX - w/2;
        startY = startY + h/2;
      }
      for (var i = 0; i < this.game.mapsizey; i++) {
        x = startX + i * h * Math.cos(angle);
        y = startY + i * h * Math.sin(angle);
        type = this.game.levelData.levelArr_building_inside[j][i];
        this.addTile(x, y, type, i, j);
      }
    }
  }/* addTiles */

  addTile(x, y, type, i, j) {
    var tile = new BuildingTile(this.game, x, y, type);

    tile.m = i;
    tile.n = j;
    var tileId;

    tile.sno = this.tilesCount;
    this.tilesCount++;

    if (tile.n >= 0 && tile.n < 10)
      tileId = '0' + tile.n.toString();
    else
      tileId = tile.n.toString();
    if (tile.m >= 0 && tile.m < 10)
      tileId += '0' + tile.m.toString();
    else
      tileId += tile.m.toString();
    this.game['tile_' + tileId] = tile;
    if (j == 0 && i == this.game.mapsizey - 1)
      this.game['tile_' + tileId].visible = false;
  }
} /*class*/

export default BuildingInsideTiles;