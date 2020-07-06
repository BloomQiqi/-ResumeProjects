
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/tipPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a272dZKpwpMtLIt700JpvyO', 'tipPage');
// Script/ThirdPage/tipPage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    prefab: {
      "default": null,
      type: cc.Prefab
    },
    upFlag: {
      //用于控制只能弹出一个窗口
      "default": false,
      type: cc.Boolean,
      visible: false
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //  点击暂停按钮
  popupPage: function popupPage() {
    var _this = this;

    // cc.log(1);
    if (this.upFlag) //已经弹出了一个
      {
        return;
      }

    cc.log("生成了一个");
    this.upFlag = true;
    var node = cc.instantiate(this.prefab);
    this.node.addChild(node); // node.scale = 0;
    //360.457,649.87

    var pos = this.node.convertToNodeSpaceAR(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
    node.x = pos.x;
    node.y = pos.y; // let scaleTo = cc.scaleTo(0.1,1).easing(cc.easeBounceOut());
    // node.runAction(scaleTo);

    cc.find("Canvas").pauseSystemEvents(true);
    node.on("touchstart", function (event) {
      _this.upFlag = false;
      cc.log("销毁了一个");
      node.destroy();
    }, this);
    cc.find("Canvas").resumeSystemEvents(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXHRpcFBhZ2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwidXBGbGFnIiwiQm9vbGVhbiIsInZpc2libGUiLCJwb3B1cFBhZ2UiLCJsb2ciLCJub2RlIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwidjIiLCJ3aW5TaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsImZpbmQiLCJwYXVzZVN5c3RlbUV2ZW50cyIsIm9uIiwiZXZlbnQiLCJkZXN0cm95IiwicmVzdW1lU3lzdGVtRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFDO0FBQ0gsaUJBQVEsSUFETDtBQUVIQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGTCxLQURDO0FBS1JDLElBQUFBLE1BQU0sRUFBQztBQUFhO0FBQ2hCLGlCQUFRLEtBREw7QUFFSEYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNRLE9BRkw7QUFHSEMsTUFBQUEsT0FBTyxFQUFDO0FBSEw7QUFMQyxHQUhQO0FBZUw7QUFFQTtBQUNBO0FBRUFDLEVBQUFBLFNBQVMsRUFBQyxxQkFBVTtBQUFBOztBQUVqQjtBQUVDLFFBQUcsS0FBS0gsTUFBUixFQUFpQjtBQUNqQjtBQUNJO0FBQ0g7O0FBQ0RQLElBQUFBLEVBQUUsQ0FBQ1csR0FBSCxDQUFPLE9BQVA7QUFDQSxTQUFLSixNQUFMLEdBQWMsSUFBZDtBQUNBLFFBQUlLLElBQUksR0FBR1osRUFBRSxDQUFDYSxXQUFILENBQWUsS0FBS1QsTUFBcEIsQ0FBWDtBQUNBLFNBQUtRLElBQUwsQ0FBVUUsUUFBVixDQUFtQkYsSUFBbkIsRUFYZ0IsQ0FZaEI7QUFDQTs7QUFDQSxRQUFJRyxHQUFHLEdBQUcsS0FBS0gsSUFBTCxDQUFVSSxvQkFBVixDQUErQmhCLEVBQUUsQ0FBQ2lCLEVBQUgsQ0FBTWpCLEVBQUUsQ0FBQ2tCLE9BQUgsQ0FBV0MsS0FBWCxHQUFtQixDQUF6QixFQUEyQm5CLEVBQUUsQ0FBQ2tCLE9BQUgsQ0FBV0UsTUFBWCxHQUFvQixDQUEvQyxDQUEvQixDQUFWO0FBQ0FSLElBQUFBLElBQUksQ0FBQ1MsQ0FBTCxHQUFTTixHQUFHLENBQUNNLENBQWI7QUFDQVQsSUFBQUEsSUFBSSxDQUFDVSxDQUFMLEdBQVNQLEdBQUcsQ0FBQ08sQ0FBYixDQWhCZ0IsQ0FrQmhCO0FBQ0E7O0FBRUF0QixJQUFBQSxFQUFFLENBQUN1QixJQUFILENBQVEsUUFBUixFQUFrQkMsaUJBQWxCLENBQW9DLElBQXBDO0FBQ0FaLElBQUFBLElBQUksQ0FBQ2EsRUFBTCxDQUFRLFlBQVIsRUFBcUIsVUFBQUMsS0FBSyxFQUFFO0FBQ3hCLE1BQUEsS0FBSSxDQUFDbkIsTUFBTCxHQUFjLEtBQWQ7QUFDQVAsTUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU8sT0FBUDtBQUNBQyxNQUFBQSxJQUFJLENBQUNlLE9BQUw7QUFDSCxLQUpELEVBSUUsSUFKRjtBQUtBM0IsSUFBQUEsRUFBRSxDQUFDdUIsSUFBSCxDQUFRLFFBQVIsRUFBa0JLLGtCQUFsQixDQUFxQyxJQUFyQztBQUNILEdBaERJLENBbURMOztBQW5ESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJlZmFiOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwRmxhZzp7ICAgICAgICAgICAgLy/nlKjkuo7mjqfliLblj6rog73lvLnlh7rkuIDkuKrnqpflj6NcclxuICAgICAgICAgICAgZGVmYXVsdDpmYWxzZSxcclxuICAgICAgICAgICAgdHlwZTpjYy5Cb29sZWFuLFxyXG4gICAgICAgICAgICB2aXNpYmxlOmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG4gICAgLy8gIOeCueWHu+aaguWBnOaMiemSrlxyXG4gICAgXHJcbiAgICBwb3B1cFBhZ2U6ZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAvLyBjYy5sb2coMSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudXBGbGFnKSAgLy/lt7Lnu4/lvLnlh7rkuobkuIDkuKpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKFwi55Sf5oiQ5LqG5LiA5LiqXCIpO1xyXG4gICAgICAgIHRoaXMudXBGbGFnID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgLy8gbm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgLy8zNjAuNDU3LDY0OS44N1xyXG4gICAgICAgIHZhciBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoY2Mud2luU2l6ZS53aWR0aCAvIDIsY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSk7XHJcbiAgICAgICAgbm9kZS54ID0gcG9zLng7XHJcbiAgICAgICAgbm9kZS55ID0gcG9zLnk7XHJcblxyXG4gICAgICAgIC8vIGxldCBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjEsMSkuZWFzaW5nKGNjLmVhc2VCb3VuY2VPdXQoKSk7XHJcbiAgICAgICAgLy8gbm9kZS5ydW5BY3Rpb24oc2NhbGVUbyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICBub2RlLm9uKFwidG91Y2hzdGFydFwiLGV2ZW50PT57ICAgIFxyXG4gICAgICAgICAgICB0aGlzLnVwRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5sb2coXCLplIDmr4HkuobkuIDkuKpcIik7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19