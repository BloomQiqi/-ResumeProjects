"use strict";
cc._RF.push(module, '712409FP1RLC6AgurNCePMo', 'gotoNextLevel');
// Script/ThirdPage/gotoNextLevel.js

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
    this.parent = cc.find("Canvas/background/blockLayoutParent").getComponent("Initate");
  },
  onButtonCLickGoNextLevel: function onButtonCLickGoNextLevel() {
    this.parent.gotoNextLevel();
    this.node.parent.destroy();
  }
});

cc._RF.pop();