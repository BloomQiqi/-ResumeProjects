//放在每个场景的Canvas上，
cc.Class({
    extends: cc.Component,

    properties: {
        firstPage1:"firstPage1",
        isJump:"isJump",
        thirdPage:"thirdPage",
        tutorialPage:"tutorialPage",
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.preLoadIsJump();
    },

    preLoadFirstPage1()
    {
        cc.director.preloadScene(this.firstPage1,function(){
            cc.log("firstPage1预加载完毕！");
        });
    },
    preLoadIsJump()
    {
        cc.director.preloadScene(this.isJump,function(){
            cc.log("isJump预加载完毕！");
        });
    },
    preLoadThirdPage()
    {
        cc.director.preloadScene(this.thirdPage,function(){
            cc.log("thirdPage预加载完毕！");
        });
    },
    preLoadTutorialPage()
    {
        cc.director.preloadScene(this.tutorialPage,function(){
            cc.log("tutorialPage预加载完毕！");
        });
    }
});
