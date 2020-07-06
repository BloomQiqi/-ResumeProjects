
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/isJump/preLoadJsjump.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95da4zCaAFMGapPdYzldrn2', 'preLoadJsjump');
// Script/isJump/preLoadJsjump.js

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
    this.preLoadThirdPage();
    this.preLoadTutorialPage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxpc0p1bXBcXHByZUxvYWRKc2p1bXAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmaXJzdFBhZ2UxIiwiaXNKdW1wIiwidGhpcmRQYWdlIiwidHV0b3JpYWxQYWdlIiwic3RhcnQiLCJwcmVMb2FkVGhpcmRQYWdlIiwicHJlTG9hZFR1dG9yaWFsUGFnZSIsInByZUxvYWRGaXJzdFBhZ2UxIiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJsb2ciLCJwcmVMb2FkSXNKdW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUMsWUFESDtBQUVSQyxJQUFBQSxNQUFNLEVBQUMsUUFGQztBQUdSQyxJQUFBQSxTQUFTLEVBQUMsV0FIRjtBQUlSQyxJQUFBQSxZQUFZLEVBQUM7QUFKTCxHQUhQO0FBVUw7QUFFQTtBQUVBQyxFQUFBQSxLQWRLLG1CQWNJO0FBQ0wsU0FBS0MsZ0JBQUw7QUFDQSxTQUFLQyxtQkFBTDtBQUNILEdBakJJO0FBbUJMQyxFQUFBQSxpQkFuQkssK0JBb0JMO0FBQ0lYLElBQUFBLEVBQUUsQ0FBQ1ksUUFBSCxDQUFZQyxZQUFaLENBQXlCLEtBQUtULFVBQTlCLEVBQXlDLFlBQVU7QUFDL0NKLE1BQUFBLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPLGtCQUFQO0FBQ0gsS0FGRDtBQUdILEdBeEJJO0FBeUJMQyxFQUFBQSxhQXpCSywyQkEwQkw7QUFDSWYsSUFBQUEsRUFBRSxDQUFDWSxRQUFILENBQVlDLFlBQVosQ0FBeUIsS0FBS1IsTUFBOUIsRUFBcUMsWUFBVTtBQUMzQ0wsTUFBQUEsRUFBRSxDQUFDYyxHQUFILENBQU8sY0FBUDtBQUNILEtBRkQ7QUFHSCxHQTlCSTtBQStCTEwsRUFBQUEsZ0JBL0JLLDhCQWdDTDtBQUNJVCxJQUFBQSxFQUFFLENBQUNZLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixLQUFLUCxTQUE5QixFQUF3QyxZQUFVO0FBQzlDTixNQUFBQSxFQUFFLENBQUNjLEdBQUgsQ0FBTyxpQkFBUDtBQUNILEtBRkQ7QUFHSCxHQXBDSTtBQXFDTEosRUFBQUEsbUJBckNLLGlDQXNDTDtBQUNJVixJQUFBQSxFQUFFLENBQUNZLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixLQUFLTixZQUE5QixFQUEyQyxZQUFVO0FBQ2pEUCxNQUFBQSxFQUFFLENBQUNjLEdBQUgsQ0FBTyxvQkFBUDtBQUNILEtBRkQ7QUFHSDtBQTFDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+aUvuWcqOavj+S4quWcuuaZr+eahENhbnZhc+S4iu+8jFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGZpcnN0UGFnZTE6XCJmaXJzdFBhZ2UxXCIsXHJcbiAgICAgICAgaXNKdW1wOlwiaXNKdW1wXCIsXHJcbiAgICAgICAgdGhpcmRQYWdlOlwidGhpcmRQYWdlXCIsXHJcbiAgICAgICAgdHV0b3JpYWxQYWdlOlwidHV0b3JpYWxQYWdlXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVMb2FkVGhpcmRQYWdlKCk7XHJcbiAgICAgICAgdGhpcy5wcmVMb2FkVHV0b3JpYWxQYWdlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHByZUxvYWRGaXJzdFBhZ2UxKClcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy5maXJzdFBhZ2UxLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcImZpcnN0UGFnZTHpooTliqDovb3lrozmr5XvvIFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcHJlTG9hZElzSnVtcCgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuaXNKdW1wLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcImlzSnVtcOmihOWKoOi9veWujOavle+8gVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwcmVMb2FkVGhpcmRQYWdlKClcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy50aGlyZFBhZ2UsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2MubG9nKFwidGhpcmRQYWdl6aKE5Yqg6L295a6M5q+V77yBXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHByZUxvYWRUdXRvcmlhbFBhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSh0aGlzLnR1dG9yaWFsUGFnZSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJ0dXRvcmlhbFBhZ2XpooTliqDovb3lrozmr5XvvIFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=