

cc.Class({
    extends: cc.Component,

    properties: {
        garbage1:cc.Node,
        garbage2:cc.Node,
        garbage3:cc.Node,
        garbage4:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.garbage1.active = false;
        this.garbage2.active = false;
        this.garbage3.active = false;
        this.garbage4.active = false;
    },

    start () {

    },

    // update (dt) {},
});
