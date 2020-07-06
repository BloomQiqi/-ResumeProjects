"use strict";
cc._RF.push(module, 'bc657kh48ZCHLcR2ilS9Sd7', 'tipPhoto');
// Script/ThirdPage/tipPhoto.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    prefab: {
      "default": null,
      type: cc.Prefab
    },
    upFlag: {
      "default": false,
      type: cc.Boolean,
      visible: false
    },
    posX: {
      "default": 0,
      type: cc.Integer
    },
    posY: {
      "default": 0,
      type: cc.Integer
    },
    tipKnowledgePopUpHuanDongCiShu: {
      "default": 10,
      type: cc.Integer,
      tooltip: "知识弹出按钮，缓动的次数，初始为5"
    },
    tipKnowledgePopUpHuanDongTime: {
      "default": 0.3,
      tooltip: "每次一缓动的时间，初始0.3秒"
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onStart: function onStart() {//this.parent1 = cc.find("Canvas/background/blockLayoutParent").node.getComponent("Initate");
  },
  //  点击暂停按钮
  popupPage: function popupPage() {
    var _this = this;

    //cc.log(1);
    if (this.upFlag) //已经弹出了一个
      {
        return;
      }

    this.upFlag = true;
    cc.log("生成了一个");
    var node1 = cc.instantiate(this.prefab);
    this.node.parent.addChild(node1);
    node1.scale = 0; //360.457,649.87

    node1.x = this.posX;
    node1.y = this.posY;
    cc.log(node1.x + '  ' + node1.y); //node.scale = 1;

    var scaleTo = cc.scaleTo(0.1, 1).easing(cc.easeBounceOut());
    node1.runAction(scaleTo);
    cc.find("Canvas").pauseSystemEvents(true);
    node1.on("touchstart", function (event) {
      _this.upFlag = false;
      cc.log("销毁了一个");
      node1.destroy();
      cc.find("Canvas").resumeSystemEvents(true);
    }, this);
  },
  popupPage2: function popupPage2() {
    var _this2 = this;

    //此弹出函数为 扣生命值后强制弹出专用
    //cc.log(1);
    //cc.log("This.Parent"+this.parent);
    if (this.upFlag) //已经弹出了一个
      {
        return;
      }

    var button = this.node.getComponent(cc.Button);
    button.interactable = true; //设置popUp按钮交互性

    this.upFlag = true; //cc.log("生成了一个");

    var node1 = cc.instantiate(this.prefab);
    this.node.parent.addChild(node1);
    node1.scale = 0; //360.457,649.87

    node1.x = this.posX;
    node1.y = this.posY; //cc.log(node1.x+'  '+node1.y);
    //node.scale = 1;

    var scaleTo = cc.scaleTo(0.1, 1).easing(cc.easeBounceOut());
    node1.runAction(scaleTo);
    cc.find("Canvas").pauseSystemEvents(true);
    node1.on("touchstart", function (event) {
      _this2.upFlag = false;
      cc.log("销毁了一个");
      node1.destroy();
      cc.find("Canvas").resumeSystemEvents(true);
      _this2.node.scale = 1;
      var count = 0;

      _this2.schedule(function () {
        count++;
        this.scheduleOnce(function () {
          //放大
          var scaleTo1 = cc.scaleTo(this.tipKnowledgePopUpHuanDongTime, 1.2).easing(cc.easeBounceOut());
          this.node.runAction(scaleTo1);
        }, 0);
        this.scheduleOnce(function () {
          //缩小
          var scaleTo2 = cc.scaleTo(this.tipKnowledgePopUpHuanDongTime, 1).easing(cc.easeBounceOut());
          this.node.runAction(scaleTo2);
        }, this.tipKnowledgePopUpHuanDongTime * 1.5);

        if (count == this.tipKnowledgePopUpHuanDongCiShu) //最后一次执行
          {
            button.interactable = false;
          }
      }, 3 * _this2.tipKnowledgePopUpHuanDongTime, _this2.tipKnowledgePopUpHuanDongCiShu, 0);
    }, this);
  } // update (dt) {},

});

cc._RF.pop();