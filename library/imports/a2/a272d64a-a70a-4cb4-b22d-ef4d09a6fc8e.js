"use strict";
cc._RF.push(module, 'a272dZKpwpMtLIt700JpvyO', 'tipPage');
// Script/ThirdPage/tipPage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    prefab: {
      "default": null,
      type: cc.Prefab
    },
    upFlag: {
      //用于控制只能弹出一个窗口
      "default": false,
      type: cc.Boolean,
      visible: false
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //  点击暂停按钮
  popupPage: function popupPage() {
    var _this = this;

    // cc.log(1);
    if (this.upFlag) //已经弹出了一个
      {
        return;
      }

    cc.log("生成了一个");
    this.upFlag = true;
    var node = cc.instantiate(this.prefab);
    this.node.addChild(node); // node.scale = 0;
    //360.457,649.87

    var pos = this.node.convertToNodeSpaceAR(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
    node.x = pos.x;
    node.y = pos.y; // let scaleTo = cc.scaleTo(0.1,1).easing(cc.easeBounceOut());
    // node.runAction(scaleTo);

    cc.find("Canvas").pauseSystemEvents(true);
    node.on("touchstart", function (event) {
      _this.upFlag = false;
      cc.log("销毁了一个");
      node.destroy();
    }, this);
    cc.find("Canvas").resumeSystemEvents(true);
  } // update (dt) {},

});

cc._RF.pop();