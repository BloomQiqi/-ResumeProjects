

cc.Class({
    extends: cc.Component,

    properties: {
        scene:"secondPage",
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    changeScene:function(){
        cc.director.loadScene(this.scene);
    }

    // update (dt) {},
});
