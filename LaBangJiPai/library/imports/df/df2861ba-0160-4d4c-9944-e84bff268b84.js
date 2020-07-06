"use strict";
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