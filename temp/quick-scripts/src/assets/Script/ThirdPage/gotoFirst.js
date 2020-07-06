"use strict";
cc._RF.push(module, 'db5f2/787JPX6JO9MbtMxR7', 'gotoFirst');
// Script/ThirdPage/gotoFirst.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scene: "firstPage"
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  changeScene: function changeScene() {
    cc.director.loadScene(this.scene);
  } // update (dt) {},

});

cc._RF.pop();