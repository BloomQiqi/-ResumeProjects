"use strict";
cc._RF.push(module, '71bf2Gpv4BLnYAxLqJTFpws', 'cuyu');
// Script/FirstPage/cuyu.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.node.on("touchstart", function (event) {
      CUYU = true;
      cc.log("cuyu" + CUYU);
    }, this);
  }
});

cc._RF.pop();