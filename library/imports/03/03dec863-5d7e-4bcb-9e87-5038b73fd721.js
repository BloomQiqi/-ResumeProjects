"use strict";
cc._RF.push(module, '03dechjXX5Ly56HUDi3P9ch', 'tipKnowledgeChangeSprite');
// Script/ThirdPage/tipKnowledgeChangeSprite.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var cfg = require("TEXT_tipKnowledge");

cc.Class({
  "extends": cc.Component,
  properties: {
    description: cc.Label,
    garbageNameLabel: cc.Label,
    descriptionRichText: cc.RichText
  },
  // LIFE-CYCLE CALLBACKS:
  start: function start() {
    this.description.string = '';
    this.garbageNameLabel.string = '';
    cc.log(this.garbageNameLabel.enableWrapText);
    var sprite = this.node.getComponent(cc.Sprite);
    sprite.spriteFrame = errorGarbagePhoto;
    cc.log(sprite.spriteFrame.name);
    cc.log(this.garbageNameLabel);
    this.garbageNameLabel.string = sprite.spriteFrame.name;
    var i = 0; // //因为资源并不完善 可能出现问题

    for (; i < cfg.TextKnowledgeTotalName.length; i++) //找到对应图片下标
    {
      if (cfg.TextKnowledgeTotalName[i] == sprite.spriteFrame.name) {
        this.description.string = "       " + cfg.TextKnowledgeDescription[i];
        break; //              this.descriptionRichText.string = cfg.TextKnowledgeDescription[i];
      }
    }
  }
});

cc._RF.pop();