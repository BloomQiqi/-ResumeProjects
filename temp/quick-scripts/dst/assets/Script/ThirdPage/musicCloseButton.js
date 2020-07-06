
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/musicCloseButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e848d8G35KJp0fq/rnOKZl', 'musicCloseButton');
// Script/ThirdPage/musicCloseButton.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    openMusicSprite: cc.SpriteFrame,
    closeMusicSprite: cc.SpriteFrame,
    flag: {
      //0代表open   1代表close
      "default": 0,
      type: cc.Integer,
      tooltip: "0代表open   1代表close"
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var button = this.node.getComponent(cc.Button);

    if (musicFlag == 1) //如果 音乐是关闭的状态 更改为关闭的图片
      {
        button.normalSprite = this.closeMusicSprite;
        button.pressedSprite = this.closeMusicSprite;
        button.hoverSprite = this.closeMusicSprite;
      } else {
      button.normalSprite = this.openMusicSprite;
      button.pressedSprite = this.openMusicSprite;
      button.hoverSprite = this.openMusicSprite;
    }
  },
  changeStatue: function changeStatue() {
    var button = this.node.getComponent(cc.Button);

    if (musicFlag == 0) {
      cc.log(musicVolum);
      musicVolum = 0;
      button.normalSprite = this.closeMusicSprite;
      button.pressedSprite = this.closeMusicSprite;
      button.hoverSprite = this.closeMusicSprite;
      musicFlag = 1;
      cc.log(musicVolum);
    } else {
      musicVolum = 1;
      button.normalSprite = this.openMusicSprite;
      button.pressedSprite = this.openMusicSprite;
      button.hoverSprite = this.openMusicSprite;
      musicFlag = 0;
      cc.log(musicVolum);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXG11c2ljQ2xvc2VCdXR0b24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvcGVuTXVzaWNTcHJpdGUiLCJTcHJpdGVGcmFtZSIsImNsb3NlTXVzaWNTcHJpdGUiLCJmbGFnIiwidHlwZSIsIkludGVnZXIiLCJ0b29sdGlwIiwib25Mb2FkIiwiYnV0dG9uIiwibm9kZSIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsIm11c2ljRmxhZyIsIm5vcm1hbFNwcml0ZSIsInByZXNzZWRTcHJpdGUiLCJob3ZlclNwcml0ZSIsImNoYW5nZVN0YXR1ZSIsImxvZyIsIm11c2ljVm9sdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxlQUFlLEVBQUNKLEVBQUUsQ0FBQ0ssV0FEWDtBQUVSQyxJQUFBQSxnQkFBZ0IsRUFBQ04sRUFBRSxDQUFDSyxXQUZaO0FBSVJFLElBQUFBLElBQUksRUFBQztBQUFTO0FBQ1YsaUJBQVEsQ0FEUDtBQUVEQyxNQUFBQSxJQUFJLEVBQUNSLEVBQUUsQ0FBQ1MsT0FGUDtBQUdEQyxNQUFBQSxPQUFPLEVBQUM7QUFIUDtBQUpHLEdBSFA7QUFjTDtBQUVBQyxFQUFBQSxNQWhCSyxvQkFnQks7QUFDTixRQUFJQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCZCxFQUFFLENBQUNlLE1BQTFCLENBQWI7O0FBQ0EsUUFBR0MsU0FBUyxJQUFJLENBQWhCLEVBQW9CO0FBQ3BCO0FBQ0lKLFFBQUFBLE1BQU0sQ0FBQ0ssWUFBUCxHQUFzQixLQUFLWCxnQkFBM0I7QUFDQU0sUUFBQUEsTUFBTSxDQUFDTSxhQUFQLEdBQXVCLEtBQUtaLGdCQUE1QjtBQUNBTSxRQUFBQSxNQUFNLENBQUNPLFdBQVAsR0FBcUIsS0FBS2IsZ0JBQTFCO0FBQ0gsT0FMRCxNQU9BO0FBQ0lNLE1BQUFBLE1BQU0sQ0FBQ0ssWUFBUCxHQUFzQixLQUFLYixlQUEzQjtBQUNBUSxNQUFBQSxNQUFNLENBQUNNLGFBQVAsR0FBdUIsS0FBS2QsZUFBNUI7QUFDQVEsTUFBQUEsTUFBTSxDQUFDTyxXQUFQLEdBQXFCLEtBQUtmLGVBQTFCO0FBQ0g7QUFDSixHQTlCSTtBQWdDTGdCLEVBQUFBLFlBaENLLDBCQWdDUztBQUNWLFFBQUlSLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJkLEVBQUUsQ0FBQ2UsTUFBMUIsQ0FBYjs7QUFDQSxRQUFHQyxTQUFTLElBQUksQ0FBaEIsRUFDQTtBQUNJaEIsTUFBQUEsRUFBRSxDQUFDcUIsR0FBSCxDQUFPQyxVQUFQO0FBQ0FBLE1BQUFBLFVBQVUsR0FBRyxDQUFiO0FBQ0FWLE1BQUFBLE1BQU0sQ0FBQ0ssWUFBUCxHQUFzQixLQUFLWCxnQkFBM0I7QUFDQU0sTUFBQUEsTUFBTSxDQUFDTSxhQUFQLEdBQXVCLEtBQUtaLGdCQUE1QjtBQUNBTSxNQUFBQSxNQUFNLENBQUNPLFdBQVAsR0FBcUIsS0FBS2IsZ0JBQTFCO0FBQ0FVLE1BQUFBLFNBQVMsR0FBRyxDQUFaO0FBQ0FoQixNQUFBQSxFQUFFLENBQUNxQixHQUFILENBQU9DLFVBQVA7QUFDSCxLQVRELE1BV0E7QUFDSUEsTUFBQUEsVUFBVSxHQUFHLENBQWI7QUFDQVYsTUFBQUEsTUFBTSxDQUFDSyxZQUFQLEdBQXNCLEtBQUtiLGVBQTNCO0FBQ0FRLE1BQUFBLE1BQU0sQ0FBQ00sYUFBUCxHQUF1QixLQUFLZCxlQUE1QjtBQUNBUSxNQUFBQSxNQUFNLENBQUNPLFdBQVAsR0FBcUIsS0FBS2YsZUFBMUI7QUFDQVksTUFBQUEsU0FBUyxHQUFHLENBQVo7QUFDQWhCLE1BQUFBLEVBQUUsQ0FBQ3FCLEdBQUgsQ0FBT0MsVUFBUDtBQUNIO0FBQ0osR0FyREksQ0F1REw7O0FBdkRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvcGVuTXVzaWNTcHJpdGU6Y2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgY2xvc2VNdXNpY1Nwcml0ZTpjYy5TcHJpdGVGcmFtZSxcclxuXHJcbiAgICAgICAgZmxhZzp7ICAgICAgICAvLzDku6PooahvcGVuICAgMeS7o+ihqGNsb3NlXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6MCxcclxuICAgICAgICAgICAgdHlwZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICB0b29sdGlwOlwiMOS7o+ihqG9wZW4gICAx5Luj6KGoY2xvc2VcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIGlmKG11c2ljRmxhZyA9PSAxKSAgLy/lpoLmnpwg6Z+z5LmQ5piv5YWz6Zet55qE54q25oCBIOabtOaUueS4uuWFs+mXreeahOWbvueJh1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnV0dG9uLm5vcm1hbFNwcml0ZSA9IHRoaXMuY2xvc2VNdXNpY1Nwcml0ZTtcclxuICAgICAgICAgICAgYnV0dG9uLnByZXNzZWRTcHJpdGUgPSB0aGlzLmNsb3NlTXVzaWNTcHJpdGU7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5ob3ZlclNwcml0ZSA9IHRoaXMuY2xvc2VNdXNpY1Nwcml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnV0dG9uLm5vcm1hbFNwcml0ZSA9IHRoaXMub3Blbk11c2ljU3ByaXRlO1xyXG4gICAgICAgICAgICBidXR0b24ucHJlc3NlZFNwcml0ZSA9IHRoaXMub3Blbk11c2ljU3ByaXRlO1xyXG4gICAgICAgICAgICBidXR0b24uaG92ZXJTcHJpdGUgPSB0aGlzLm9wZW5NdXNpY1Nwcml0ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZVN0YXR1ZSgpe1xyXG4gICAgICAgIHZhciBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgaWYobXVzaWNGbGFnID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5sb2cobXVzaWNWb2x1bSk7XHJcbiAgICAgICAgICAgIG11c2ljVm9sdW0gPSAwO1xyXG4gICAgICAgICAgICBidXR0b24ubm9ybWFsU3ByaXRlID0gdGhpcy5jbG9zZU11c2ljU3ByaXRlO1xyXG4gICAgICAgICAgICBidXR0b24ucHJlc3NlZFNwcml0ZSA9IHRoaXMuY2xvc2VNdXNpY1Nwcml0ZTtcclxuICAgICAgICAgICAgYnV0dG9uLmhvdmVyU3ByaXRlID0gdGhpcy5jbG9zZU11c2ljU3ByaXRlO1xyXG4gICAgICAgICAgICBtdXNpY0ZsYWcgPSAxO1xyXG4gICAgICAgICAgICBjYy5sb2cobXVzaWNWb2x1bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG11c2ljVm9sdW0gPSAxO1xyXG4gICAgICAgICAgICBidXR0b24ubm9ybWFsU3ByaXRlID0gdGhpcy5vcGVuTXVzaWNTcHJpdGU7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wcmVzc2VkU3ByaXRlID0gdGhpcy5vcGVuTXVzaWNTcHJpdGU7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5ob3ZlclNwcml0ZSA9IHRoaXMub3Blbk11c2ljU3ByaXRlO1xyXG4gICAgICAgICAgICBtdXNpY0ZsYWcgPSAwO1xyXG4gICAgICAgICAgICBjYy5sb2cobXVzaWNWb2x1bSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19