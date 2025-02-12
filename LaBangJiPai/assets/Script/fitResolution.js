// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var canvas = this.node.getComponent(cc.Canvas);
        var designWidthDiHeight = 720/1080.0;
        var widthDiHeight = cc.winSize.width/cc.winSize.height;
        if(designWidthDiHeight>widthDiHeight)
        {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
        else
        {
            canvas.fitHeight = false;
            canvas.fitWidth = true;
        }
    },


    // update (dt) {},
});
