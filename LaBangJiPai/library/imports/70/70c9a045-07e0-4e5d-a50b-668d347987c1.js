"use strict";
cc._RF.push(module, '70c9aBFB+BOXaULZo00eYfB', 'changeBlockSize');
// Script/ThirdPage/changeBlockSize.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onLoad: function onLoad() {
    //cc.log(this.node.width+" "+this.node.height);
    var width = cc.winSize.width;
    var height = cc.winSize.height;
    var temp = width * 0.8;
    var beishu = temp / 570.0;
    var hi = cc.winSize.width / 720.0 - 1;
    var ve = cc.winSize.height / 1280.0 - 1; // if(hi < 0)
    // {
    //     hi = -hi;
    // }
    // if(ve < 0)
    // {
    //     ve = -ve;
    // }
    // if(hi>=ve)
    // {

    this.node.setScale(cc.Vec2(beishu, beishu)); // } 
    // else
    // {
    //     this.node.setScale(cc.Vec2(cc.winSize.height/1280.0,cc.winSize.height/1280.0));
    // }
    //cc.log(this.node.getScale(cc.v2()));
  }
});

cc._RF.pop();