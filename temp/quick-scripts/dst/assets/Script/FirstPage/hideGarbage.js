
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FirstPage/hideGarbage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99c5eCxKmxPGpQZp7571Jzw', 'hideGarbage');
// Script/FirstPage/hideGarbage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    garbage1: cc.Node,
    garbage2: cc.Node,
    garbage3: cc.Node,
    garbage4: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.garbage1.active = false;
    this.garbage2.active = false;
    this.garbage3.active = false;
    this.garbage4.active = false;
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGaXJzdFBhZ2VcXGhpZGVHYXJiYWdlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2FyYmFnZTEiLCJOb2RlIiwiZ2FyYmFnZTIiLCJnYXJiYWdlMyIsImdhcmJhZ2U0Iiwib25Mb2FkIiwiYWN0aXZlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUNKLEVBQUUsQ0FBQ0ssSUFESjtBQUVSQyxJQUFBQSxRQUFRLEVBQUNOLEVBQUUsQ0FBQ0ssSUFGSjtBQUdSRSxJQUFBQSxRQUFRLEVBQUNQLEVBQUUsQ0FBQ0ssSUFISjtBQUlSRyxJQUFBQSxRQUFRLEVBQUNSLEVBQUUsQ0FBQ0s7QUFKSixHQUhQO0FBVUw7QUFFQUksRUFBQUEsTUFaSyxvQkFZSztBQUNOLFNBQUtMLFFBQUwsQ0FBY00sTUFBZCxHQUF1QixLQUF2QjtBQUNBLFNBQUtKLFFBQUwsQ0FBY0ksTUFBZCxHQUF1QixLQUF2QjtBQUNBLFNBQUtILFFBQUwsQ0FBY0csTUFBZCxHQUF1QixLQUF2QjtBQUNBLFNBQUtGLFFBQUwsQ0FBY0UsTUFBZCxHQUF1QixLQUF2QjtBQUNILEdBakJJO0FBbUJMQyxFQUFBQSxLQW5CSyxtQkFtQkksQ0FFUixDQXJCSSxDQXVCTDs7QUF2QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdhcmJhZ2UxOmNjLk5vZGUsXHJcbiAgICAgICAgZ2FyYmFnZTI6Y2MuTm9kZSxcclxuICAgICAgICBnYXJiYWdlMzpjYy5Ob2RlLFxyXG4gICAgICAgIGdhcmJhZ2U0OmNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5nYXJiYWdlMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhcmJhZ2UyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FyYmFnZTMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYXJiYWdlNC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=