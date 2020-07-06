"use strict";
cc._RF.push(module, 'b1272m1aqVNsrbC7LgEBaxs', 'tipPicture');
// Script/tutorialPage/tipPicture.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tipPicture: cc.Prefab,
    stopButton: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  showTipPicture: function showTipPicture() {
    var _this = this;

    this.stopButton.interactable = false;
    var node = cc.instantiate(this.tipPicture);
    this.node.parent.addChild(node);
    node.on("touchstart", function (event) {
      node.destroy();
      _this.stopButton.interactable = true;
    }, this);
  } // update (dt) {},

});

cc._RF.pop();