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

    start () {
        this.scheduleOnce(function(){
            cc.loader.downloader.loadSubpackage('ThirdPage',function(err){
                if(err)
                {
                    return cc.error(err);
                }
                cc.log('Load SubPackage1 Successfully');
            });
            cc.loader.downloader.loadSubpackage('music',function(err){
                if(err)
                {
                    return cc.error(err);
                }
                cc.log('Load SubPackage2 Successfully');
            });
            cc.loader.downloader.loadSubpackage('lifeSpriteFrame',function(err){
                if(err)
                {
                    return cc.error(err);
                }
                cc.log('Load SubPackage3 Successfully');
            });
            cc.loader.downloader.loadSubpackage('FirstPage',function(err){
                if(err)
                {
                    return cc.error(err);
                }
                cc.log('Load SubPackage4 Successfully');
            });

            // cc.loader.downloader.loadSubpackage('kitchenGarbage',function(err){
            //     if(err)
            //     {
            //         return cc.error(err);
            //     }
            //     cc.log('Load SubPackage3 Successfully');
            // });
        },0.1);
    },

    // update (dt) {},
});
