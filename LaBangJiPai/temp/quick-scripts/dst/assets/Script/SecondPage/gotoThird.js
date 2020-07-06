
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SecondPage/gotoThird.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df286G6AWBNTJlE6Ev/JouE', 'gotoThird');
// Script/SecondPage/gotoThird.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scene: ""
  },
  onload: function onload() {// cc.loader.downloader.loadSubpackage('ThirdPage',function(err){
    //     if(err)
    //     {
    //         return cc.error(err);
    //     }
    //     cc.log('Load SubPackage3 Successfully');
    // });
  },
  changeScene: function changeScene() {
    cc.director.loadScene(this.scene, function () {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTZWNvbmRQYWdlXFxnb3RvVGhpcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzY2VuZSIsIm9ubG9hZCIsImNoYW5nZVNjZW5lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUM7QUFERSxHQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUcsQ0FDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBZEk7QUFlTEMsRUFBQUEsV0FBVyxFQUFDLHVCQUFVO0FBQ2xCTixJQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixLQUFLSixLQUEzQixFQUFpQyxZQUFVLENBRTFDLENBRkQ7QUFHSCxHQW5CSSxDQXFCTDs7QUFyQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzY2VuZTpcIlwiLFxyXG4gICAgfSxcclxuICAgIG9ubG9hZCgpe1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5kb3dubG9hZGVyLmxvYWRTdWJwYWNrYWdlKCdUaGlyZFBhZ2UnLGZ1bmN0aW9uKGVycil7XHJcbiAgICAgICAgLy8gICAgIGlmKGVycilcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY2MubG9nKCdMb2FkIFN1YlBhY2thZ2UzIFN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNjZW5lOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuc2NlbmUsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=