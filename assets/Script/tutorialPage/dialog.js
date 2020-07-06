
cc.Class({
    extends: cc.Component,

    properties: {

        scene:"thirdPage",
        garbageName1:cc.Label,
        prefab:{
            default:[],
            type:[cc.Prefab],
        },
        stopMask:cc.Node,
        garbageTypeMask:cc.Node,
        tipPictureMask:cc.Node,
        button5Mask:cc.Node,
        button3Mask:cc.Node,
        button9Mask:cc.Node,
        button2Mask:cc.Node,
        button7Mask:cc.Node,
        button4Mask:cc.Node,
        button6Mask:cc.Node,
        button8Mask:cc.Node,

        button:{
            default:[],
            type:cc.Button,
        },
        button5:cc.Node,
        button5NormalSprite:cc.SpriteFrame,
        button3:cc.Node,
        button3NormalSprite:cc.SpriteFrame,
        button9:cc.Node,
        button9NormalSprite:cc.SpriteFrame,
        button2:cc.Node,
        button2NormalSprite:cc.SpriteFrame,
        button7:cc.Node,
        button7NormalSprite:cc.SpriteFrame,
        buttonDefaultNorm:cc.SpriteFrame,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
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
        this.button8Mask.runAction(cc.hide());

        //elfin
        let node0 = cc.instantiate(this.prefab[0]);
        node0.parent = this.node;
        //dialog
        let node1 = cc.instantiate(this.prefab[1]);
        node1.parent = this.node;
        node1.on("touchstart",event=>{    
            node1.destroy();
            //开始逐个介绍
            
            //stopMask
            this.stopMask.active = true;
            var stopAction = cc.sequence(
                cc.fadeIn(0.1),
                cc.fadeOut(0.1),
                cc.fadeIn(0.1),
                cc.fadeOut(0.1),
                cc.fadeIn(0.1),
                cc.fadeOut(0.1),
            )
            this.stopMask.runAction(stopAction);

            //stopButtonIntro
            let node2 = cc.instantiate(this.prefab[2]);
            node2.parent = this.node;
            node2.on("touchstart",event=>{
                node2.destroy();
                // garbageTypeMask
                this.garbageTypeMask.active = true;
                var garbageTypeMaskAction = cc.sequence(
                    cc.fadeIn(0.1),
                    cc.fadeOut(0.1),
                    cc.fadeIn(0.1),
                    cc.fadeOut(0.1),
                    cc.fadeIn(0.1),
                    cc.fadeOut(0.1),
                )
                this.garbageTypeMask.runAction(garbageTypeMaskAction);

                //garbageTypeIntro
                let node3 = cc.instantiate(this.prefab[3]);
                node3.parent = this.node;
                node3.on("touchstart",event=>{
                    node3.destroy();
                    //tipPictureMask
                    this.tipPictureMask.active = true;
                    var tipPictureMaskAction = cc.sequence(
                        cc.fadeIn(0.1),
                        cc.fadeOut(0.1),
                        cc.fadeIn(0.1),
                        cc.fadeOut(0.1),
                        cc.fadeIn(0.1),
                        cc.fadeOut(0.1),
                    )
                    this.tipPictureMask.runAction(tipPictureMaskAction);

                    //tipPictureIntro
                    let node4 = cc.instantiate(this.prefab[4]);
                    node4.parent = this.node;
                    node4.on("touchstart",event=>{
                        node4.destroy();

                        //ruleIntro
                        let node5 = cc.instantiate(this.prefab[5]);
                        node5.parent = this.node;
                        node5.on("touchstart",event=>{
                            node5.destroy();
                            //rule1Intro
                            let node6 = cc.instantiate(this.prefab[6]);
                            node6.parent = this.node;
                            node6.on("touchstart",event=>{
                                node6.destroy();
                                //rule2Intro
                                let node7 = cc.instantiate(this.prefab[7]);
                                node7.parent = this.node;
                                node7.on("touchstart",event=>{
                                    node7.destroy();
                                    //rule3Intro
                                    let node8 = cc.instantiate(this.prefab[8]);
                                    node8.parent = this.node;
                                    node8.on("touchstart",event=>{
                                        node8.destroy();
                                        //button5Mask
                                        this.button5Mask.active = true;
                                        var button5MaskAction = cc.sequence(
                                            cc.fadeIn(0.1),
                                            cc.fadeOut(0.1),
                                            cc.fadeIn(0.1),
                                            cc.fadeOut(0.1),
                                            cc.fadeIn(0.1),
                                            cc.fadeOut(0.1),
                                        )
                                        this.button5Mask.runAction(button5MaskAction);
                                        //button5
                                        this.button[4].interactable = true;
                                        this.button5.on("touchstart",event=>{
                                            this.garbageName1.string = "废钢";
                                            this.button[4].normalSprite = this.button5NormalSprite;
                                            //this.button5.destroy();
                                            //this.button[4].interactable = false;
                                            //button3Mask
                                            this.button3Mask.active = true;
                                            var button3MaskAction = cc.sequence(
                                                cc.fadeIn(0.1),
                                                cc.fadeOut(0.1),
                                                cc.fadeIn(0.1),
                                                cc.fadeOut(0.1),
                                                cc.fadeIn(0.1),
                                                cc.fadeOut(0.1),
                                            )
                                            this.button3Mask.runAction(button3MaskAction);
                                            //button3
                                            this.button[2].interactable = true;
                                            this.button3.on("touchstart",event=>{   
                                                this.garbageName1.string = "针线";                                          
                                                this.button[2].normalSprite = this.button3NormalSprite;
                                                this.button3Mask.active = false;
                                                //button9Mask
                                                this.button9Mask.active = true;
                                                var button9MaskAction = cc.sequence(
                                                    cc.fadeIn(0.1),
                                                    cc.fadeOut(0.1),
                                                    cc.fadeIn(0.1),
                                                    cc.fadeOut(0.1),
                                                    cc.fadeIn(0.1),
                                                    cc.fadeOut(0.1),
                                                )
                                                this.button9Mask.runAction(button9MaskAction);
                                                //button9
                                                this.button[8].interactable = true;
                                                this.button9.on("touchstart",event=>{
                                                    this.garbageName1.string = "绳子";
                                                    this.button[8].normalSprite = this.button9NormalSprite;
                                                    this.button9Mask.active = false;
                                                    //button2Mask
                                                    this.button2Mask.active = true;
                                                    var button2MaskAction = cc.sequence(
                                                        cc.fadeIn(0.1),
                                                        cc.fadeOut(0.1),
                                                        cc.fadeIn(0.1),
                                                        cc.fadeOut(0.1),
                                                        cc.fadeIn(0.1),
                                                        cc.fadeOut(0.1),
                                                    )
                                                    this.button2Mask.runAction(button2MaskAction);
                                                    //button2
                                                    this.button[1].interactable = true;
                                                    this.button2.on("touchstart",event=>{
                                                        this.garbageName1.string = "废旧手机";
                                                        this.button[1].normalSprite = this.button2NormalSprite;
                                                        //this.button2.destroy();
                                                        //this.button2Mask.destroy();
                                                        //button7Mask
                                                        this.button7Mask.active = true;
                                                        var button7MaskAction = cc.sequence(
                                                            cc.fadeIn(0.1),
                                                            cc.fadeOut(0.1),
                                                            cc.fadeIn(0.1),
                                                            cc.fadeOut(0.1),
                                                            cc.fadeIn(0.1),
                                                            cc.fadeOut(0.1),
                                                        )
                                                        this.button7Mask.runAction(button7MaskAction);
                                                        //button7
                                                        this.button[6].interactable = true;
                                                        this.button7.on("touchstart",event=>{
                                                            this.garbageName1.string = "铁架子";
                                                            this.button[6].normalSprite = this.button7NormalSprite;
                                                            this.button7Mask.active = false;
                                                            //errorTipMask
                                                            let node9 = cc.instantiate(this.prefab[9]);
                                                            node9.parent = this.node;
                                                            node9.on("touchstart",event=>{
                                                                node9.destroy();
                                                                //button3Mask/button7Mask/button9Mask
                                                                this.button3Mask.active = true;
                                                                this.button7Mask.active = true;
                                                                this.button9Mask.active = true;
                                                                var button3MaskAction = cc.sequence(
                                                                    cc.fadeIn(0.1),
                                                                    cc.fadeOut(0.1),
                                                                    cc.fadeIn(0.1),
                                                                    cc.fadeOut(0.1),
                                                                    cc.fadeIn(0.1),
                                                                    cc.fadeOut(0.1),
                                                                )
                                                                this.button3Mask.runAction(button3MaskAction);
                                                                this.button3Mask.on("touchstart",event=>{
                                                                    count = count + 1;
                                                        
                                                                    this.button[2].normalSprite = this.buttonDefaultNorm;
                                                                    if(count == 3){
                                                                        
                                                                        //passTheGame
                                                                        let node10 = cc.instantiate(this.prefab[10]);
                                                                        node10.parent = this.node;
                                                                        node10.on("touchstart",event=>{
                                                                            node10.destroy();
                                                                            let node11 = cc.instantiate(this.prefab[11]);
                                                                            node11.parent = this.node;
                                                                            node11.on("touchstart",event=>{
                                                                                node11.destroy();
                                                                                //button2Mask/button4Mask/button5Mask/button6Mask/button8Mask
                                                                                this.button2Mask.active = true;
                                                                                this.button4Mask.active = true;
                                                                                this.button5Mask.active = true;
                                                                                this.button6Mask.active = true;
                                                                                this.button8Mask.active = true;
                                                                                var button2MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button2Mask.runAction(button2MaskAction);
                                                                                var button4MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button4Mask.runAction(button4MaskAction);
                                                                                var button5MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button5Mask.runAction(button5MaskAction);
                                                                                var button6MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button6Mask.runAction(button6MaskAction);
                                                                                var button8MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button8Mask.runAction(button8MaskAction);
                                                                                //tipPictureMask 
                                                                                this.tipPictureMask.active = true;
                                                                                var tipPicture1Action = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.tipPictureMask.runAction(tipPicture1Action);
                                                                                //nextPage
                                                                                let node12 = cc.instantiate(this.prefab[12]);
                                                                                node12.parent = this.node;
                                                                                node12.on("touchstart",event=>{
                                                                                    cc.director.loadScene(this.scene);
                                                                                },this);
                                                                            },this);
                                                                        },this);
                                                                    }
                                                                },this);
                                                                var button7MaskAction = cc.sequence(
                                                                    cc.fadeIn(0.1),
                                                                    cc.fadeOut(0.1),
                                                                    cc.fadeIn(0.1),
                                                                    cc.fadeOut(0.1),
                                                                    cc.fadeIn(0.1),
                                                                    cc.fadeOut(0.1),
                                                                )
                                                                this.button7Mask.runAction(button7MaskAction);
                                                                this.button7Mask.on("touchstart",event=>{
                                                                    count = count + 1;
                                                                    this.button[6].normalSprite = this.buttonDefaultNorm;
                                                                    if(count == 3){
                                                                        
                                                                        //passTheGame
                                                                        let node10 = cc.instantiate(this.prefab[10]);
                                                                        node10.parent = this.node;
                                                                        node10.on("touchstart",event=>{
                                                                            node10.destroy();
                                                                            let node11 = cc.instantiate(this.prefab[11]);
                                                                            node11.parent = this.node;
                                                                            node11.on("touchstart",event=>{
                                                                                node11.destroy();
                                                                                //button2Mask/button4Mask/button5Mask/button6Mask/button8Mask
                                                                                this.button2Mask.active = true;
                                                                                this.button4Mask.active = true;
                                                                                this.button5Mask.active = true;
                                                                                this.button6Mask.active = true;
                                                                                this.button8Mask.active = true;
                                                                                var button2MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button2Mask.runAction(button2MaskAction);
                                                                                var button4MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button4Mask.runAction(button4MaskAction);
                                                                                var button5MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button5Mask.runAction(button5MaskAction);
                                                                                var button6MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button6Mask.runAction(button6MaskAction);
                                                                                var button8MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button8Mask.runAction(button8MaskAction);
                                                                                //tipPictureMask 
                                                                                this.tipPictureMask.active = true;
                                                                                var tipPicture1Action = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.tipPictureMask.runAction(tipPicture1Action);
                                                                                //nextPage
                                                                                let node12 = cc.instantiate(this.prefab[12]);
                                                                                node12.parent = this.node;
                                                                                node12.on("touchstart",event=>{
                                                                                    cc.director.loadScene(this.scene);
                                                                                },this);
                                                                            },this);
                                                                        },this);
                                                                    }
                                                                },this);
                                                                var button9MaskAction = cc.sequence(
                                                                    cc.fadeIn(0.1),
                                                                    cc.fadeOut(0.1),
                                                                    cc.fadeIn(0.1),
                                                                    cc.fadeOut(0.1),
                                                                    cc.fadeIn(0.1),
                                                                    cc.fadeOut(0.1),
                                                                )
                                                                this.button9Mask.runAction(button9MaskAction);
                                                                this.button9Mask.on("touchstart",event=>{
                                                                    count = count + 1;
                                                                    this.button[8].normalSprite = this.buttonDefaultNorm;

                                                                    if(count == 3){
                                                                        
                                                                        //passTheGame
                                                                        let node10 = cc.instantiate(this.prefab[10]);
                                                                        node10.parent = this.node;
                                                                        node10.on("touchstart",event=>{
                                                                            node10.destroy();
                                                                            let node11 = cc.instantiate(this.prefab[11]);
                                                                            node11.parent = this.node;
                                                                            node11.on("touchstart",event=>{
                                                                                node11.destroy();
                                                                                //button2Mask/button4Mask/button5Mask/button6Mask/button8Mask
                                                                                this.button2Mask.active = true;
                                                                                this.button4Mask.active = true;
                                                                                this.button5Mask.active = true;
                                                                                this.button6Mask.active = true;
                                                                                this.button8Mask.active = true;
                                                                                var button2MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button2Mask.runAction(button2MaskAction);
                                                                                var button4MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button4Mask.runAction(button4MaskAction);
                                                                                var button5MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button5Mask.runAction(button5MaskAction);
                                                                                var button6MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button6Mask.runAction(button6MaskAction);
                                                                                var button8MaskAction = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.button8Mask.runAction(button8MaskAction);
                                                                                //tipPictureMask 
                                                                                this.tipPictureMask.active = true;
                                                                                var tipPicture1Action = cc.sequence(
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                    cc.fadeIn(0.1),
                                                                                    cc.fadeOut(0.1),
                                                                                )
                                                                                this.tipPictureMask.runAction(tipPicture1Action);
                                                                                //nextPage
                                                                                let node12 = cc.instantiate(this.prefab[12]);
                                                                                node12.parent = this.node;
                                                                                node12.on("touchstart",event=>{
                                                                                    cc.director.loadScene(this.scene);
                                                                                },this);
                                                                            },this);
                                                                        },this);
                                                                    }
                                                                },this);
                                                            },this);
                                                        },this);
                                                    },this);
                                                },this);                                               
                                            },this);
                                        },this);
                                    },this);
                                },this);
                            },this);
                        },this);
                    },this);
                },this);
                //继续其他按钮的介绍
                //按钮介绍完毕后需要按钮交互时需要开启方块按钮的交互
                //this.button.interactable = true;
            },this);
        },this);       
    },

    start () {

    },

    // update (dt) {},
});
