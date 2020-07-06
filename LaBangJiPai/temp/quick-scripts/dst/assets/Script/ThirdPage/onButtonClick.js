
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/onButtonClick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea951r7b71EbIdPL0BXi/0R', 'onButtonClick');
// Script/ThirdPage/onButtonClick.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    button: cc.Button
  },
  start: function start() {
    this.parent = this.node.getParent().getComponent("Initate"); //cc.log(this.parent);
    // this.node.on('touchstart',this.OnClick(),this);
  },
  OnClick: function OnClick() {
    //  cc.log(this.parent);
    // cc.log(this.parent.levelNum);////////////////////////////////////////////////////////////////////////// 
    var index = this.node.getSiblingIndex(); //获取索引 到底是父节点的那一个子节点被点击
    //判断当前block 处于背景图还是垃圾图

    cc.log("index " + index);

    if (this.parent.isFront[index]) //当前处于背景图
      {
        this.parent.isFront[index] = false;
        this.button.normalSprite = this.parent.garbagePhoto[this.parent.garbageIndex[index]]; //切换button背景图片为垃圾图片

        this.button.hoverSprite = this.parent.garbagePhoto[this.parent.garbageIndex[index]]; // cc.log(this.parent.garbagePhoto[this.parent.garbageIndex[index]]);

        this.parent.garbageNameLabel.string = this.parent.garbagePhoto[this.parent.garbageIndex[index]].name; //this.parent.playMusicClips(this.parent.isRight[index]);   //播放音效   第一张方式

        this.parent.playMusicClips();

        if (this.parent.isRight[index]) {
          if (--this.parent.rightLeftNum == 0) /////////////成功通关！  可能更改条件
            {
              this.parent.popUpPassLevel();
              this.parent.particleSmokeFlower.resetSystem();
            }
        } else //isFront = true && isRight =false 
          {
            //翻出了错误的block              
            if (++this.parent.errorNum >= this.parent.n) //提示 已错3个
              {
                this.scheduleOnce(function () {
                  this.parent.textTipLabel.string = '您以翻错了3个，请翻回！';
                }, 0.01);
                this.scheduleOnce(function () {
                  this.parent.textTipLabel.string = '';
                }, 6);
                this.error3(); //修改交互性 初始化此状态的变量     
              }
          }

        cc.log('剩余正确的：' + this.parent.rightLeftNum + ' 当前已翻错：' + this.parent.errorNum);
      } else //翻回已翻开的block
      {
        this.parent.isFront[index] = true;
        this.button.normalSprite = this.parent.garbagePhotoBackGround; //切换button背景图片为默认背景图片   默认背景图片总是放在最后一个

        this.button.hoverSprite = this.parent.garbagePhotoBackGround; //切换button背景图片为默认背景图片   默认背景图片总是放在最后一个

        if (this.parent.isRight[index]) {
          this.parent.rightLeftNum++; //剩余正确的block 加一
        } else //isFront = false && isRight =false  
          {
            this.parent.errorNum--; //翻回了翻错误的block  
          }

        if (this.parent.erroring3flag) //如果处于改错状态
          {
            if (--this.parent.erroring3Count == 0) //改错状态翻回次数已用完
              {
                this.parent.erroring3flag = false; //结束改错状态

                if (this.parent.errorNum >= 2) //至多找回了一个翻错的block
                  {
                    //
                    this.PopUpPage(); //弹出知识小提示  呼吸动画效果

                    --this.parent.life;
                    errorGarbagePhoto = this.parent.garbagePhoto[this.parent.garbageIndex[index]]; //此变量用于 和知识小提示图片进行交互

                    this.parent.changeLifeSprite(); //this.parent.lifeLabel.string = "Life:"+this.parent.life;

                    if (this.parent.life == 0) //生命值减一           ////////////////////////////////////////////提示标志未加！
                      {
                        //parent.textTipLabel.string = "生命值为0！！！闯关失败" ;    //使用计时器                            //////////////////////关卡结束  后期可以改成弹窗或者一个动画
                        //更新life
                        this.parent.popUpNotPassLevel(); //弹出关卡失败界面
                      }
                  } //重设isInteractable[i]   所有的皆可交互了()


                this.resetInteractable();
              }
          }

        cc.log('剩余正确的：' + this.parent.rightLeftNum + ' 当前已翻错：' + this.parent.errorNum);
      }
  },
  error3: function error3() {
    //当前翻错超过3个  改变交互性
    this.parent.erroring3flag = true;
    this.parent.erroring3Count = 3; //有3次翻回的机会  

    for (var i = 0; i < this.parent.garbageIndex.length; i++) {
      if (this.parent.isFront[i]) //如果未翻开则不能翻开   
        {
          this.parent.isInteractable[i] = false;
          this.node.parent.children[i].getComponent(cc.Button).interactable = this.parent.isInteractable[i];
        }
    }
  },
  resetInteractable: function resetInteractable() //重设isInteractable[i]
  {
    for (var i = 0; i < this.parent.garbageIndex.length; i++) {
      this.parent.isInteractable[i] = true;
      this.node.parent.children[i].getComponent(cc.Button).interactable = this.parent.isInteractable[i];
    }
  },
  //未调用
  setTextLabelTip1Callback: function setTextLabelTip1Callback() {
    //滚动提示                  ////////////////////////////////////////////设置滚动提示       
    this.parent.textTipLabel.string = '您以翻错了3个，请翻回！';
  },
  setTextLabelDefCallback: function setTextLabelDefCallback() {
    //设提示文字label 为默认状态
    this.parent.textTipLabel.string = "";
  },
  // update (dt) {},
  PopUpPage: function PopUpPage() {
    var tipPhoto = this.parent.tipKnowledgeNode.getComponent("tipPhoto");
    tipPhoto.popupPage2(); // cc.find("Canvas").pauseSystemEvents(true);
    // node1.on("touchstart",event=>{    
    //     this.upFlag = false;
    //     cc.log("销毁了一个");
    //     node1.destroy();
    //     cc.find("Canvas").resumeSystemEvents(true);
    // },this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXG9uQnV0dG9uQ2xpY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidXR0b24iLCJCdXR0b24iLCJzdGFydCIsInBhcmVudCIsIm5vZGUiLCJnZXRQYXJlbnQiLCJnZXRDb21wb25lbnQiLCJPbkNsaWNrIiwiaW5kZXgiLCJnZXRTaWJsaW5nSW5kZXgiLCJsb2ciLCJpc0Zyb250Iiwibm9ybWFsU3ByaXRlIiwiZ2FyYmFnZVBob3RvIiwiZ2FyYmFnZUluZGV4IiwiaG92ZXJTcHJpdGUiLCJnYXJiYWdlTmFtZUxhYmVsIiwic3RyaW5nIiwibmFtZSIsInBsYXlNdXNpY0NsaXBzIiwiaXNSaWdodCIsInJpZ2h0TGVmdE51bSIsInBvcFVwUGFzc0xldmVsIiwicGFydGljbGVTbW9rZUZsb3dlciIsInJlc2V0U3lzdGVtIiwiZXJyb3JOdW0iLCJuIiwic2NoZWR1bGVPbmNlIiwidGV4dFRpcExhYmVsIiwiZXJyb3IzIiwiZ2FyYmFnZVBob3RvQmFja0dyb3VuZCIsImVycm9yaW5nM2ZsYWciLCJlcnJvcmluZzNDb3VudCIsIlBvcFVwUGFnZSIsImxpZmUiLCJlcnJvckdhcmJhZ2VQaG90byIsImNoYW5nZUxpZmVTcHJpdGUiLCJwb3BVcE5vdFBhc3NMZXZlbCIsInJlc2V0SW50ZXJhY3RhYmxlIiwiaSIsImxlbmd0aCIsImlzSW50ZXJhY3RhYmxlIiwiY2hpbGRyZW4iLCJpbnRlcmFjdGFibGUiLCJzZXRUZXh0TGFiZWxUaXAxQ2FsbGJhY2siLCJzZXRUZXh0TGFiZWxEZWZDYWxsYmFjayIsInRpcFBob3RvIiwidGlwS25vd2xlZGdlTm9kZSIsInBvcHVwUGFnZTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxNQUFNLEVBQUNKLEVBQUUsQ0FBQ0s7QUFGRixHQUhQO0FBT0xDLEVBQUFBLEtBUEssbUJBT0U7QUFDSCxTQUFLQyxNQUFMLEdBQWMsS0FBS0MsSUFBTCxDQUFVQyxTQUFWLEdBQXNCQyxZQUF0QixDQUFtQyxTQUFuQyxDQUFkLENBREcsQ0FFSDtBQUNBO0FBQ0gsR0FYSTtBQWFMQyxFQUFBQSxPQWJLLHFCQWFJO0FBQ047QUFDQTtBQUVDLFFBQUlDLEtBQUssR0FBRyxLQUFLSixJQUFMLENBQVVLLGVBQVYsRUFBWixDQUpLLENBSW1DO0FBQ3hDOztBQUNBYixJQUFBQSxFQUFFLENBQUNjLEdBQUgsQ0FBTyxXQUFTRixLQUFoQjs7QUFFQSxRQUFHLEtBQUtMLE1BQUwsQ0FBWVEsT0FBWixDQUFvQkgsS0FBcEIsQ0FBSCxFQUErQjtBQUMvQjtBQUNJLGFBQUtMLE1BQUwsQ0FBWVEsT0FBWixDQUFvQkgsS0FBcEIsSUFBNkIsS0FBN0I7QUFFQSxhQUFLUixNQUFMLENBQVlZLFlBQVosR0FBMkIsS0FBS1QsTUFBTCxDQUFZVSxZQUFaLENBQXlCLEtBQUtWLE1BQUwsQ0FBWVcsWUFBWixDQUF5Qk4sS0FBekIsQ0FBekIsQ0FBM0IsQ0FISixDQUd5Rjs7QUFDckYsYUFBS1IsTUFBTCxDQUFZZSxXQUFaLEdBQTBCLEtBQUtaLE1BQUwsQ0FBWVUsWUFBWixDQUF5QixLQUFLVixNQUFMLENBQVlXLFlBQVosQ0FBeUJOLEtBQXpCLENBQXpCLENBQTFCLENBSkosQ0FNRzs7QUFDQyxhQUFLTCxNQUFMLENBQVlhLGdCQUFaLENBQTZCQyxNQUE3QixHQUFzQyxLQUFLZCxNQUFMLENBQVlVLFlBQVosQ0FBeUIsS0FBS1YsTUFBTCxDQUFZVyxZQUFaLENBQXlCTixLQUF6QixDQUF6QixFQUEwRFUsSUFBaEcsQ0FQSixDQVNJOztBQUNBLGFBQUtmLE1BQUwsQ0FBWWdCLGNBQVo7O0FBRUQsWUFBRyxLQUFLaEIsTUFBTCxDQUFZaUIsT0FBWixDQUFvQlosS0FBcEIsQ0FBSCxFQUNBO0FBRUksY0FBRyxFQUFFLEtBQUtMLE1BQUwsQ0FBWWtCLFlBQWQsSUFBNEIsQ0FBL0IsRUFBdUM7QUFDdkM7QUFDSyxtQkFBS2xCLE1BQUwsQ0FBWW1CLGNBQVo7QUFDQSxtQkFBS25CLE1BQUwsQ0FBWW9CLG1CQUFaLENBQWdDQyxXQUFoQztBQUNKO0FBQ0osU0FSRCxNQVNPO0FBQ1A7QUFDRztBQUNDLGdCQUFHLEVBQUUsS0FBS3JCLE1BQUwsQ0FBWXNCLFFBQWQsSUFBd0IsS0FBS3RCLE1BQUwsQ0FBWXVCLENBQXZDLEVBQTJDO0FBQzNDO0FBQ0kscUJBQUtDLFlBQUwsQ0FBa0IsWUFBVTtBQUMzQix1QkFBS3hCLE1BQUwsQ0FBWXlCLFlBQVosQ0FBeUJYLE1BQXpCLEdBQWtDLGNBQWxDO0FBQ0EsaUJBRkQsRUFFRSxJQUZGO0FBR0EscUJBQUtVLFlBQUwsQ0FBa0IsWUFBVTtBQUMzQix1QkFBS3hCLE1BQUwsQ0FBWXlCLFlBQVosQ0FBeUJYLE1BQXpCLEdBQWtDLEVBQWxDO0FBQ0EsaUJBRkQsRUFFRSxDQUZGO0FBR0EscUJBQUtZLE1BQUwsR0FQSixDQU82QjtBQUM1QjtBQUNKOztBQUlEakMsUUFBQUEsRUFBRSxDQUFDYyxHQUFILENBQU8sV0FBUyxLQUFLUCxNQUFMLENBQVlrQixZQUFyQixHQUFrQyxTQUFsQyxHQUE0QyxLQUFLbEIsTUFBTCxDQUFZc0IsUUFBL0Q7QUFDRixPQXhDRCxNQXlDTTtBQUNOO0FBRUksYUFBS3RCLE1BQUwsQ0FBWVEsT0FBWixDQUFvQkgsS0FBcEIsSUFBNkIsSUFBN0I7QUFDQSxhQUFLUixNQUFMLENBQVlZLFlBQVosR0FBMkIsS0FBS1QsTUFBTCxDQUFZMkIsc0JBQXZDLENBSEosQ0FHa0U7O0FBQzlELGFBQUs5QixNQUFMLENBQVllLFdBQVosR0FBeUIsS0FBS1osTUFBTCxDQUFZMkIsc0JBQXJDLENBSkosQ0FJZ0U7O0FBRzdELFlBQUcsS0FBSzNCLE1BQUwsQ0FBWWlCLE9BQVosQ0FBb0JaLEtBQXBCLENBQUgsRUFDQTtBQUNJLGVBQUtMLE1BQUwsQ0FBWWtCLFlBQVosR0FESixDQUMrQjtBQUM5QixTQUhELE1BSU87QUFDUDtBQUNJLGlCQUFLbEIsTUFBTCxDQUFZc0IsUUFBWixHQURKLENBQzJCO0FBQzFCOztBQUVELFlBQUcsS0FBS3RCLE1BQUwsQ0FBWTRCLGFBQWYsRUFBK0I7QUFDL0I7QUFDSSxnQkFBRyxFQUFFLEtBQUs1QixNQUFMLENBQVk2QixjQUFkLElBQWdDLENBQW5DLEVBQXFDO0FBQ3JDO0FBQ0kscUJBQUs3QixNQUFMLENBQVk0QixhQUFaLEdBQTBCLEtBQTFCLENBREosQ0FDd0M7O0FBQ3BDLG9CQUFHLEtBQUs1QixNQUFMLENBQVlzQixRQUFaLElBQXNCLENBQXpCLEVBQThCO0FBQzlCO0FBQ0k7QUFDQSx5QkFBS1EsU0FBTCxHQUZKLENBRXFCOztBQUVqQixzQkFBRSxLQUFLOUIsTUFBTCxDQUFZK0IsSUFBZDtBQUVBQyxvQkFBQUEsaUJBQWlCLEdBQUcsS0FBS2hDLE1BQUwsQ0FBWVUsWUFBWixDQUF5QixLQUFLVixNQUFMLENBQVlXLFlBQVosQ0FBeUJOLEtBQXpCLENBQXpCLENBQXBCLENBTkosQ0FNb0Y7O0FBRWhGLHlCQUFLTCxNQUFMLENBQVlpQyxnQkFBWixHQVJKLENBU0k7O0FBQ0Esd0JBQUcsS0FBS2pDLE1BQUwsQ0FBWStCLElBQVosSUFBa0IsQ0FBckIsRUFBNkI7QUFDN0I7QUFDSztBQUNBO0FBQ0EsNkJBQUsvQixNQUFMLENBQVlrQyxpQkFBWixHQUhMLENBR3VDO0FBQ3RDO0FBQ0osbUJBbkJMLENBb0JJOzs7QUFDQSxxQkFBS0MsaUJBQUw7QUFDSDtBQUNKOztBQUNEMUMsUUFBQUEsRUFBRSxDQUFDYyxHQUFILENBQU8sV0FBUyxLQUFLUCxNQUFMLENBQVlrQixZQUFyQixHQUFrQyxTQUFsQyxHQUE0QyxLQUFLbEIsTUFBTCxDQUFZc0IsUUFBL0Q7QUFDRjtBQUVKLEdBN0dJO0FBK0dMSSxFQUFBQSxNQS9HSyxvQkErR0c7QUFBRztBQUNQLFNBQUsxQixNQUFMLENBQVk0QixhQUFaLEdBQTRCLElBQTVCO0FBQ0EsU0FBSzVCLE1BQUwsQ0FBWTZCLGNBQVosR0FBNkIsQ0FBN0IsQ0FGSSxDQUUrQjs7QUFFbkMsU0FBSSxJQUFJTyxDQUFDLEdBQUcsQ0FBWixFQUFjQSxDQUFDLEdBQUcsS0FBS3BDLE1BQUwsQ0FBWVcsWUFBWixDQUF5QjBCLE1BQTNDLEVBQWtERCxDQUFDLEVBQW5ELEVBQ0E7QUFDSSxVQUFHLEtBQUtwQyxNQUFMLENBQVlRLE9BQVosQ0FBb0I0QixDQUFwQixDQUFILEVBQTRCO0FBQzVCO0FBQ0ksZUFBS3BDLE1BQUwsQ0FBWXNDLGNBQVosQ0FBMkJGLENBQTNCLElBQWdDLEtBQWhDO0FBQ0EsZUFBS25DLElBQUwsQ0FBVUQsTUFBVixDQUFpQnVDLFFBQWpCLENBQTBCSCxDQUExQixFQUE2QmpDLFlBQTdCLENBQTBDVixFQUFFLENBQUNLLE1BQTdDLEVBQXFEMEMsWUFBckQsR0FBb0UsS0FBS3hDLE1BQUwsQ0FBWXNDLGNBQVosQ0FBMkJGLENBQTNCLENBQXBFO0FBQ0g7QUFDSjtBQUNKLEdBM0hJO0FBNEhMRCxFQUFBQSxpQkE1SEssK0JBNEh5QjtBQUM5QjtBQUNJLFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBY0EsQ0FBQyxHQUFHLEtBQUtwQyxNQUFMLENBQVlXLFlBQVosQ0FBeUIwQixNQUEzQyxFQUFrREQsQ0FBQyxFQUFuRCxFQUNBO0FBQ0ksV0FBS3BDLE1BQUwsQ0FBWXNDLGNBQVosQ0FBMkJGLENBQTNCLElBQWdDLElBQWhDO0FBQ0EsV0FBS25DLElBQUwsQ0FBVUQsTUFBVixDQUFpQnVDLFFBQWpCLENBQTBCSCxDQUExQixFQUE2QmpDLFlBQTdCLENBQTBDVixFQUFFLENBQUNLLE1BQTdDLEVBQXFEMEMsWUFBckQsR0FBb0UsS0FBS3hDLE1BQUwsQ0FBWXNDLGNBQVosQ0FBMkJGLENBQTNCLENBQXBFO0FBQ0g7QUFDSixHQW5JSTtBQW9JTDtBQUNBSyxFQUFBQSx3QkFySUssc0NBcUlxQjtBQUFJO0FBQzFCLFNBQUt6QyxNQUFMLENBQVl5QixZQUFaLENBQXlCWCxNQUF6QixHQUFrQyxjQUFsQztBQUNILEdBdklJO0FBd0lMNEIsRUFBQUEsdUJBeElLLHFDQXdJb0I7QUFBSTtBQUN6QixTQUFLMUMsTUFBTCxDQUFZeUIsWUFBWixDQUF5QlgsTUFBekIsR0FBa0MsRUFBbEM7QUFDSCxHQTFJSTtBQTJJTDtBQUVBZ0IsRUFBQUEsU0E3SUssdUJBNklNO0FBQ1AsUUFBSWEsUUFBUSxHQUFDLEtBQUszQyxNQUFMLENBQVk0QyxnQkFBWixDQUE2QnpDLFlBQTdCLENBQTBDLFVBQTFDLENBQWI7QUFDQXdDLElBQUFBLFFBQVEsQ0FBQ0UsVUFBVCxHQUZPLENBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDtBQXpKSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgYnV0dG9uOmNjLkJ1dHRvbixcclxuICAgIH0sXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudChcIkluaXRhdGVcIik7XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5wYXJlbnQpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsdGhpcy5PbkNsaWNrKCksdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIE9uQ2xpY2soKXtcclxuICAgICAgIC8vICBjYy5sb2codGhpcy5wYXJlbnQpO1xyXG4gICAgICAgLy8gY2MubG9nKHRoaXMucGFyZW50LmxldmVsTnVtKTsvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCk7Ly/ojrflj5bntKLlvJUg5Yiw5bqV5piv54i26IqC54K555qE6YKj5LiA5Liq5a2Q6IqC54K56KKr54K55Ye7XHJcbiAgICAgICAgLy/liKTmlq3lvZPliY1ibG9jayDlpITkuo7og4zmma/lm77ov5jmmK/lnoPlnL7lm75cclxuICAgICAgICBjYy5sb2coXCJpbmRleCBcIitpbmRleCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucGFyZW50LmlzRnJvbnRbaW5kZXhdKSAvL+W9k+WJjeWkhOS6juiDjOaZr+WbvlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuaXNGcm9udFtpbmRleF0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLm5vcm1hbFNwcml0ZSA9IHRoaXMucGFyZW50LmdhcmJhZ2VQaG90b1t0aGlzLnBhcmVudC5nYXJiYWdlSW5kZXhbaW5kZXhdXTsvL+WIh+aNomJ1dHRvbuiDjOaZr+WbvueJh+S4uuWeg+WcvuWbvueJh1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5ob3ZlclNwcml0ZSA9IHRoaXMucGFyZW50LmdhcmJhZ2VQaG90b1t0aGlzLnBhcmVudC5nYXJiYWdlSW5kZXhbaW5kZXhdXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgLy8gY2MubG9nKHRoaXMucGFyZW50LmdhcmJhZ2VQaG90b1t0aGlzLnBhcmVudC5nYXJiYWdlSW5kZXhbaW5kZXhdXSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmdhcmJhZ2VOYW1lTGFiZWwuc3RyaW5nID0gdGhpcy5wYXJlbnQuZ2FyYmFnZVBob3RvW3RoaXMucGFyZW50LmdhcmJhZ2VJbmRleFtpbmRleF1dLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAvL3RoaXMucGFyZW50LnBsYXlNdXNpY0NsaXBzKHRoaXMucGFyZW50LmlzUmlnaHRbaW5kZXhdKTsgICAvL+aSreaUvumfs+aViCAgIOesrOS4gOW8oOaWueW8j1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5wbGF5TXVzaWNDbGlwcygpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIGlmKHRoaXMucGFyZW50LmlzUmlnaHRbaW5kZXhdKVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIGlmKC0tdGhpcy5wYXJlbnQucmlnaHRMZWZ0TnVtPT0wKSAgICAgIC8vLy8vLy8vLy8vLy/miJDlip/pgJrlhbPvvIEgIOWPr+iDveabtOaUueadoeS7tlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucG9wVXBQYXNzTGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5wYXJ0aWNsZVNtb2tlRmxvd2VyLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZSAgIC8vaXNGcm9udCA9IHRydWUgJiYgaXNSaWdodCA9ZmFsc2UgXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8v57+75Ye65LqG6ZSZ6K+v55qEYmxvY2sgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBpZigrK3RoaXMucGFyZW50LmVycm9yTnVtPj10aGlzLnBhcmVudC5uKSAgLy/mj5DnpLog5bey6ZSZM+S4qlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnRleHRUaXBMYWJlbC5zdHJpbmcgPSAn5oKo5Lul57+76ZSZ5LqGM+S4qu+8jOivt+e/u+Wbnu+8gSc7XHJcbiAgICAgICAgICAgICAgICAgICB9LDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC50ZXh0VGlwTGFiZWwuc3RyaW5nID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICB9LDYpO1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcjMoKTsgICAgICAgICAgIC8v5L+u5pS55Lqk5LqS5oCnIOWIneWni+WMluatpOeKtuaAgeeahOWPmOmHjyAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICBjYy5sb2coJ+WJqeS9meato+ehrueahO+8micrdGhpcy5wYXJlbnQucmlnaHRMZWZ0TnVtKycg5b2T5YmN5bey57+76ZSZ77yaJyt0aGlzLnBhcmVudC5lcnJvck51bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgIC8v57+75Zue5bey57+75byA55qEYmxvY2tcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5pc0Zyb250W2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLm5vcm1hbFNwcml0ZSA9IHRoaXMucGFyZW50LmdhcmJhZ2VQaG90b0JhY2tHcm91bmQ7Ly/liIfmjaJidXR0b27og4zmma/lm77niYfkuLrpu5jorqTog4zmma/lm77niYcgICDpu5jorqTog4zmma/lm77niYfmgLvmmK/mlL7lnKjmnIDlkI7kuIDkuKpcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uaG92ZXJTcHJpdGU9IHRoaXMucGFyZW50LmdhcmJhZ2VQaG90b0JhY2tHcm91bmQ7Ly/liIfmjaJidXR0b27og4zmma/lm77niYfkuLrpu5jorqTog4zmma/lm77niYcgICDpu5jorqTog4zmma/lm77niYfmgLvmmK/mlL7lnKjmnIDlkI7kuIDkuKpcclxuXHJcblxyXG4gICAgICAgICAgIGlmKHRoaXMucGFyZW50LmlzUmlnaHRbaW5kZXhdKVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmlnaHRMZWZ0TnVtKys7Ly/liankvZnmraPnoa7nmoRibG9jayDliqDkuIBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZSAgIC8vaXNGcm9udCA9IGZhbHNlICYmIGlzUmlnaHQgPWZhbHNlICBcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmVycm9yTnVtLS07Ly/nv7vlm57kuobnv7vplJnor6/nmoRibG9jayAgXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICBpZih0aGlzLnBhcmVudC5lcnJvcmluZzNmbGFnKSAgLy/lpoLmnpzlpITkuo7mlLnplJnnirbmgIFcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGlmKC0tdGhpcy5wYXJlbnQuZXJyb3JpbmczQ291bnQgPT0gMCkvL+aUuemUmeeKtuaAgee/u+WbnuasoeaVsOW3sueUqOWujFxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5lcnJvcmluZzNmbGFnPWZhbHNlOyAgICAvL+e7k+adn+aUuemUmeeKtuaAgVxyXG4gICAgICAgICAgICAgICAgICAgaWYodGhpcy5wYXJlbnQuZXJyb3JOdW0+PTIpICAgLy/oh7PlpJrmib7lm57kuobkuIDkuKrnv7vplJnnmoRibG9ja1xyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Qb3BVcFBhZ2UoKTsvL+W8ueWHuuefpeivhuWwj+aPkOekuiAg5ZG85ZC45Yqo55S75pWI5p6cXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIC0tdGhpcy5wYXJlbnQubGlmZTtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBlcnJvckdhcmJhZ2VQaG90byA9IHRoaXMucGFyZW50LmdhcmJhZ2VQaG90b1t0aGlzLnBhcmVudC5nYXJiYWdlSW5kZXhbaW5kZXhdXTsgIC8v5q2k5Y+Y6YeP55So5LqOIOWSjOefpeivhuWwj+aPkOekuuWbvueJh+i/m+ihjOS6pOS6klxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jaGFuZ2VMaWZlU3ByaXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnBhcmVudC5saWZlTGFiZWwuc3RyaW5nID0gXCJMaWZlOlwiK3RoaXMucGFyZW50LmxpZmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wYXJlbnQubGlmZT09MCkgICAgICAvL+eUn+WRveWAvOWHj+S4gCAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/mj5DnpLrmoIflv5fmnKrliqDvvIFcclxuICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BhcmVudC50ZXh0VGlwTGFiZWwuc3RyaW5nID0gXCLnlJ/lkb3lgLzkuLow77yB77yB77yB6Zev5YWz5aSx6LSlXCIgOyAgICAvL+S9v+eUqOiuoeaXtuWZqCAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8v5YWz5Y2h57uT5p2fICDlkI7mnJ/lj6/ku6XmlLnmiJDlvLnnqpfmiJbogIXkuIDkuKrliqjnlLtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05pawbGlmZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucG9wVXBOb3RQYXNzTGV2ZWwoKTsgIC8v5by55Ye65YWz5Y2h5aSx6LSl55WM6Z2iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgLy/ph43orr5pc0ludGVyYWN0YWJsZVtpXSAgIOaJgOacieeahOeahuWPr+S6pOS6kuS6higpXHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SW50ZXJhY3RhYmxlKCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgY2MubG9nKCfliankvZnmraPnoa7nmoTvvJonK3RoaXMucGFyZW50LnJpZ2h0TGVmdE51bSsnIOW9k+WJjeW3sue/u+mUme+8micrdGhpcy5wYXJlbnQuZXJyb3JOdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgZXJyb3IzKCl7ICAvL+W9k+WJjee/u+mUmei2hei/hzPkuKogIOaUueWPmOS6pOS6kuaAp1xyXG4gICAgICAgIHRoaXMucGFyZW50LmVycm9yaW5nM2ZsYWcgPSB0cnVlOyBcclxuICAgICAgICB0aGlzLnBhcmVudC5lcnJvcmluZzNDb3VudCA9IDM7ICAgIC8v5pyJM+asoee/u+WbnueahOacuuS8miAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpIDwgdGhpcy5wYXJlbnQuZ2FyYmFnZUluZGV4Lmxlbmd0aDtpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wYXJlbnQuaXNGcm9udFtpXSkgIC8v5aaC5p6c5pyq57+75byA5YiZ5LiN6IO957+75byAICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmlzSW50ZXJhY3RhYmxlW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMucGFyZW50LmlzSW50ZXJhY3RhYmxlW2ldOyAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlc2V0SW50ZXJhY3RhYmxlKCkgICAgICAgICAgIC8v6YeN6K6+aXNJbnRlcmFjdGFibGVbaV1cclxuICAgIHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCB0aGlzLnBhcmVudC5nYXJiYWdlSW5kZXgubGVuZ3RoO2krKyApXHJcbiAgICAgICAgeyAgICBcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuaXNJbnRlcmFjdGFibGVbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMucGFyZW50LmlzSW50ZXJhY3RhYmxlW2ldOyAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/mnKrosIPnlKhcclxuICAgIHNldFRleHRMYWJlbFRpcDFDYWxsYmFjaygpeyAgIC8v5rua5Yqo5o+Q56S6ICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/orr7nva7mu5rliqjmj5DnpLogICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXJlbnQudGV4dFRpcExhYmVsLnN0cmluZyA9ICfmgqjku6Xnv7vplJnkuoYz5Liq77yM6K+357+75Zue77yBJztcclxuICAgIH0sXHJcbiAgICBzZXRUZXh0TGFiZWxEZWZDYWxsYmFjaygpeyAgIC8v6K6+5o+Q56S65paH5a2XbGFiZWwg5Li66buY6K6k54q25oCBXHJcbiAgICAgICAgdGhpcy5wYXJlbnQudGV4dFRpcExhYmVsLnN0cmluZyA9IFwiXCI7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgUG9wVXBQYWdlKCl7XHJcbiAgICAgICAgdmFyIHRpcFBob3RvPXRoaXMucGFyZW50LnRpcEtub3dsZWRnZU5vZGUuZ2V0Q29tcG9uZW50KFwidGlwUGhvdG9cIik7XHJcbiAgICAgICAgdGlwUGhvdG8ucG9wdXBQYWdlMigpO1xyXG5cclxuICAgICAgICAvLyBjYy5maW5kKFwiQ2FudmFzXCIpLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIC8vIG5vZGUxLm9uKFwidG91Y2hzdGFydFwiLGV2ZW50PT57ICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLnVwRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCLplIDmr4HkuobkuIDkuKpcIik7XHJcbiAgICAgICAgLy8gICAgIG5vZGUxLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgLy8gfSx0aGlzKTtcclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==