
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/changeBlockSize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXGNoYW5nZUJsb2NrU2l6ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwid2lkdGgiLCJ3aW5TaXplIiwiaGVpZ2h0IiwidGVtcCIsImJlaXNodSIsImhpIiwidmUiLCJub2RlIiwic2V0U2NhbGUiLCJWZWMyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUtMO0FBRUE7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSztBQUNOO0FBRUEsUUFBSUMsS0FBSyxHQUFHSixFQUFFLENBQUNLLE9BQUgsQ0FBV0QsS0FBdkI7QUFDQSxRQUFJRSxNQUFNLEdBQUdOLEVBQUUsQ0FBQ0ssT0FBSCxDQUFXQyxNQUF4QjtBQUdBLFFBQUlDLElBQUksR0FBR0gsS0FBSyxHQUFHLEdBQW5CO0FBQ0EsUUFBSUksTUFBTSxHQUFHRCxJQUFJLEdBQUUsS0FBbkI7QUFHQSxRQUFJRSxFQUFFLEdBQUdULEVBQUUsQ0FBQ0ssT0FBSCxDQUFXRCxLQUFYLEdBQWlCLEtBQWpCLEdBQXlCLENBQWxDO0FBQ0EsUUFBSU0sRUFBRSxHQUFHVixFQUFFLENBQUNLLE9BQUgsQ0FBV0MsTUFBWCxHQUFrQixNQUFsQixHQUEyQixDQUFwQyxDQVpNLENBY047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0ksU0FBS0ssSUFBTCxDQUFVQyxRQUFWLENBQW1CWixFQUFFLENBQUNhLElBQUgsQ0FBUUwsTUFBUixFQUFlQSxNQUFmLENBQW5CLEVBeEJFLENBeUJOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBeENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vY2MubG9nKHRoaXMubm9kZS53aWR0aCtcIiBcIit0aGlzLm5vZGUuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdmFyIHdpZHRoID0gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgXHJcbiAgICAgICAgdmFyIHRlbXAgPSB3aWR0aCAqIDAuODtcclxuICAgICAgICB2YXIgYmVpc2h1ID0gdGVtcCAvNTcwLjA7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBoaSA9IGNjLndpblNpemUud2lkdGgvNzIwLjAgLSAxO1xyXG4gICAgICAgIHZhciB2ZSA9IGNjLndpblNpemUuaGVpZ2h0LzEyODAuMCAtIDE7XHJcblxyXG4gICAgICAgIC8vIGlmKGhpIDwgMClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGhpID0gLWhpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZih2ZSA8IDApXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICB2ZSA9IC12ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYoaGk+PXZlKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKGNjLlZlYzIoYmVpc2h1LGJlaXNodSkpO1xyXG4gICAgICAgIC8vIH0gXHJcbiAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNldFNjYWxlKGNjLlZlYzIoY2Mud2luU2l6ZS5oZWlnaHQvMTI4MC4wLGNjLndpblNpemUuaGVpZ2h0LzEyODAuMCkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL2NjLmxvZyh0aGlzLm5vZGUuZ2V0U2NhbGUoY2MudjIoKSkpO1xyXG4gICAgfSxcclxuXHJcblxyXG59KTtcclxuIl19