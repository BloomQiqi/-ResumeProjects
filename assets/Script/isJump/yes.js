

cc.Class({
    extends: cc.Component,

    properties: {
        scene:"tutorialPage",
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    gotoTutorialPage:function(){
        cc.director.loadScene(this.scene);
    },
    // update (dt) {},
});
