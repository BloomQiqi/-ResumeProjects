"use strict";
cc._RF.push(module, '7ad6dCQaWdKfogJir5d+KX0', 'yes');
// Script/isJump/yes.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scene: "tutorialPage"
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  gotoTutorialPage: function gotoTutorialPage() {
    cc.director.loadScene(this.scene);
  } // update (dt) {},

});

cc._RF.pop();