
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FirstPage/carButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ffedhHcFRBobgyKCV4Co0z', 'carButton');
// Script/FirstPage/carButton.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bg: cc.Node,
    button: cc.Node,
    garbage1: cc.Node,
    garbage2: cc.Node,
    garbage3: cc.Node,
    garbage4: cc.Node,
    title: cc.Sprite,
    picture: cc.SpriteFrame,
    //label:cc.Label,
    button1: cc.Button,
    garbage11: cc.Button,
    chooseTitle: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //  点击按钮车位置向前移动
  RunForward: function RunForward() {
    this.button1.interactable = false;
    this.garbage11.interactable = false;
    var anim = this.getComponent(cc.Animation);
    anim.play();
    var car_y = this.button.getPosition();
    var car_action = cc.speed(cc.spawn(cc.moveTo(0.1, -594.549, car_y.y), cc.fadeOut(1)), 0.05);
    this.button.runAction(car_action); //cc.log("car");
    //cc.log(this.button.getPosition().x);
    //cc.log(this.button.getPosition().y);

    this.garbage1.active = true;
    this.garbage1.y = -189.64;
    this.garbage1.x = -103.44;
    this.garbage2.active = true;
    this.garbage2.y = -189.64;
    this.garbage2.x = 139.276;
    this.garbage3.active = true;
    this.garbage3.y = -189.64;
    this.garbage3.x = -25.86;
    this.garbage4.active = true;
    this.garbage4.y = -189.64;
    this.garbage4.x = 57.386;
    var garbage1_action1 = cc.hide();
    this.garbage1.runAction(garbage1_action1);
    var garbage2_action1 = cc.hide();
    this.garbage2.runAction(garbage2_action1);
    var garbage3_action1 = cc.hide();
    this.garbage3.runAction(garbage3_action1);
    var garbage4_action1 = cc.hide();
    this.garbage4.runAction(garbage4_action1);
    this.schedule(function () {
      var garbage2_action = cc.speed(cc.spawn(cc.show(), cc.fadeIn(0.01) // cc.moveTo(0.07,61.88, car_y.y),
      ), 0.01);
      this.garbage2.runAction(garbage2_action);
    }, 0.3, 0, 0); // cc.log("2");
    // cc.log(this.garbage2.x);
    // cc.log(this.garbage2.y);

    this.schedule(function () {
      var garbage4_action = cc.speed(cc.spawn(cc.show(), cc.fadeIn(0.01) // cc.moveTo(0.1,243.18, car_y.y),
      ), 0.01);
      this.garbage4.runAction(garbage4_action);
    }, 0.5, 0, 0); //this.schedule(this.garbage4.runAction(garbage4_action),this.garbage4,1.0,0);
    //cc.log("4");
    //cc.log(this.garbage4.x);
    //cc.log(this.garbage4.y);

    this.schedule(function () {
      var garbage3_action = cc.speed(cc.spawn(cc.show(), cc.fadeIn(0.01) // cc.moveTo(0.05,106.825, car_y.y),
      ), 0.01);
      this.garbage3.runAction(garbage3_action);
    }, 0.7, 0, 0); // cc.log("3");
    // cc.log(this.garbage3.x);
    // cc.log(this.garbage3.y);

    this.schedule(function () {
      var garbage1_action = cc.speed(cc.spawn(cc.show(), cc.fadeIn(0.01) // cc.moveTo(0.03,-256.426, car_y.y),
      ), 0.01);
      this.garbage1.runAction(garbage1_action);
    }, 0.9, 0, 0); // cc.log("1");
    // cc.log(this.garbage1.x);
    // cc.log(this.garbage1.y);
    //放大并布局
    // var garbage1_action2 = cc.speed(
    //     cc.spawn(
    //         cc.scaleTo(0.1,3.3,3),
    //         cc.moveTo(0.1,-133.61, 94.819),
    //     )
    // ,0.05)
    // this.garbage1.runAction(garbage1_action2);
    // var garbage4_Pos = this.garbage1.getPosition();
    // var gPos_x = garbage4_Pos.x;
    // var gPos_y = garbage4_Pos.y;
    // // if(this.garbage1.x == 160){
    // //     cc.log("1");
    // //     cc.log(this.garbage1.x);
    // //     cc.log(this.garbage1.y);
    // // }
    // var garbage4_action2 = cc.speed(
    //     cc.spawn(
    //         cc.scaleTo(0.1,3.3,3),
    //         cc.moveTo(0.1,134.966, -262.91),
    //     )
    // ,0.05)
    // this.garbage4.runAction(garbage4_action2);
    //     // cc.log("4");
    //     // cc.log(this.garbage4.x);
    //     // cc.log(this.garbage4.y);
    // var garbage3_action2 = cc.speed(
    //     cc.spawn(
    //         cc.scaleTo(0.1,3.3,3),
    //         cc.moveTo(0.1,-133.61, -262.91),
    //     )
    // ,0.05)
    // this.garbage3.runAction(garbage3_action2);
    //     // cc.log("3");
    //     // cc.log(this.garbage3.x);
    //     // cc.log(this.garbage3.y);
    // var garbage2_action2 = cc.speed(
    //     cc.spawn(
    //         cc.scaleTo(0.1,3.3,3),
    //         cc.moveTo(0.1,134.966, 94.819),
    //     )
    // ,0.05)
    // this.garbage2.runAction(garbage2_action2);
    //     // cc.log("2");
    //     // cc.log(this.garbage2.x);
    //     // cc.log(this.garbage2.y);
    //标题变为页面二的关卡选择
    //cc.log("picture");
    //this.title.destroy();
    //this.title.SpriteFrame = this.picture;
    // let chooseTitle1 = cc.instantiate(this.chooseTitle);
    // chooseTitle1.parent = this.node.parent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGaXJzdFBhZ2VcXGNhckJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJnIiwiTm9kZSIsImJ1dHRvbiIsImdhcmJhZ2UxIiwiZ2FyYmFnZTIiLCJnYXJiYWdlMyIsImdhcmJhZ2U0IiwidGl0bGUiLCJTcHJpdGUiLCJwaWN0dXJlIiwiU3ByaXRlRnJhbWUiLCJidXR0b24xIiwiQnV0dG9uIiwiZ2FyYmFnZTExIiwiY2hvb3NlVGl0bGUiLCJQcmVmYWIiLCJSdW5Gb3J3YXJkIiwiaW50ZXJhY3RhYmxlIiwiYW5pbSIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsInBsYXkiLCJjYXJfeSIsImdldFBvc2l0aW9uIiwiY2FyX2FjdGlvbiIsInNwZWVkIiwic3Bhd24iLCJtb3ZlVG8iLCJ5IiwiZmFkZU91dCIsInJ1bkFjdGlvbiIsImFjdGl2ZSIsIngiLCJnYXJiYWdlMV9hY3Rpb24xIiwiaGlkZSIsImdhcmJhZ2UyX2FjdGlvbjEiLCJnYXJiYWdlM19hY3Rpb24xIiwiZ2FyYmFnZTRfYWN0aW9uMSIsInNjaGVkdWxlIiwiZ2FyYmFnZTJfYWN0aW9uIiwic2hvdyIsImZhZGVJbiIsImdhcmJhZ2U0X2FjdGlvbiIsImdhcmJhZ2UzX2FjdGlvbiIsImdhcmJhZ2UxX2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBQ0osRUFBRSxDQUFDSyxJQURFO0FBRVJDLElBQUFBLE1BQU0sRUFBQ04sRUFBRSxDQUFDSyxJQUZGO0FBR1JFLElBQUFBLFFBQVEsRUFBQ1AsRUFBRSxDQUFDSyxJQUhKO0FBSVJHLElBQUFBLFFBQVEsRUFBQ1IsRUFBRSxDQUFDSyxJQUpKO0FBS1JJLElBQUFBLFFB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QUFFLENBQUM0QyxJQUFILEVBREosRUFFSTVDLEVBQUUsQ0FBQzZDLE1BQUgsQ0FBVSxJQUFWLENBRkosQ0FHSTtBQUhKLE9BRGtCLEVBS2hCLElBTGdCLENBQXRCO0FBTUEsV0FBS3RDLFFBQUwsQ0FBYzJCLFNBQWQsQ0FBd0JjLGVBQXhCO0FBQ0gsS0FSRCxFQVFFLEdBUkYsRUFRTSxDQVJOLEVBUVEsQ0FSUixFQTNGaUIsQ0FxR2pCO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUgsR0FwTUksQ0FzTUw7O0FBdE1LLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZzpjYy5Ob2RlLFxyXG4gICAgICAgIGJ1dHRvbjpjYy5Ob2RlLFxyXG4gICAgICAgIGdhcmJhZ2UxOmNjLk5vZGUsXHJcbiAgICAgICAgZ2FyYmFnZTI6Y2MuTm9kZSxcclxuICAgICAgICBnYXJiYWdlMzpjYy5Ob2RlLFxyXG4gICAgICAgIGdhcmJhZ2U0OmNjLk5vZGUsXHJcbiAgICAgICAgdGl0bGU6Y2MuU3ByaXRlLFxyXG4gICAgICAgIHBpY3R1cmU6Y2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgLy9sYWJlbDpjYy5MYWJlbCxcclxuICAgICAgICBidXR0b24xOmNjLkJ1dHRvbixcclxuICAgICAgICBnYXJiYWdlMTE6Y2MuQnV0dG9uLFxyXG4gICAgICAgIGNob29zZVRpdGxlOmNjLlByZWZhYixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG4gICAgLy8gIOeCueWHu+aMiemSrui9puS9jee9ruWQkeWJjeenu+WKqFxyXG4gICAgUnVuRm9yd2FyZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uMS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhcmJhZ2UxMS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGFuaW0ucGxheSgpO1xyXG5cclxuICAgICAgICB2YXIgY2FyX3kgPSB0aGlzLmJ1dHRvbi5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBjYXJfYWN0aW9uID0gY2Muc3BlZWQoXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwgLTU5NC41NDksIGNhcl95LnkpLFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZU91dCgxKVxyXG4gICAgICAgICAgICApLCAwLjA1KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5ydW5BY3Rpb24oY2FyX2FjdGlvbik7XHJcbiAgICAgICAgLy9jYy5sb2coXCJjYXJcIik7XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKS54KTtcclxuICAgICAgICAvL2NjLmxvZyh0aGlzLmJ1dHRvbi5nZXRQb3NpdGlvbigpLnkpO1xyXG5cclxuICAgICAgICB0aGlzLmdhcmJhZ2UxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYXJiYWdlMS55ID0gLTE4OS42NDtcclxuICAgICAgICB0aGlzLmdhcmJhZ2UxLnggPSAtMTAzLjQ0O1xyXG5cclxuICAgICAgICB0aGlzLmdhcmJhZ2UyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYXJiYWdlMi55ID0gLTE4OS42NDtcclxuICAgICAgICB0aGlzLmdhcmJhZ2UyLnggPSAxMzkuMjc2O1xyXG5cclxuICAgICAgICB0aGlzLmdhcmJhZ2UzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYXJiYWdlMy55ID0gLTE4OS42NDtcclxuICAgICAgICB0aGlzLmdhcmJhZ2UzLnggPSAtMjUuODY7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FyYmFnZTQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhcmJhZ2U0LnkgPSAtMTg5LjY0O1xyXG4gICAgICAgIHRoaXMuZ2FyYmFnZTQueCA9IDU3LjM4NjtcclxuXHJcbiAgICAgICAgdmFyIGdhcmJhZ2UxX2FjdGlvbjEgPSBjYy5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5nYXJiYWdlMS5ydW5BY3Rpb24oZ2FyYmFnZTFfYWN0aW9uMSk7XHJcblxyXG4gICAgICAgIHZhciBnYXJiYWdlMl9hY3Rpb24xID0gY2MuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FyYmFnZTIucnVuQWN0aW9uKGdhcmJhZ2UyX2FjdGlvbjEpO1xyXG5cclxuICAgICAgICB2YXIgZ2FyYmFnZTNfYWN0aW9uMSA9IGNjLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmdhcmJhZ2UzLnJ1bkFjdGlvbihnYXJiYWdlM19hY3Rpb24xKTtcclxuXHJcbiAgICAgICAgdmFyIGdhcmJhZ2U0X2FjdGlvbjEgPSBjYy5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5nYXJiYWdlNC5ydW5BY3Rpb24oZ2FyYmFnZTRfYWN0aW9uMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgZ2FyYmFnZTJfYWN0aW9uID0gY2Muc3BlZWQoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zaG93KCksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmFkZUluKDAuMDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLm1vdmVUbygwLjA3LDYxLjg4LCBjYXJfeS55KSxcclxuICAgICAgICAgICAgICAgICksMC4wMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYmFnZTIucnVuQWN0aW9uKGdhcmJhZ2UyX2FjdGlvbik7XHJcbiAgICAgICAgfSwwLjMsMCwwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNjLmxvZyhcIjJcIik7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTIueCk7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTIueSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgZ2FyYmFnZTRfYWN0aW9uID0gY2Muc3BlZWQoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zaG93KCksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmFkZUluKDAuMDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLm1vdmVUbygwLjEsMjQzLjE4LCBjYXJfeS55KSxcclxuICAgICAgICAgICAgICAgICksMC4wMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYmFnZTQucnVuQWN0aW9uKGdhcmJhZ2U0X2FjdGlvbik7XHJcbiAgICAgICAgfSwwLjUsMCwwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGhpcy5zY2hlZHVsZSh0aGlzLmdhcmJhZ2U0LnJ1bkFjdGlvbihnYXJiYWdlNF9hY3Rpb24pLHRoaXMuZ2FyYmFnZTQsMS4wLDApO1xyXG5cclxuICAgICAgICAvL2NjLmxvZyhcIjRcIik7XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5nYXJiYWdlNC54KTtcclxuICAgICAgICAvL2NjLmxvZyh0aGlzLmdhcmJhZ2U0LnkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGdhcmJhZ2UzX2FjdGlvbiA9IGNjLnNwZWVkKFxyXG4gICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2hvdygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZhZGVJbigwLjAxKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5tb3ZlVG8oMC4wNSwxMDYuODI1LCBjYXJfeS55KSxcclxuICAgICAgICAgICAgICAgICksMC4wMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYmFnZTMucnVuQWN0aW9uKGdhcmJhZ2UzX2FjdGlvbik7XHJcbiAgICAgICAgfSwwLjcsMCwwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNjLmxvZyhcIjNcIik7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTMueCk7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTMueSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgZ2FyYmFnZTFfYWN0aW9uID0gY2Muc3BlZWQoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zaG93KCksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmFkZUluKDAuMDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLm1vdmVUbygwLjAzLC0yNTYuNDI2LCBjYXJfeS55KSxcclxuICAgICAgICAgICAgICAgICksMC4wMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYmFnZTEucnVuQWN0aW9uKGdhcmJhZ2UxX2FjdGlvbik7XHJcbiAgICAgICAgfSwwLjksMCwwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNjLmxvZyhcIjFcIik7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTEueCk7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTEueSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8v5pS+5aSn5bm25biD5bGAXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdmFyIGdhcmJhZ2UxX2FjdGlvbjIgPSBjYy5zcGVlZChcclxuICAgICAgICAvLyAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgLy8gICAgICAgICBjYy5zY2FsZVRvKDAuMSwzLjMsMyksXHJcbiAgICAgICAgLy8gICAgICAgICBjYy5tb3ZlVG8oMC4xLC0xMzMuNjEsIDk0LjgxOSksXHJcbiAgICAgICAgLy8gICAgIClcclxuICAgICAgICAvLyAsMC4wNSlcclxuICAgICAgICAvLyB0aGlzLmdhcmJhZ2UxLnJ1bkFjdGlvbihnYXJiYWdlMV9hY3Rpb24yKTtcclxuICAgICAgICAvLyB2YXIgZ2FyYmFnZTRfUG9zID0gdGhpcy5nYXJiYWdlMS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIHZhciBnUG9zX3ggPSBnYXJiYWdlNF9Qb3MueDtcclxuICAgICAgICAvLyB2YXIgZ1Bvc195ID0gZ2FyYmFnZTRfUG9zLnk7XHJcbiAgICAgICAgLy8gLy8gaWYodGhpcy5nYXJiYWdlMS54ID09IDE2MCl7XHJcbiAgICAgICAgLy8gLy8gICAgIGNjLmxvZyhcIjFcIik7XHJcbiAgICAgICAgLy8gLy8gICAgIGNjLmxvZyh0aGlzLmdhcmJhZ2UxLngpO1xyXG4gICAgICAgIC8vIC8vICAgICBjYy5sb2codGhpcy5nYXJiYWdlMS55KTtcclxuICAgICAgICAvLyAvLyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhciBnYXJiYWdlNF9hY3Rpb24yID0gY2Muc3BlZWQoXHJcbiAgICAgICAgLy8gICAgIGNjLnNwYXduKFxyXG4gICAgICAgIC8vICAgICAgICAgY2Muc2NhbGVUbygwLjEsMy4zLDMpLFxyXG4gICAgICAgIC8vICAgICAgICAgY2MubW92ZVRvKDAuMSwxMzQuOTY2LCAtMjYyLjkxKSxcclxuICAgICAgICAvLyAgICAgKVxyXG4gICAgICAgIC8vICwwLjA1KVxyXG4gICAgICAgIC8vIHRoaXMuZ2FyYmFnZTQucnVuQWN0aW9uKGdhcmJhZ2U0X2FjdGlvbjIpO1xyXG4gICAgICAgIC8vICAgICAvLyBjYy5sb2coXCI0XCIpO1xyXG4gICAgICAgIC8vICAgICAvLyBjYy5sb2codGhpcy5nYXJiYWdlNC54KTtcclxuICAgICAgICAvLyAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTQueSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhciBnYXJiYWdlM19hY3Rpb24yID0gY2Muc3BlZWQoXHJcbiAgICAgICAgLy8gICAgIGNjLnNwYXduKFxyXG4gICAgICAgIC8vICAgICAgICAgY2Muc2NhbGVUbygwLjEsMy4zLDMpLFxyXG4gICAgICAgIC8vICAgICAgICAgY2MubW92ZVRvKDAuMSwtMTMzLjYxLCAtMjYyLjkxKSxcclxuICAgICAgICAvLyAgICAgKVxyXG4gICAgICAgIC8vICwwLjA1KVxyXG4gICAgICAgIC8vIHRoaXMuZ2FyYmFnZTMucnVuQWN0aW9uKGdhcmJhZ2UzX2FjdGlvbjIpO1xyXG4gICAgICAgIC8vICAgICAvLyBjYy5sb2coXCIzXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyBjYy5sb2codGhpcy5nYXJiYWdlMy54KTtcclxuICAgICAgICAvLyAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTMueSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAvLyB2YXIgZ2FyYmFnZTJfYWN0aW9uMiA9IGNjLnNwZWVkKFxyXG4gICAgICAgIC8vICAgICBjYy5zcGF3bihcclxuICAgICAgICAvLyAgICAgICAgIGNjLnNjYWxlVG8oMC4xLDMuMywzKSxcclxuICAgICAgICAvLyAgICAgICAgIGNjLm1vdmVUbygwLjEsMTM0Ljk2NiwgOTQuODE5KSxcclxuICAgICAgICAvLyAgICAgKVxyXG4gICAgICAgIC8vICwwLjA1KVxyXG4gICAgICAgIC8vIHRoaXMuZ2FyYmFnZTIucnVuQWN0aW9uKGdhcmJhZ2UyX2FjdGlvbjIpO1xyXG4gICAgICAgIC8vICAgICAvLyBjYy5sb2coXCIyXCIpO1xyXG4gICAgICAgIC8vICAgICAvLyBjYy5sb2codGhpcy5nYXJiYWdlMi54KTtcclxuICAgICAgICAvLyAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTIueSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8v5qCH6aKY5Y+Y5Li66aG16Z2i5LqM55qE5YWz5Y2h6YCJ5oupXHJcbiAgICAgICAgLy9jYy5sb2coXCJwaWN0dXJlXCIpO1xyXG4gICAgICAgIC8vdGhpcy50aXRsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy90aGlzLnRpdGxlLlNwcml0ZUZyYW1lID0gdGhpcy5waWN0dXJlO1xyXG4gICAgICAgIC8vIGxldCBjaG9vc2VUaXRsZTEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNob29zZVRpdGxlKTtcclxuICAgICAgICAvLyBjaG9vc2VUaXRsZTEucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=