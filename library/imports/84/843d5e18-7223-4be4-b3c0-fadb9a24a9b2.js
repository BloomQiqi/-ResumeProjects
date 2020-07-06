"use strict";
cc._RF.push(module, '843d54YciNL5LPA+tuaJKmy', 'dialog');
// Script/tutorialPage/dialog.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scene: "thirdPage",
    garbageName1: cc.Label,
    prefab: {
      "default": [],
      type: [cc.Prefab]
    },
    stopMask: cc.Node,
    garbageTypeMask: cc.Node,
    tipPictureMask: cc.Node,
    button5Mask: cc.Node,
    button3Mask: cc.Node,
    button9Mask: cc.Node,
    button2Mask: cc.Node,
    button7Mask: cc.Node,
    button4Mask: cc.Node,
    button6Mask: cc.Node,
    button8Mask: cc.Node,
    button: {
      "default": [],
      type: cc.Button
    },
    button5: cc.Node,
    button5NormalSprite: cc.SpriteFrame,
    button3: cc.Node,
    button3NormalSprite: cc.SpriteFrame,
    button9: cc.Node,
    button9NormalSprite: cc.SpriteFrame,
    button2: cc.Node,
    button2NormalSprite: cc.SpriteFrame,
    button7: cc.Node,
    button7NormalSprite: cc.SpriteFrame,
    buttonDefaultNorm: cc.SpriteFrame
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    //除跳过按钮，其他所有按钮停止交互
    var count = 0;
    this.button.interactable = false;
    this.garbageTypeMask.active = false;
    this.stopMask.active = false;
    this.tipPictureMask.active = false;
    this.button5Mask.active = false;
    this.button3Mask.active = false;
    this.button9Mask.active = false;
    this.button2Mask.active = false;
    this.button7Mask.active = false;
    this.button4Mask.active = false;
    this.button6Mask.active = false;
    this.button8Mask.active = false;
    this.stopMask.runAction(cc.hide());
    this.garbageTypeMask.runAction(cc.hide());
    this.tipPictureMask.runAction(cc.hide());
    this.button5Mask.runAction(cc.hide());
    this.button3Mask.runAction(cc.hide());
    this.button9Mask.runAction(cc.hide());
    this.button2Mask.runAction(cc.hide());
    this.button7Mask.runAction(cc.hide());
    this.button4Mask.runAction(cc.hide());
    this.button6Mask.runAction(cc.hide());
    this.button8Mask.runAction(cc.hide()); //elfin

    var node0 = cc.instantiate(this.prefab[0]);
    node0.parent = this.node; //dialog

    var node1 = cc.instantiate(this.prefab[1]);
    node1.parent = this.node;
    node1.on("touchstart", function (event) {
      node1.destroy(); //开始逐个介绍
      //stopMask

      _this.stopMask.active = true;
      var stopAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

      _this.stopMask.runAction(stopAction); //stopButtonIntro


      var node2 = cc.instantiate(_this.prefab[2]);
      node2.parent = _this.node;
      node2.on("touchstart", function (event) {
        node2.destroy(); // garbageTypeMask

        _this.garbageTypeMask.active = true;
        var garbageTypeMaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

        _this.garbageTypeMask.runAction(garbageTypeMaskAction); //garbageTypeIntro


        var node3 = cc.instantiate(_this.prefab[3]);
        node3.parent = _this.node;
        node3.on("touchstart", function (event) {
          node3.destroy(); //tipPictureMask

          _this.tipPictureMask.active = true;
          var tipPictureMaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

          _this.tipPictureMask.runAction(tipPictureMaskAction); //tipPictureIntro


          var node4 = cc.instantiate(_this.prefab[4]);
          node4.parent = _this.node;
          node4.on("touchstart", function (event) {
            node4.destroy(); //ruleIntro

            var node5 = cc.instantiate(_this.prefab[5]);
            node5.parent = _this.node;
            node5.on("touchstart", function (event) {
              node5.destroy(); //rule1Intro

              var node6 = cc.instantiate(_this.prefab[6]);
              node6.parent = _this.node;
              node6.on("touchstart", function (event) {
                node6.destroy(); //rule2Intro

                var node7 = cc.instantiate(_this.prefab[7]);
                node7.parent = _this.node;
                node7.on("touchstart", function (event) {
                  node7.destroy(); //rule3Intro

                  var node8 = cc.instantiate(_this.prefab[8]);
                  node8.parent = _this.node;
                  node8.on("touchstart", function (event) {
                    node8.destroy(); //button5Mask

                    _this.button5Mask.active = true;
                    var button5MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                    _this.button5Mask.runAction(button5MaskAction); //button5


                    _this.button[4].interactable = true;

                    _this.button5.on("touchstart", function (event) {
                      _this.garbageName1.string = "废钢";
                      _this.button[4].normalSprite = _this.button5NormalSprite; //this.button5.destroy();
                      //this.button[4].interactable = false;
                      //button3Mask

                      _this.button3Mask.active = true;
                      var button3MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                      _this.button3Mask.runAction(button3MaskAction); //button3


                      _this.button[2].interactable = true;

                      _this.button3.on("touchstart", function (event) {
                        _this.garbageName1.string = "针线";
                        _this.button[2].normalSprite = _this.button3NormalSprite;
                        _this.button3Mask.active = false; //button9Mask

                        _this.button9Mask.active = true;
                        var button9MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                        _this.button9Mask.runAction(button9MaskAction); //button9


                        _this.button[8].interactable = true;

                        _this.button9.on("touchstart", function (event) {
                          _this.garbageName1.string = "绳子";
                          _this.button[8].normalSprite = _this.button9NormalSprite;
                          _this.button9Mask.active = false; //button2Mask

                          _this.button2Mask.active = true;
                          var button2MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                          _this.button2Mask.runAction(button2MaskAction); //button2


                          _this.button[1].interactable = true;

                          _this.button2.on("touchstart", function (event) {
                            _this.garbageName1.string = "废旧手机";
                            _this.button[1].normalSprite = _this.button2NormalSprite; //this.button2.destroy();
                            //this.button2Mask.destroy();
                            //button7Mask

                            _this.button7Mask.active = true;
                            var button7MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                            _this.button7Mask.runAction(button7MaskAction); //button7


                            _this.button[6].interactable = true;

                            _this.button7.on("touchstart", function (event) {
                              _this.garbageName1.string = "铁架子";
                              _this.button[6].normalSprite = _this.button7NormalSprite;
                              _this.button7Mask.active = false; //errorTipMask

                              var node9 = cc.instantiate(_this.prefab[9]);
                              node9.parent = _this.node;
                              node9.on("touchstart", function (event) {
                                node9.destroy(); //button3Mask/button7Mask/button9Mask

                                _this.button3Mask.active = true;
                                _this.button7Mask.active = true;
                                _this.button9Mask.active = true;
                                var button3MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                _this.button3Mask.runAction(button3MaskAction);

                                _this.button3Mask.on("touchstart", function (event) {
                                  count = count + 1;
                                  _this.button[2].normalSprite = _this.buttonDefaultNorm;

                                  if (count == 3) {
                                    //passTheGame
                                    var node10 = cc.instantiate(_this.prefab[10]);
                                    node10.parent = _this.node;
                                    node10.on("touchstart", function (event) {
                                      node10.destroy();
                                      var node11 = cc.instantiate(_this.prefab[11]);
                                      node11.parent = _this.node;
                                      node11.on("touchstart", function (event) {
                                        node11.destroy(); //button2Mask/button4Mask/button5Mask/button6Mask/button8Mask

                                        _this.button2Mask.active = true;
                                        _this.button4Mask.active = true;
                                        _this.button5Mask.active = true;
                                        _this.button6Mask.active = true;
                                        _this.button8Mask.active = true;
                                        var button2MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button2Mask.runAction(button2MaskAction);

                                        var button4MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button4Mask.runAction(button4MaskAction);

                                        var button5MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button5Mask.runAction(button5MaskAction);

                                        var button6MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button6Mask.runAction(button6MaskAction);

                                        var button8MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button8Mask.runAction(button8MaskAction); //tipPictureMask 


                                        _this.tipPictureMask.active = true;
                                        var tipPicture1Action = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.tipPictureMask.runAction(tipPicture1Action); //nextPage


                                        var node12 = cc.instantiate(_this.prefab[12]);
                                        node12.parent = _this.node;
                                        node12.on("touchstart", function (event) {
                                          cc.director.loadScene(_this.scene);
                                        }, _this);
                                      }, _this);
                                    }, _this);
                                  }
                                }, _this);

                                var button7MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                _this.button7Mask.runAction(button7MaskAction);

                                _this.button7Mask.on("touchstart", function (event) {
                                  count = count + 1;
                                  _this.button[6].normalSprite = _this.buttonDefaultNorm;

                                  if (count == 3) {
                                    //passTheGame
                                    var node10 = cc.instantiate(_this.prefab[10]);
                                    node10.parent = _this.node;
                                    node10.on("touchstart", function (event) {
                                      node10.destroy();
                                      var node11 = cc.instantiate(_this.prefab[11]);
                                      node11.parent = _this.node;
                                      node11.on("touchstart", function (event) {
                                        node11.destroy(); //button2Mask/button4Mask/button5Mask/button6Mask/button8Mask

                                        _this.button2Mask.active = true;
                                        _this.button4Mask.active = true;
                                        _this.button5Mask.active = true;
                                        _this.button6Mask.active = true;
                                        _this.button8Mask.active = true;
                                        var button2MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button2Mask.runAction(button2MaskAction);

                                        var button4MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button4Mask.runAction(button4MaskAction);

                                        var button5MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button5Mask.runAction(button5MaskAction);

                                        var button6MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button6Mask.runAction(button6MaskAction);

                                        var button8MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button8Mask.runAction(button8MaskAction); //tipPictureMask 


                                        _this.tipPictureMask.active = true;
                                        var tipPicture1Action = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.tipPictureMask.runAction(tipPicture1Action); //nextPage


                                        var node12 = cc.instantiate(_this.prefab[12]);
                                        node12.parent = _this.node;
                                        node12.on("touchstart", function (event) {
                                          cc.director.loadScene(_this.scene);
                                        }, _this);
                                      }, _this);
                                    }, _this);
                                  }
                                }, _this);

                                var button9MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                _this.button9Mask.runAction(button9MaskAction);

                                _this.button9Mask.on("touchstart", function (event) {
                                  count = count + 1;
                                  _this.button[8].normalSprite = _this.buttonDefaultNorm;

                                  if (count == 3) {
                                    //passTheGame
                                    var node10 = cc.instantiate(_this.prefab[10]);
                                    node10.parent = _this.node;
                                    node10.on("touchstart", function (event) {
                                      node10.destroy();
                                      var node11 = cc.instantiate(_this.prefab[11]);
                                      node11.parent = _this.node;
                                      node11.on("touchstart", function (event) {
                                        node11.destroy(); //button2Mask/button4Mask/button5Mask/button6Mask/button8Mask

                                        _this.button2Mask.active = true;
                                        _this.button4Mask.active = true;
                                        _this.button5Mask.active = true;
                                        _this.button6Mask.active = true;
                                        _this.button8Mask.active = true;
                                        var button2MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button2Mask.runAction(button2MaskAction);

                                        var button4MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button4Mask.runAction(button4MaskAction);

                                        var button5MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button5Mask.runAction(button5MaskAction);

                                        var button6MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button6Mask.runAction(button6MaskAction);

                                        var button8MaskAction = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.button8Mask.runAction(button8MaskAction); //tipPictureMask 


                                        _this.tipPictureMask.active = true;
                                        var tipPicture1Action = cc.sequence(cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1), cc.fadeIn(0.1), cc.fadeOut(0.1));

                                        _this.tipPictureMask.runAction(tipPicture1Action); //nextPage


                                        var node12 = cc.instantiate(_this.prefab[12]);
                                        node12.parent = _this.node;
                                        node12.on("touchstart", function (event) {
                                          cc.director.loadScene(_this.scene);
                                        }, _this);
                                      }, _this);
                                    }, _this);
                                  }
                                }, _this);
                              }, _this);
                            }, _this);
                          }, _this);
                        }, _this);
                      }, _this);
                    }, _this);
                  }, _this);
                }, _this);
              }, _this);
            }, _this);
          }, _this);
        }, _this); //继续其他按钮的介绍
        //按钮介绍完毕后需要按钮交互时需要开启方块按钮的交互
        //this.button.interactable = true;
      }, _this);
    }, this);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();