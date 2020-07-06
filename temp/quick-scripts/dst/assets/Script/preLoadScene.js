
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/preLoadScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a7a3h9fFtHKbJrRkLpXXj2', 'preLoadScene');
// Script/preLoadScene.js

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
    preLoadFirstPage1();
    preLoadIsJump();
    preLoadThirdPage();
    preLoadTutorialPage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwcmVMb2FkU2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmaXJzdFBhZ2UxIiwiaXNKdW1wIiwidGhpcmRQYWdlIiwidHV0b3JpYWxQYWdlIiwic3RhcnQiLCJwcmVMb2FkRmlyc3RQYWdlMSIsInByZUxvYWRJc0p1bXAiLCJwcmVMb2FkVGhpcmRQYWdlIiwicHJlTG9hZFR1dG9yaWFsUGFnZSIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUMsWUFESDtBQUVSQyxJQUFBQSxNQUFNLEVBQUMsUUFGQztBQUdSQyxJQUFBQSxTQUFTLEVBQUMsV0FIRjtBQUlSQyxJQUFBQSxZQUFZLEVBQUM7QUFKTCxHQUhQO0FBVUw7QUFFQTtBQUVBQyxFQUFBQSxLQWRLLG1CQWNJO0FBQ0xDLElBQUFBLGlCQUFpQjtBQUNqQkMsSUFBQUEsYUFBYTtBQUNiQyxJQUFBQSxnQkFBZ0I7QUFDaEJDLElBQUFBLG1CQUFtQjtBQUN0QixHQW5CSTtBQXFCTEgsRUFBQUEsaUJBckJLLCtCQXNCTDtBQUNJVCxJQUFBQSxFQUFFLENBQUNhLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixLQUFLVixVQUE5QixFQUF5QyxZQUFVO0FBQy9DSixNQUFBQSxFQUFFLENBQUNlLEdBQUgsQ0FBTyxrQkFBUDtBQUNILEtBRkQ7QUFHSCxHQTFCSTtBQTJCTEwsRUFBQUEsYUEzQkssMkJBNEJMO0FBQ0lWLElBQUFBLEVBQUUsQ0FBQ2EsUUFBSCxDQUFZQyxZQUFaLENBQXlCLEtBQUtULE1BQTlCLEVBQXFDLFlBQVU7QUFDM0NMLE1BQUFBLEVBQUUsQ0FBQ2UsR0FBSCxDQUFPLGNBQVA7QUFDSCxLQUZEO0FBR0gsR0FoQ0k7QUFpQ0xKLEVBQUFBLGdCQWpDSyw4QkFrQ0w7QUFDSVgsSUFBQUEsRUFBRSxDQUFDYSxRQUFILENBQVlDLFlBQVosQ0FBeUIsS0FBS1IsU0FBOUIsRUFBd0MsWUFBVTtBQUM5Q04sTUFBQUEsRUFBRSxDQUFDZSxHQUFILENBQU8saUJBQVA7QUFDSCxLQUZEO0FBR0gsR0F0Q0k7QUF1Q0xILEVBQUFBLG1CQXZDSyxpQ0F3Q0w7QUFDSVosSUFBQUEsRUFBRSxDQUFDYSxRQUFILENBQVlDLFlBQVosQ0FBeUIsS0FBS1AsWUFBOUIsRUFBMkMsWUFBVTtBQUNqRFAsTUFBQUEsRUFBRSxDQUFDZSxHQUFILENBQU8sb0JBQVA7QUFDSCxLQUZEO0FBR0g7QUE1Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/mlL7lnKjmr4/kuKrlnLrmma/nmoRDYW52YXPkuIrvvIxcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBmaXJzdFBhZ2UxOlwiZmlyc3RQYWdlMVwiLFxyXG4gICAgICAgIGlzSnVtcDpcImlzSnVtcFwiLFxyXG4gICAgICAgIHRoaXJkUGFnZTpcInRoaXJkUGFnZVwiLFxyXG4gICAgICAgIHR1dG9yaWFsUGFnZTpcInR1dG9yaWFsUGFnZVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHByZUxvYWRGaXJzdFBhZ2UxKCk7XHJcbiAgICAgICAgcHJlTG9hZElzSnVtcCgpO1xyXG4gICAgICAgIHByZUxvYWRUaGlyZFBhZ2UoKTtcclxuICAgICAgICBwcmVMb2FkVHV0b3JpYWxQYWdlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHByZUxvYWRGaXJzdFBhZ2UxKClcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy5maXJzdFBhZ2UxLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcImZpcnN0UGFnZTHpooTliqDovb3lrozmr5XvvIFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcHJlTG9hZElzSnVtcCgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuaXNKdW1wLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcImlzSnVtcOmihOWKoOi9veWujOavle+8gVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwcmVMb2FkVGhpcmRQYWdlKClcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy50aGlyZFBhZ2UsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2MubG9nKFwidGhpcmRQYWdl6aKE5Yqg6L295a6M5q+V77yBXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHByZUxvYWRUdXRvcmlhbFBhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSh0aGlzLnR1dG9yaWFsUGFnZSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJ0dXRvcmlhbFBhZ2XpooTliqDovb3lrozmr5XvvIFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=