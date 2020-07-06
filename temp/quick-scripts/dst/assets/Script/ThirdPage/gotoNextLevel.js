
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/gotoNextLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '712409FP1RLC6AgurNCePMo', 'gotoNextLevel');
// Script/ThirdPage/gotoNextLevel.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.parent = cc.find("Canvas/background/blockLayoutParent").getComponent("Initate");
  },
  onButtonCLickGoNextLevel: function onButtonCLickGoNextLevel() {
    this.parent.gotoNextLevel();
    this.node.parent.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXGdvdG9OZXh0TGV2ZWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInBhcmVudCIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJvbkJ1dHRvbkNMaWNrR29OZXh0TGV2ZWwiLCJnb3RvTmV4dExldmVsIiwibm9kZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBUUxDLEVBQUFBLEtBUkssbUJBUUk7QUFDTCxTQUFLQyxNQUFMLEdBQWNMLEVBQUUsQ0FBQ00sSUFBSCxDQUFRLHFDQUFSLEVBQStDQyxZQUEvQyxDQUE0RCxTQUE1RCxDQUFkO0FBQ0gsR0FWSTtBQVlMQyxFQUFBQSx3QkFaSyxzQ0FhTDtBQUVJLFNBQUtILE1BQUwsQ0FBWUksYUFBWjtBQUNBLFNBQUtDLElBQUwsQ0FBVUwsTUFBVixDQUFpQk0sT0FBakI7QUFDSDtBQWpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kL2Jsb2NrTGF5b3V0UGFyZW50XCIpLmdldENvbXBvbmVudChcIkluaXRhdGVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQnV0dG9uQ0xpY2tHb05leHRMZXZlbCgpXHJcbiAgICB7ICAgXHJcblxyXG4gICAgICAgIHRoaXMucGFyZW50LmdvdG9OZXh0TGV2ZWwoKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmRlc3Ryb3koKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==