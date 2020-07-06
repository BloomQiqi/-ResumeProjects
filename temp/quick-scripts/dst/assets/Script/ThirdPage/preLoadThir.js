
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/preLoadThir.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '150db5qcstKuaPSjThBX5ac', 'preLoadThir');
// Script/ThirdPage/preLoadThir.js

"use strict";

//放在每个场景的Canvas上，
cc.Class({
  "extends": cc.Component,
  properties: {
    firstPage1: "firstPage1",
    isJump: "isJump",
    thirdPage: "thirdPage",
    tutorialPage: "tutorialPage"
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.preLoadFirstPage1(); //this.preLoadThirdPage();
  },
  preLoadFirstPage1: function preLoadFirstPage1() {
    cc.director.preloadScene(this.firstPage1, function () {
      cc.log("firstPage1预加载完毕！");
    });
  },
  preLoadIsJump: function preLoadIsJump() {
    cc.director.preloadScene(this.isJump, function () {
      cc.log("isJump预加载完毕！");
    });
  },
  preLoadThirdPage: function preLoadThirdPage() {
    cc.director.preloadScene(this.thirdPage, function () {
      cc.log("thirdPage预加载完毕！");
    });
  },
  preLoadTutorialPage: function preLoadTutorialPage() {
    cc.director.preloadScene(this.tutorialPage, function () {
      cc.log("tutorialPage预加载完毕！");
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXHByZUxvYWRUaGlyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZmlyc3RQYWdlMSIsImlzSnVtcCIsInRoaXJkUGFnZSIsInR1dG9yaWFsUGFnZSIsInN0YXJ0IiwicHJlTG9hZEZpcnN0UGFnZTEiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsImxvZyIsInByZUxvYWRJc0p1bXAiLCJwcmVMb2FkVGhpcmRQYWdlIiwicHJlTG9hZFR1dG9yaWFsUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFDLFlBREg7QUFFUkMsSUFBQUEsTUFBTSxFQUFDLFFBRkM7QUFHUkMsSUFBQUEsU0FBUyxFQUFDLFdBSEY7QUFJUkMsSUFBQUEsWUFBWSxFQUFDO0FBSkwsR0FIUDtBQVVMO0FBRUE7QUFFQUMsRUFBQUEsS0FkSyxtQkFjSTtBQUNMLFNBQUtDLGlCQUFMLEdBREssQ0FFTDtBQUVILEdBbEJJO0FBb0JMQSxFQUFBQSxpQkFwQkssK0JBcUJMO0FBQ0lULElBQUFBLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZQyxZQUFaLENBQXlCLEtBQUtQLFVBQTlCLEVBQXlDLFlBQVU7QUFDL0NKLE1BQUFBLEVBQUUsQ0FBQ1ksR0FBSCxDQUFPLGtCQUFQO0FBQ0gsS0FGRDtBQUdILEdBekJJO0FBMEJMQyxFQUFBQSxhQTFCSywyQkEyQkw7QUFDSWIsSUFBQUEsRUFBRSxDQUFDVSxRQUFILENBQVlDLFlBQVosQ0FBeUIsS0FBS04sTUFBOUIsRUFBcUMsWUFBVTtBQUMzQ0wsTUFBQUEsRUFBRSxDQUFDWSxHQUFILENBQU8sY0FBUDtBQUNILEtBRkQ7QUFHSCxHQS9CSTtBQWdDTEUsRUFBQUEsZ0JBaENLLDhCQWlDTDtBQUNJZCxJQUFBQSxFQUFFLENBQUNVLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixLQUFLTCxTQUE5QixFQUF3QyxZQUFVO0FBQzlDTixNQUFBQSxFQUFFLENBQUNZLEdBQUgsQ0FBTyxpQkFBUDtBQUNILEtBRkQ7QUFHSCxHQXJDSTtBQXNDTEcsRUFBQUEsbUJBdENLLGlDQXVDTDtBQUNJZixJQUFBQSxFQUFFLENBQUNVLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixLQUFLSixZQUE5QixFQUEyQyxZQUFVO0FBQ2pEUCxNQUFBQSxFQUFFLENBQUNZLEdBQUgsQ0FBTyxvQkFBUDtBQUNILEtBRkQ7QUFHSDtBQTNDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+aUvuWcqOavj+S4quWcuuaZr+eahENhbnZhc+S4iu+8jFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGZpcnN0UGFnZTE6XCJmaXJzdFBhZ2UxXCIsXHJcbiAgICAgICAgaXNKdW1wOlwiaXNKdW1wXCIsXHJcbiAgICAgICAgdGhpcmRQYWdlOlwidGhpcmRQYWdlXCIsXHJcbiAgICAgICAgdHV0b3JpYWxQYWdlOlwidHV0b3JpYWxQYWdlXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVMb2FkRmlyc3RQYWdlMSgpO1xyXG4gICAgICAgIC8vdGhpcy5wcmVMb2FkVGhpcmRQYWdlKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBwcmVMb2FkRmlyc3RQYWdlMSgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuZmlyc3RQYWdlMSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJmaXJzdFBhZ2Ux6aKE5Yqg6L295a6M5q+V77yBXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHByZUxvYWRJc0p1bXAoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSh0aGlzLmlzSnVtcCxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJpc0p1bXDpooTliqDovb3lrozmr5XvvIFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcHJlTG9hZFRoaXJkUGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMudGhpcmRQYWdlLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInRoaXJkUGFnZemihOWKoOi9veWujOavle+8gVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwcmVMb2FkVHV0b3JpYWxQYWdlKClcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy50dXRvcmlhbFBhZ2UsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2MubG9nKFwidHV0b3JpYWxQYWdl6aKE5Yqg6L295a6M5q+V77yBXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19