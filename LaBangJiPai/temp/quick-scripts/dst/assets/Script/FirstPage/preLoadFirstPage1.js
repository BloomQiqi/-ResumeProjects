
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FirstPage/preLoadFirstPage1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9243byHV4dD+rhc2ZfiM/3i', 'preLoadFirstPage1');
// Script/FirstPage/preLoadFirstPage1.js

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
    this.preLoadIsJump();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGaXJzdFBhZ2VcXHByZUxvYWRGaXJzdFBhZ2UxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZmlyc3RQYWdlMSIsImlzSnVtcCIsInRoaXJkUGFnZSIsInR1dG9yaWFsUGFnZSIsInN0YXJ0IiwicHJlTG9hZElzSnVtcCIsInByZUxvYWRGaXJzdFBhZ2UxIiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJsb2ciLCJwcmVMb2FkVGhpcmRQYWdlIiwicHJlTG9hZFR1dG9yaWFsUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFDLFlBREg7QUFFUkMsSUFBQUEsTUFBTSxFQUFDLFFBRkM7QUFHUkMsSUFBQUEsU0FBUyxFQUFDLFdBSEY7QUFJUkMsSUFBQUEsWUFBWSxFQUFDO0FBSkwsR0FIUDtBQVVMO0FBRUE7QUFFQUMsRUFBQUEsS0FkSyxtQkFjSTtBQUNMLFNBQUtDLGFBQUw7QUFDSCxHQWhCSTtBQWtCTEMsRUFBQUEsaUJBbEJLLCtCQW1CTDtBQUNJVixJQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixLQUFLUixVQUE5QixFQUF5QyxZQUFVO0FBQy9DSixNQUFBQSxFQUFFLENBQUNhLEdBQUgsQ0FBTyxrQkFBUDtBQUNILEtBRkQ7QUFHSCxHQXZCSTtBQXdCTEosRUFBQUEsYUF4QkssMkJBeUJMO0FBQ0lULElBQUFBLEVBQUUsQ0FBQ1csUUFBSCxDQUFZQyxZQUFaLENBQXlCLEtBQUtQLE1BQTlCLEVBQXFDLFlBQVU7QUFDM0NMLE1BQUFBLEVBQUUsQ0FBQ2EsR0FBSCxDQUFPLGNBQVA7QUFDSCxLQUZEO0FBR0gsR0E3Qkk7QUE4QkxDLEVBQUFBLGdCQTlCSyw4QkErQkw7QUFDSWQsSUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVlDLFlBQVosQ0FBeUIsS0FBS04sU0FBOUIsRUFBd0MsWUFBVTtBQUM5Q04sTUFBQUEsRUFBRSxDQUFDYSxHQUFILENBQU8saUJBQVA7QUFDSCxLQUZEO0FBR0gsR0FuQ0k7QUFvQ0xFLEVBQUFBLG1CQXBDSyxpQ0FxQ0w7QUFDSWYsSUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVlDLFlBQVosQ0FBeUIsS0FBS0wsWUFBOUIsRUFBMkMsWUFBVTtBQUNqRFAsTUFBQUEsRUFBRSxDQUFDYSxHQUFILENBQU8sb0JBQVA7QUFDSCxLQUZEO0FBR0g7QUF6Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/mlL7lnKjmr4/kuKrlnLrmma/nmoRDYW52YXPkuIrvvIxcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBmaXJzdFBhZ2UxOlwiZmlyc3RQYWdlMVwiLFxyXG4gICAgICAgIGlzSnVtcDpcImlzSnVtcFwiLFxyXG4gICAgICAgIHRoaXJkUGFnZTpcInRoaXJkUGFnZVwiLFxyXG4gICAgICAgIHR1dG9yaWFsUGFnZTpcInR1dG9yaWFsUGFnZVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucHJlTG9hZElzSnVtcCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcmVMb2FkRmlyc3RQYWdlMSgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuZmlyc3RQYWdlMSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJmaXJzdFBhZ2Ux6aKE5Yqg6L295a6M5q+V77yBXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHByZUxvYWRJc0p1bXAoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSh0aGlzLmlzSnVtcCxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJpc0p1bXDpooTliqDovb3lrozmr5XvvIFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcHJlTG9hZFRoaXJkUGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMudGhpcmRQYWdlLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInRoaXJkUGFnZemihOWKoOi9veWujOavle+8gVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwcmVMb2FkVHV0b3JpYWxQYWdlKClcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy50dXRvcmlhbFBhZ2UsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2MubG9nKFwidHV0b3JpYWxQYWdl6aKE5Yqg6L295a6M5q+V77yBXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19