

cc.Class({
    extends: cc.Component,

    properties: {
        tipPicture:cc.Prefab,
        stopButton:cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    showTipPicture:function(){
        this.stopButton.interactable = false;
        let node = cc.instantiate(this.tipPicture);
        this.node.parent.addChild(node);

        
        node.on("touchstart",event=>{    
            node.destroy();
            this.stopButton.interactable = true;
        },this);

        
    },
    // update (dt) {},
});
