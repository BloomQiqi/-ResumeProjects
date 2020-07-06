"use strict";
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