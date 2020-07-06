
cc.Class({
    extends: cc.Component,

    properties: {
        garbage1:cc.Node,
        garbage2:cc.Node,
        garbage3:cc.Node,
        garbage4:cc.Node,
        button:cc.Node,
        button1:cc.Button,
        garbage11:cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    changeScaleAndMove:function(){
        this.schedule(function(){
            var garbage1_action2 = cc.speed(
                cc.spawn(
                    cc.scaleTo(0.1,3.3,3),
                    cc.moveTo(0.1,-133.61, 94.819),
                )
            ,0.05)
            this.garbage1.runAction(garbage1_action2);
            // if(this.garbage1.x == 160){
            //     cc.log("1");
            //     cc.log(this.garbage1.x);
            //     cc.log(this.garbage1.y);
            // }
                
            
            
            
            var garbage4_action2 = cc.speed(
                cc.spawn(
                    cc.scaleTo(0.1,3.3,3),
                    cc.moveTo(0.1,134.966, -262.91),
                )
            ,0.05)
            this.garbage4.runAction(garbage4_action2);
                // cc.log("4");
                // cc.log(this.garbage4.x);
                // cc.log(this.garbage4.y);
            
            
    
            
            var garbage3_action2 = cc.speed(
                cc.spawn(
                    cc.scaleTo(0.1,3.3,3),
                    cc.moveTo(0.1,-133.61, -262.91),
                )
            ,0.05)
            this.garbage3.runAction(garbage3_action2);
                // cc.log("3");
                // cc.log(this.garbage3.x);
                // cc.log(this.garbage3.y);
            
            
           
            var garbage2_action2 = cc.speed(
                cc.spawn(
                    cc.scaleTo(0.1,3.3,3),
                    cc.moveTo(0.1,134.966, 94.819),
                )
            ,0.05)
            this.garbage2.runAction(garbage2_action2);
        },1.5,0,0)
        
        this.schedule(function(){
            this.button1.interactable = true;
            this.garbage11.interactable = true;
        },3,0,0)
        
            // cc.log("2");
            // cc.log(this.garbage2.x);
            // cc.log(this.garbage2.y);
    },

    start () {

    },

    // update (dt) {},
});
