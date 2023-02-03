class LevelData {

  constructor() {

    this.initalize();

  }
  initalize()
  {
    this.setData();
  }
  setData()
  {
    this.levelArr_2_2 = [
      [3,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [7,0,0,0,0,0,0,0,0,0,0,0,5,1,1,1,1,1,1,1],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
      [3,1,1,1,4,1,1,1,4,1,1,1,3,1,1,1,4,1,1,1],
      [2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0],
      [2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0],
      [7,0,0,0,2,0,0,0,2,0,0,0,5,1,1,1,3,1,1,1],
      [2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0],
      [2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0]
    ];

    this.levelArr_building_inside = [
      [1,1,1,0,1,1,1],
      [1,1,1,0,0,1,0],
      [1,0,0,0,0,0,0],
      [1,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];
  }

}

export default LevelData;