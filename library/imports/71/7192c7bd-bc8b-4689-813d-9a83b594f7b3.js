"use strict";
cc._RF.push(module, '7192ce9vItGiYE9moO1lPez', 'loadWait');
// Script/ThirdPage/loadWait.js

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
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.scheduleOnce(function () {
      this.node.destroy();
    }, 2);
  } // update (dt) {},

});

cc._RF.pop();