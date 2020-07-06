

cc.Class({
    extends: cc.Component,

    properties: {
        scene:"firstPage",
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    changeScene:function(){
        cc.director.loadScene(this.scene);
    },
    

    // update (dt) {},
});
