"use strict";
cc._RF.push(module, '99c5eCxKmxPGpQZp7571Jzw', 'hideGarbage');
// Script/FirstPage/hideGarbage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    garbage1: cc.Node,
    garbage2: cc.Node,
    garbage3: cc.Node,
    garbage4: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.garbage1.active = false;
    this.garbage2.active = false;
    this.garbage3.active = false;
    this.garbage4.active = false;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();