"use strict";
cc._RF.push(module, '4e848d8G35KJp0fq/rnOKZl', 'musicCloseButton');
// Script/ThirdPage/musicCloseButton.js

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
    openMusicSprite: cc.SpriteFrame,
    closeMusicSprite: cc.SpriteFrame,
    flag: {
      //0代表open   1代表close
      "default": 0,
      type: cc.Integer,
      tooltip: "0代表open   1代表close"
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);

    if (musicFlag == 1) //如果 音乐是关闭的状态 更改为关闭的图片
      {
        button.normalSprite = this.closeMusicSprite;
        button.pressedSprite = this.closeMusicSprite;
        button.hoverSprite = this.closeMusicSprite;
      } else {
      button.normalSprite = this.openMusicSprite;
      button.pressedSprite = this.openMusicSprite;
      button.hoverSprite = this.openMusicSprite;
    }
  },
  changeStatue: function changeStatue() {
    var button = this.node.getComponent(cc.Button);

    if (musicFlag == 0) {
      cc.log(musicVolum);
      musicVolum = 0;
      button.normalSprite = this.closeMusicSprite;
      button.pressedSprite = this.closeMusicSprite;
      button.hoverSprite = this.closeMusicSprite;
      musicFlag = 1;
      cc.log(musicVolum);
    } else {
      musicVolum = 1;
      button.normalSprite = this.openMusicSprite;
      button.pressedSprite = this.openMusicSprite;
      button.hoverSprite = this.openMusicSprite;
      musicFlag = 0;
      cc.log(musicVolum);
    }
  } // update (dt) {},

});

cc._RF.pop();