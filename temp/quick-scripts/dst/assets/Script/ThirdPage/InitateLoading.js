
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/InitateLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd375ca9bCJIpq4BorP9gsVo', 'InitateLoading');
// Script/ThirdPage/InitateLoading.js

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
    prefab: {
      "default": null,
      type: cc.Prefab
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.scheduleOnce(function () {
      var node1 = cc.instantiate(this.prefab);
      this.node.parent.addChild(node1);
      this.scheduleOnce(function () {
        node1.destroy();
      }, 2);
    }, 0);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXEluaXRhdGVMb2FkaW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJlZmFiIiwidHlwZSIsIlByZWZhYiIsInN0YXJ0Iiwic2NoZWR1bGVPbmNlIiwibm9kZTEiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJwYXJlbnQiLCJhZGRDaGlsZCIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUM7QUFDSCxpQkFBUSxJQURMO0FBRUhDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZMO0FBREMsR0FIUDtBQVVMO0FBRUE7QUFFQUMsRUFBQUEsS0FkSyxtQkFjSTtBQUNMLFNBQUtDLFlBQUwsQ0FBa0IsWUFBVTtBQUN4QixVQUFJQyxLQUFLLEdBQUdULEVBQUUsQ0FBQ1UsV0FBSCxDQUFlLEtBQUtOLE1BQXBCLENBQVo7QUFDQSxXQUFLTyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFFBQWpCLENBQTBCSixLQUExQjtBQUNBLFdBQUtELFlBQUwsQ0FBa0IsWUFBVTtBQUN4QkMsUUFBQUEsS0FBSyxDQUFDSyxPQUFOO0FBQ0gsT0FGRCxFQUVFLENBRkY7QUFHSCxLQU5ELEVBTUUsQ0FORjtBQVFILEdBdkJJLENBeUJMOztBQXpCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJlZmFiOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBub2RlMSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChub2RlMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBub2RlMS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sMik7XHJcbiAgICAgICAgfSwwKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=