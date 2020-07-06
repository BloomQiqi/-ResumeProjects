"use strict";
cc._RF.push(module, 'ab3d5rgDjBH0IZSY4C5+slH', 'returnButton');
// Script/ThirdPage/returnButton.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    scene: "thirdPage"
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  OnButtonClickReLoadScene: function OnButtonClickReLoadScene() //后面如果多关卡则可更改
  {
    cc.director.loadScene(this.scene);
  } // update (dt) {},

});

cc._RF.pop();