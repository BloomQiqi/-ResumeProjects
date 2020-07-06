
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FirstPage/loadSubpackage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd91f51679FKz7qVT86AyLWA', 'loadSubpackage');
// Script/FirstPage/loadSubpackage.js

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
    this.scheduleOnce(function () {
      cc.loader.downloader.loadSubpackage('ThirdPage', function (err) {
        if (err) {
          return cc.error(err);
        }

        cc.log('Load SubPackage1 Successfully');
      });
      cc.loader.downloader.loadSubpackage('music', function (err) {
        if (err) {
          return cc.error(err);
        }

        cc.log('Load SubPackage2 Successfully');
      });
      cc.loader.downloader.loadSubpackage('lifeSpriteFrame', function (err) {
        if (err) {
          return cc.error(err);
        }

        cc.log('Load SubPackage3 Successfully');
      });
      cc.loader.downloader.loadSubpackage('FirstPage', function (err) {
        if (err) {
          return cc.error(err);
        }

        cc.log('Load SubPackage4 Successfully');
      }); // cc.loader.downloader.loadSubpackage('kitchenGarbage',function(err){
      //     if(err)
      //     {
      //         return cc.error(err);
      //     }
      //     cc.log('Load SubPackage3 Successfully');
      // });
    }, 0.1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGaXJzdFBhZ2VcXGxvYWRTdWJwYWNrYWdlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJzY2hlZHVsZU9uY2UiLCJsb2FkZXIiLCJkb3dubG9hZGVyIiwibG9hZFN1YnBhY2thZ2UiLCJlcnIiLCJlcnJvciIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsS0FQSyxtQkFPSTtBQUNMLFNBQUtDLFlBQUwsQ0FBa0IsWUFBVTtBQUN4QkwsTUFBQUEsRUFBRSxDQUFDTSxNQUFILENBQVVDLFVBQVYsQ0FBcUJDLGNBQXJCLENBQW9DLFdBQXBDLEVBQWdELFVBQVNDLEdBQVQsRUFBYTtBQUN6RCxZQUFHQSxHQUFILEVBQ0E7QUFDSSxpQkFBT1QsRUFBRSxDQUFDVSxLQUFILENBQVNELEdBQVQsQ0FBUDtBQUNIOztBQUNEVCxRQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBTywrQkFBUDtBQUNILE9BTkQ7QUFPQVgsTUFBQUEsRUFBRSxDQUFDTSxNQUFILENBQVVDLFVBQVYsQ0FBcUJDLGNBQXJCLENBQW9DLE9BQXBDLEVBQTRDLFVBQVNDLEdBQVQsRUFBYTtBQUNyRCxZQUFHQSxHQUFILEVBQ0E7QUFDSSxpQkFBT1QsRUFBRSxDQUFDVSxLQUFILENBQVNELEdBQVQsQ0FBUDtBQUNIOztBQUNEVCxRQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBTywrQkFBUDtBQUNILE9BTkQ7QUFPQVgsTUFBQUEsRUFBRSxDQUFDTSxNQUFILENBQVVDLFVBQVYsQ0FBcUJDLGNBQXJCLENBQW9DLGlCQUFwQyxFQUFzRCxVQUFTQyxHQUFULEVBQWE7QUFDL0QsWUFBR0EsR0FBSCxFQUNBO0FBQ0ksaUJBQU9ULEVBQUUsQ0FBQ1UsS0FBSCxDQUFTRCxHQUFULENBQVA7QUFDSDs7QUFDRFQsUUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU8sK0JBQVA7QUFDSCxPQU5EO0FBT0FYLE1BQUFBLEVBQUUsQ0FBQ00sTUFBSCxDQUFVQyxVQUFWLENBQXFCQyxjQUFyQixDQUFvQyxXQUFwQyxFQUFnRCxVQUFTQyxHQUFULEVBQWE7QUFDekQsWUFBR0EsR0FBSCxFQUNBO0FBQ0ksaUJBQU9ULEVBQUUsQ0FBQ1UsS0FBSCxDQUFTRCxHQUFULENBQVA7QUFDSDs7QUFDRFQsUUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU8sK0JBQVA7QUFDSCxPQU5ELEVBdEJ3QixDQThCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxLQXJDRCxFQXFDRSxHQXJDRjtBQXNDSCxHQTlDSSxDQWdETDs7QUFoREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5kb3dubG9hZGVyLmxvYWRTdWJwYWNrYWdlKCdUaGlyZFBhZ2UnLGZ1bmN0aW9uKGVycil7XHJcbiAgICAgICAgICAgICAgICBpZihlcnIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coJ0xvYWQgU3ViUGFja2FnZTEgU3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIuZG93bmxvYWRlci5sb2FkU3VicGFja2FnZSgnbXVzaWMnLGZ1bmN0aW9uKGVycil7XHJcbiAgICAgICAgICAgICAgICBpZihlcnIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coJ0xvYWQgU3ViUGFja2FnZTIgU3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIuZG93bmxvYWRlci5sb2FkU3VicGFja2FnZSgnbGlmZVNwcml0ZUZyYW1lJyxmdW5jdGlvbihlcnIpe1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2MubG9nKCdMb2FkIFN1YlBhY2thZ2UzIFN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmRvd25sb2FkZXIubG9hZFN1YnBhY2thZ2UoJ0ZpcnN0UGFnZScsZnVuY3Rpb24oZXJyKXtcclxuICAgICAgICAgICAgICAgIGlmKGVycilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLmxvZygnTG9hZCBTdWJQYWNrYWdlNCBTdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIuZG93bmxvYWRlci5sb2FkU3VicGFja2FnZSgna2l0Y2hlbkdhcmJhZ2UnLGZ1bmN0aW9uKGVycil7XHJcbiAgICAgICAgICAgIC8vICAgICBpZihlcnIpXHJcbiAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICBjYy5sb2coJ0xvYWQgU3ViUGFja2FnZTMgU3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgIH0sMC4xKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=