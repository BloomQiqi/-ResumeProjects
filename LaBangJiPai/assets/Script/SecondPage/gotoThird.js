cc.Class({
    extends: cc.Component,

    properties: {
        scene:"",
    },
    onload(){
        // cc.loader.downloader.loadSubpackage('ThirdPage',function(err){
        //     if(err)
        //     {
        //         return cc.error(err);
        //     }
        //     cc.log('Load SubPackage3 Successfully');
        // });
    },
    changeScene:function(){
        cc.director.loadScene(this.scene,function(){

        });
    }

    // update (dt) {},
});
