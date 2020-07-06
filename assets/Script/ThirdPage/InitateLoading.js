// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        prefab:{
            default:null,
            type:cc.Prefab,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.scheduleOnce(function(){
            var node1 = cc.instantiate(this.prefab);
            this.node.parent.addChild(node1);
            this.scheduleOnce(function(){
                node1.destroy();
            },2);
        },0);
        
    },

    // update (dt) {},
});
