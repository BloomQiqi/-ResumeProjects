
cc.Class({
    extends: cc.Component,

    properties: {

        button:cc.Button,
    },
    start(){
        this.parent = this.node.getParent().getComponent("Initate");
        //cc.log(this.parent);
        // this.node.on('touchstart',this.OnClick(),this);
    },

    OnClick(){
       //  cc.log(this.parent);
       // cc.log(this.parent.levelNum);////////////////////////////////////////////////////////////////////////// 
        
        var index = this.node.getSiblingIndex();//获取索引 到底是父节点的那一个子节点被点击
        //判断当前block 处于背景图还是垃圾图
        cc.log("index "+index);

        if(this.parent.isFront[index]) //当前处于背景图
        {
            this.parent.isFront[index] = false;

            this.button.normalSprite = this.parent.garbagePhoto[this.parent.garbageIndex[index]];//切换button背景图片为垃圾图片
            this.button.hoverSprite = this.parent.garbagePhoto[this.parent.garbageIndex[index]];
            
           // cc.log(this.parent.garbagePhoto[this.parent.garbageIndex[index]]);
            this.parent.garbageNameLabel.string = this.parent.garbagePhoto[this.parent.garbageIndex[index]].name;

            //this.parent.playMusicClips(this.parent.isRight[index]);   //播放音效   第一张方式
            this.parent.playMusicClips();
           
           if(this.parent.isRight[index])
           {
               
               if(--this.parent.rightLeftNum==0)      /////////////成功通关！  可能更改条件
               {
                    this.parent.popUpPassLevel();
                    this.parent.particleSmokeFlower.resetSystem();
               }
           }
           else   //isFront = true && isRight =false 
           {
              //翻出了错误的block              
               if(++this.parent.errorNum>=this.parent.n)  //提示 已错3个
               {
                   this.scheduleOnce(function(){
                    this.parent.textTipLabel.string = '您以翻错了3个，请翻回！';
                   },0.01);
                   this.scheduleOnce(function(){
                    this.parent.textTipLabel.string = '';
                   },6);
                   this.error3();           //修改交互性 初始化此状态的变量     
               }
           }

           

           cc.log('剩余正确的：'+this.parent.rightLeftNum+' 当前已翻错：'+this.parent.errorNum);
        }
        else  //翻回已翻开的block
        {

            this.parent.isFront[index] = true;
            this.button.normalSprite = this.parent.garbagePhotoBackGround;//切换button背景图片为默认背景图片   默认背景图片总是放在最后一个
            this.button.hoverSprite= this.parent.garbagePhotoBackGround;//切换button背景图片为默认背景图片   默认背景图片总是放在最后一个


           if(this.parent.isRight[index])
           {
               this.parent.rightLeftNum++;//剩余正确的block 加一
           }
           else   //isFront = false && isRight =false  
           {
               this.parent.errorNum--;//翻回了翻错误的block  
           }

           if(this.parent.erroring3flag)  //如果处于改错状态
           {
               if(--this.parent.erroring3Count == 0)//改错状态翻回次数已用完
               {
                   this.parent.erroring3flag=false;    //结束改错状态
                   if(this.parent.errorNum>=2)   //至多找回了一个翻错的block
                   {
                       //
                       this.PopUpPage();//弹出知识小提示  呼吸动画效果

                       --this.parent.life;
                       
                       errorGarbagePhoto = this.parent.garbagePhoto[this.parent.garbageIndex[index]];  //此变量用于 和知识小提示图片进行交互

                       this.parent.changeLifeSprite();
                       //this.parent.lifeLabel.string = "Life:"+this.parent.life;
                       if(this.parent.life==0)      //生命值减一           ////////////////////////////////////////////提示标志未加！
                       {
                            //parent.textTipLabel.string = "生命值为0！！！闯关失败" ;    //使用计时器                            //////////////////////关卡结束  后期可以改成弹窗或者一个动画
                            //更新life
                            this.parent.popUpNotPassLevel();  //弹出关卡失败界面
                       }                          
                   } 
                   //重设isInteractable[i]   所有的皆可交互了()
                   this.resetInteractable();
               }
           }
           cc.log('剩余正确的：'+this.parent.rightLeftNum+' 当前已翻错：'+this.parent.errorNum);
        }
        
    },

    error3(){  //当前翻错超过3个  改变交互性
        this.parent.erroring3flag = true; 
        this.parent.erroring3Count = 3;    //有3次翻回的机会  
        
        for(var i = 0;i < this.parent.garbageIndex.length;i++ )
        {
            if(this.parent.isFront[i])  //如果未翻开则不能翻开   
            {
                this.parent.isInteractable[i] = false;
                this.node.parent.children[i].getComponent(cc.Button).interactable = this.parent.isInteractable[i];      
            }
        }
    },
    resetInteractable()           //重设isInteractable[i]
    {
        for(var i = 0;i < this.parent.garbageIndex.length;i++ )
        {    
            this.parent.isInteractable[i] = true;
            this.node.parent.children[i].getComponent(cc.Button).interactable = this.parent.isInteractable[i];             
        }
    },
    //未调用
    setTextLabelTip1Callback(){   //滚动提示                  ////////////////////////////////////////////设置滚动提示       
        this.parent.textTipLabel.string = '您以翻错了3个，请翻回！';
    },
    setTextLabelDefCallback(){   //设提示文字label 为默认状态
        this.parent.textTipLabel.string = "";
    },
    // update (dt) {},

    PopUpPage(){
        var tipPhoto=this.parent.tipKnowledgeNode.getComponent("tipPhoto");
        tipPhoto.popupPage2();

        // cc.find("Canvas").pauseSystemEvents(true);
        // node1.on("touchstart",event=>{    
        //     this.upFlag = false;
        //     cc.log("销毁了一个");
        //     node1.destroy();
        //     cc.find("Canvas").resumeSystemEvents(true);
        // },this);

    }
});


