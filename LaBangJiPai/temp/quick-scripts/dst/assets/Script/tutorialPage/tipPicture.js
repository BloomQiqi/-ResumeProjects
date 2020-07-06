
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/tutorialPage/tipPicture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1272m1aqVNsrbC7LgEBaxs', 'tipPicture');
// Script/tutorialPage/tipPicture.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    tipPicture: cc.Prefab,
    stopButton: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  showTipPicture: function showTipPicture() {
    var _this = this;

    this.stopButton.interactable = false;
    var node = cc.instantiate(this.tipPicture);
    this.node.parent.addChild(node);
    node.on("touchstart", function (event) {
      node.destroy();
      _this.stopButton.interactable = true;
    }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0dXRvcmlhbFBhZ2VcXHRpcFBpY3R1cmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aXBQaWN0dXJlIiwiUHJlZmFiIiwic3RvcEJ1dHRvbiIsIkJ1dHRvbiIsInN0YXJ0Iiwic2hvd1RpcFBpY3R1cmUiLCJpbnRlcmFjdGFibGUiLCJub2RlIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJhZGRDaGlsZCIsIm9uIiwiZXZlbnQiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFDSixFQUFFLENBQUNLLE1BRE47QUFFUkMsSUFBQUEsVUFBVSxFQUFDTixFQUFFLENBQUNPO0FBRk4sR0FIUDtBQVFMO0FBRUE7QUFFQUMsRUFBQUEsS0FaSyxtQkFZSSxDQUVSLENBZEk7QUFnQkxDLEVBQUFBLGNBQWMsRUFBQywwQkFBVTtBQUFBOztBQUNyQixTQUFLSCxVQUFMLENBQWdCSSxZQUFoQixHQUErQixLQUEvQjtBQUNBLFFBQUlDLElBQUksR0FBR1gsRUFBRSxDQUFDWSxXQUFILENBQWUsS0FBS1IsVUFBcEIsQ0FBWDtBQUNBLFNBQUtPLElBQUwsQ0FBVUUsTUFBVixDQUFpQkMsUUFBakIsQ0FBMEJILElBQTFCO0FBR0FBLElBQUFBLElBQUksQ0FBQ0ksRUFBTCxDQUFRLFlBQVIsRUFBcUIsVUFBQUMsS0FBSyxFQUFFO0FBQ3hCTCxNQUFBQSxJQUFJLENBQUNNLE9BQUw7QUFDQSxNQUFBLEtBQUksQ0FBQ1gsVUFBTCxDQUFnQkksWUFBaEIsR0FBK0IsSUFBL0I7QUFDSCxLQUhELEVBR0UsSUFIRjtBQU1ILEdBNUJJLENBNkJMOztBQTdCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGlwUGljdHVyZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgc3RvcEJ1dHRvbjpjYy5CdXR0b24sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93VGlwUGljdHVyZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudGlwUGljdHVyZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbm9kZS5vbihcInRvdWNoc3RhcnRcIixldmVudD0+eyAgICBcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19