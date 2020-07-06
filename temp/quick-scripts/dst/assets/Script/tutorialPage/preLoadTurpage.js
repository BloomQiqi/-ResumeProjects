
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/tutorialPage/preLoadTurpage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42c361T7d1LSLuKfZXa0klH', 'preLoadTurpage');
// Script/tutorialPage/preLoadTurpage.js

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
    this.preLoadFirstPage1();
    this.preLoadThirdPage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0dXRvcmlhbFBhZ2VcXHByZUxvYWRUdXJwYWdlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZmlyc3RQYWdlMSIsImlzSnVtcCIsInRoaXJkUGFnZSIsInR1dG9yaWFsUGFnZSIsInN0YXJ0IiwicHJlTG9hZEZpcnN0UGFnZTEiLCJwcmVMb2FkVGhpcmRQYWdlIiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJsb2ciLCJwcmVMb2FkSXNKdW1wIiwicHJlTG9hZFR1dG9yaWFsUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFDLFlBREg7QUFFUkMsSUFBQUEsTUFBTSxFQUFDLFFBRkM7QUFHUkMsSUFBQUEsU0FBUyxFQUFDLFdBSEY7QUFJUkMsSUFBQUEsWUFBWSxFQUFDO0FBSkwsR0FIUDtBQVVMO0FBRUE7QUFFQUMsRUFBQUEsS0FkSyxtQkFjSTtBQUNMLFNBQUtDLGlCQUFMO0FBQ0EsU0FBS0MsZ0JBQUw7QUFDSCxHQWpCSTtBQW1CTEQsRUFBQUEsaUJBbkJLLCtCQW9CTDtBQUNJVCxJQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixLQUFLUixVQUE5QixFQUF5QyxZQUFVO0FBQy9DSixNQUFBQSxFQUFFLENBQUNhLEdBQUgsQ0FBTyxrQkFBUDtBQUNILEtBRkQ7QUFHSCxHQXhCSTtBQXlCTEMsRUFBQUEsYUF6QkssMkJBMEJMO0FBQ0lkLElBQUFBLEVBQUUsQ0FBQ1csUUFBSCxDQUFZQyxZQUFaLENBQXlCLEtBQUtQLE1BQTlCLEVBQXFDLFlBQVU7QUFDM0NMLE1BQUFBLEVBQUUsQ0FBQ2EsR0FBSCxDQUFPLGNBQVA7QUFDSCxLQUZEO0FBR0gsR0E5Qkk7QUErQkxILEVBQUFBLGdCQS9CSyw4QkFnQ0w7QUFDSVYsSUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVlDLFlBQVosQ0FBeUIsS0FBS04sU0FBOUIsRUFBd0MsWUFBVTtBQUM5Q04sTUFBQUEsRUFBRSxDQUFDYSxHQUFILENBQU8saUJBQVA7QUFDSCxLQUZEO0FBR0gsR0FwQ0k7QUFxQ0xFLEVBQUFBLG1CQXJDSyxpQ0FzQ0w7QUFDSWYsSUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVlDLFlBQVosQ0FBeUIsS0FBS0wsWUFBOUIsRUFBMkMsWUFBVTtBQUNqRFAsTUFBQUEsRUFBRSxDQUFDYSxHQUFILENBQU8sb0JBQVA7QUFDSCxLQUZEO0FBR0g7QUExQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/mlL7lnKjmr4/kuKrlnLrmma/nmoRDYW52YXPkuIrvvIxcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBmaXJzdFBhZ2UxOlwiZmlyc3RQYWdlMVwiLFxyXG4gICAgICAgIGlzSnVtcDpcImlzSnVtcFwiLFxyXG4gICAgICAgIHRoaXJkUGFnZTpcInRoaXJkUGFnZVwiLFxyXG4gICAgICAgIHR1dG9yaWFsUGFnZTpcInR1dG9yaWFsUGFnZVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucHJlTG9hZEZpcnN0UGFnZTEoKTtcclxuICAgICAgICB0aGlzLnByZUxvYWRUaGlyZFBhZ2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcHJlTG9hZEZpcnN0UGFnZTEoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSh0aGlzLmZpcnN0UGFnZTEsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2MubG9nKFwiZmlyc3RQYWdlMemihOWKoOi9veWujOavle+8gVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwcmVMb2FkSXNKdW1wKClcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy5pc0p1bXAsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2MubG9nKFwiaXNKdW1w6aKE5Yqg6L295a6M5q+V77yBXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHByZUxvYWRUaGlyZFBhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSh0aGlzLnRoaXJkUGFnZSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJ0aGlyZFBhZ2XpooTliqDovb3lrozmr5XvvIFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcHJlTG9hZFR1dG9yaWFsUGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMudHV0b3JpYWxQYWdlLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInR1dG9yaWFsUGFnZemihOWKoOi9veWujOavle+8gVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==