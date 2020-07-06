
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/tipKnowledgeChangeSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXHRpcEtub3dsZWRnZUNoYW5nZVNwcml0ZS5qcyJdLCJuYW1lcyI6WyJjZmciLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkZXNjcmlwdGlvbiIsIkxhYmVsIiwiZ2FyYmFnZU5hbWVMYWJlbCIsImRlc2NyaXB0aW9uUmljaFRleHQiLCJSaWNoVGV4dCIsInN0YXJ0Iiwic3RyaW5nIiwibG9nIiwiZW5hYmxlV3JhcFRleHQiLCJzcHJpdGUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJlcnJvckdhcmJhZ2VQaG90byIsIm5hbWUiLCJpIiwiVGV4dEtub3dsZWRnZVRvdGFsTmFtZSIsImxlbmd0aCIsIlRleHRLbm93bGVkZ2VEZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQyxJQUFJQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQyxtQkFBRCxDQUFqQjs7QUFHREMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBQ0osRUFBRSxDQUFDSyxLQURQO0FBRVJDLElBQUFBLGdCQUFnQixFQUFDTixFQUFFLENBQUNLLEtBRlo7QUFHUkUsSUFBQUEsbUJBQW1CLEVBQUNQLEVBQUUsQ0FBQ1E7QUFIZixHQUhQO0FBU0w7QUFFQUMsRUFBQUEsS0FYSyxtQkFXSTtBQUlMLFNBQUtMLFdBQUwsQ0FBaUJNLE1BQWpCLEdBQTBCLEVBQTFCO0FBQ0EsU0FBS0osZ0JBQUwsQ0FBc0JJLE1BQXRCLEdBQStCLEVBQS9CO0FBR0FWLElBQUFBLEVBQUUsQ0FBQ1csR0FBSCxDQUFPLEtBQUtMLGdCQUFMLENBQXNCTSxjQUE3QjtBQUdBLFFBQUlDLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJmLEVBQUUsQ0FBQ2dCLE1BQTFCLENBQWI7QUFDQUgsSUFBQUEsTUFBTSxDQUFDSSxXQUFQLEdBQXFCQyxpQkFBckI7QUFDQWxCLElBQUFBLEVBQUUsQ0FBQ1csR0FBSCxDQUFPRSxNQUFNLENBQUNJLFdBQVAsQ0FBbUJFLElBQTFCO0FBQ0FuQixJQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBTyxLQUFLTCxnQkFBWjtBQUVBLFNBQUtBLGdCQUFMLENBQXNCSSxNQUF0QixHQUErQkcsTUFBTSxDQUFDSSxXQUFQLENBQW1CRSxJQUFsRDtBQUdBLFFBQUlDLENBQUMsR0FBRyxDQUFSLENBbkJLLENBbUJLOztBQUdWLFdBQUtBLENBQUMsR0FBQ3RCLEdBQUcsQ0FBQ3VCLHNCQUFKLENBQTJCQyxNQUFsQyxFQUF5Q0YsQ0FBQyxFQUExQyxFQUFtRDtBQUNuRDtBQUVJLFVBQUd0QixHQUFHLENBQUN1QixzQkFBSixDQUEyQkQsQ0FBM0IsS0FBZ0NQLE1BQU0sQ0FBQ0ksV0FBUCxDQUFtQkUsSUFBdEQsRUFDQTtBQUVJLGFBQUtmLFdBQUwsQ0FBaUJNLE1BQWpCLEdBQTBCLFlBQVVaLEdBQUcsQ0FBQ3lCLHdCQUFKLENBQTZCSCxDQUE3QixDQUFwQztBQUNBLGNBSEosQ0FJVjtBQUNXO0FBQ0o7QUFDSjtBQTVDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbiB2YXIgY2ZnID0gcmVxdWlyZShcIlRFWFRfdGlwS25vd2xlZGdlXCIpO1xyXG5cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246Y2MuTGFiZWwsXHJcbiAgICAgICAgZ2FyYmFnZU5hbWVMYWJlbDpjYy5MYWJlbCxcclxuICAgICAgICBkZXNjcmlwdGlvblJpY2hUZXh0OmNjLlJpY2hUZXh0LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbi5zdHJpbmcgPSAnJztcclxuICAgICAgICB0aGlzLmdhcmJhZ2VOYW1lTGFiZWwuc3RyaW5nID0gJyc7XHJcblxyXG4gXHJcbiAgICAgICAgY2MubG9nKHRoaXMuZ2FyYmFnZU5hbWVMYWJlbC5lbmFibGVXcmFwVGV4dCk7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGVycm9yR2FyYmFnZVBob3RvO1xyXG4gICAgICAgIGNjLmxvZyhzcHJpdGUuc3ByaXRlRnJhbWUubmFtZSk7XHJcbiAgICAgICAgY2MubG9nKHRoaXMuZ2FyYmFnZU5hbWVMYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FyYmFnZU5hbWVMYWJlbC5zdHJpbmcgPSBzcHJpdGUuc3ByaXRlRnJhbWUubmFtZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGkgPSAwOy8vIC8v5Zug5Li66LWE5rqQ5bm25LiN5a6M5ZaEIOWPr+iDveWHuueOsOmXrumimFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBmb3IoO2k8Y2ZnLlRleHRLbm93bGVkZ2VUb3RhbE5hbWUubGVuZ3RoO2krKykgICAgICAvL+aJvuWIsOWvueW6lOWbvueJh+S4i+agh1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGNmZy5UZXh0S25vd2xlZGdlVG90YWxOYW1lW2ldPT0gc3ByaXRlLnNwcml0ZUZyYW1lLm5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uLnN0cmluZyA9IFwiICAgICAgIFwiK2NmZy5UZXh0S25vd2xlZGdlRGVzY3JpcHRpb25baV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAvLyAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvblJpY2hUZXh0LnN0cmluZyA9IGNmZy5UZXh0S25vd2xlZGdlRGVzY3JpcHRpb25baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19