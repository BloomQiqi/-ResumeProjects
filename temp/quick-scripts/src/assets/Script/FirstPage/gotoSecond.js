"use strict";
cc._RF.push(module, '77cd7kHBLFIg7ArRlimOwXY', 'gotoSecond');
// Script/FirstPage/gotoSecond.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scene: "secondPage"
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  changeScene: function changeScene() {
    cc.director.loadScene(this.scene);
  } // update (dt) {},

});

cc._RF.pop();