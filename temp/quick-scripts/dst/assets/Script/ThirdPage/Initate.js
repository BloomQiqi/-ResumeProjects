
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/Initate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96198Pd4ZpOopLfEfhswWAv', 'Initate');
// Script/ThirdPage/Initate.js

"use strict";

//var cfk = require("levelBlocksPics");
//import levelBlockPics, { pics } from "levelBlockPics";
var ROWS = 10; // 行数

var LIST = 6; //  列数

var BLOCKSUMS = ROWS * LIST;
var GARBAGENUM = 21; //有多少张垃圾图片   最后一张默认为未翻开垃圾时的背景图片   //可能会取消

var GARBAGEEVERYNUMS = 20; //每一种垃圾有多少张图片

cc.Class({
  "extends": cc.Component,
  properties: {
    n: {
      "default": 3,
      type: cc.Integer,
      tooltip: "变量n 默认为3，影响关卡难度的变量"
    },
    garbagePhoto: {
      "default": [],
      type: [cc.SpriteFrame],
      tooltip: "存储垃圾图片"
    },
    garbagePhotoBackGround: cc.SpriteFrame,
    garbageNameLabel: cc.Label,
    garbageTypeLabel: cc.Label,
    garbageTypeCurrentLevel: {
      //当前关卡的模式                   //选择模式时 传递一个值过来用此变量保存     1 代表可回收垃圾模式  2 厨余 3 有害 4 其它
      "default": 1
    },
    garbageIndex: new Array(),
    isRight: {
      "default": [],
      type: [cc.Boolean]
    },
    //当前位置垃圾是否正确 ture为正
    isFront: {
      "default": [],
      type: [cc.Boolean]
    },
    //block是处于背景图还是垃圾图片，false表示背景图，true为垃圾图片
    isInteractable: {
      "default": [],
      type: [cc.Boolean]
    },
    //当前block是否可交互 ture可
    levelNum: 0,
    //当前处于的关卡数
    levelGarbageType: {
      "default": [],
      type: [cc.Integer],
      tooltip: "存储每一关的垃圾类型（1，2，3，4），1代表当前可回收垃圾，2代表厨余垃圾，3代表有害垃圾，4代表其他垃圾"
    },
    // pic2:{
    //     default:[],
    //     type:[[cc.Integer],[cc.Integer]],
    // },
    // //blockPrefab: cc.Prefab, //方块
    // gap: 20, //间隔,
    //background:cc.Node,
    // pic : new Array(
    //0,0,0,0,0,0,0,0,
    //        1,1,1,1,1,1,1,1,
    //        0,0,0,0,0,0,1,0,
    //        0,1,1,1,0,0,1,0,
    //        0,1,0,1,0,0,1,0,
    //        0,1,1,1,0,0,1,0,
    //        0,0,0,0,0,0,1,0,
    //        0,0,0,0,0,0,1,0,
    //        0,0,0,0,0,1,1,0,
    //        0,0,0,0,0,0,0,0)
    pic: {
      "default": [],
      type: [cc.Integer]
    },
    errorNum: {
      "default": 0,
      type: cc.Integer,
      visible: false,
      tooltip: "当前已经翻开的错误垃圾块数"
    },
    rightLeftNum: {
      //与errorNum一起用于判断关卡结束   如果rightLeftNum&&errorNUm ==0
      "default": 0,
      type: cc.Integer,
      visible: false,
      tooltip: "剩余未翻开的正确的垃圾块数"
    },
    erroring3flag: {
      //标志状态     为true表示 正处于错误超过3个 只能翻回已翻开block中
      "default": false,
      // type:cc.Boolean,
      visible: false
    },
    erroring3Count: {
      //erroring3 状态中 翻动block的次数
      "default": 3,
      //////////////////////n
      type: cc.Integer,
      visible: false
    },
    lifeLabel: cc.Label,
    life: {
      ///关卡变化的时候要初始化                    //////////////////////////////////////////////////
      "default": 3,
      type: cc.Integer,
      tooltip: "生命值，默认为3"
    },
    scoreLabel: cc.Label,
    score: {
      "default": 0,
      visible: false,
      type: cc.Integer
    },
    textTipLabel: cc.Label,
    particleSmokeFlower: cc.ParticleSystem,
    notPassLevelPrefab: cc.Prefab,
    passLevelPrefab: cc.Prefab,
    // musicClips:{              //存储音数， 17个  动态资源绑定！
    //     default:[],
    //     type:[cc.AudioClip],
    //     visible:false,
    // },
    // musicsYingShu:{
    //     default:4,
    //     type:cc.Integer,
    //     tooltip:"按一下播放几个音",
    // },
    // musicClipsDuration:{  //不同音之间的间隔时间
    //     default:0.5,
    //     type:cc.Float, 
    //     tooltip:"两段音之间的间隔时间"        
    // },
    musicDuanShu: {
      //  总共有多少小节
      "default": 0,
      type: cc.Integer,
      visible: false
    },
    musicDuanShuTemp: {
      //  初始为0 ，随着按钮点击增加
      "default": 0,
      type: cc.Integer,
      visible: false
    },
    musicHuanChong: {
      //缓冲数组 存musicDuanShuTemp的   如musicHuanChong = 2，表示还需要播放2段音数
      "default": 0,
      type: cc.Integer,
      visible: false
    },
    // musicIsPlaying:{    //当前是否还有音在播放
    //     default:false,
    //     type:cc.Boolean,
    //     visible:false,
    // },
    musicAudioID: {
      //利用cc.audioEngine.play() 返回一个id，首先把17个音都播放一次，记录下id 到时可以直接播放，不用在创建新的播放了
      "default": [],
      //同时也可控制音量
      type: [cc.Integer]
    },
    // musicVolum:{
    //     default:1.0,
    //     type:cc.Float
    // },
    // musicCurrentLevel:{      ////当前关卡的音乐   二维数组  初始化时体现   行表示同一时间的发音
    //     default:[],
    //     type:[cc.Integer],
    //     visible:false,
    // },
    // musics:{                 //所有的音乐   三维数组  初始化时体现
    //     default:[],
    //     type:[cc.Integer],
    //     visible:false,
    // }
    tipKnowledgeNode: {
      "default": null,
      type: cc.node
    },
    //扣生命值后，控制弹出的脚本的节点 即tipKnowledgeButton
    lifeSpriteFrames: {
      "default": [],
      type: cc.SpriteFrame
    },
    lifeSpriteNode: {
      "default": null,
      type: cc.node
    },
    garbageTypePhoLength: new Array(),
    //[0]可回收  [1]厨余 [2]其他 [3]有害  按顺序记录到当前的垃圾图片数 garbageTypePhoLength[0] 代表可回收有多少张垃圾
    garbageTypePhoLengthIndex: {
      "default": 0,
      type: cc.Integer,
      visible: false
    }
  },
  start: function start() {
    this.garbagePhotoInit();
  },

  /*
  初始化数组
  建立一个初始化的数组存储方块的属性
       [[垃圾对应的KEY值,正反的属性值 T代表正面即有垃圾图片的一面,可翻开的属性值 T代表可翻开,标记正确或错误的属性值 T代表正确],[],...]
  例子  [["newsPaper",Ture,Ture,Ture],[...],...]
      [垃圾类型（1，2，3，4）,button的正反（false为背景图片，ture为垃圾图片），是否可翻开（ture可），该位置存储的垃圾是否正确（ture正） ]
   */
  garbagePhotoInit: function garbagePhotoInit() {
    //动态加载图片资源     以便能正常分包
    var par = this; ///////////////////////////////////////////////////////////////1-20 可回收  21-40 厨余垃圾 41-60 有害 61-80 其它 

    cc.log("garbagePhotoInit");
    cc.loader.loadResDir("ThirdPage/kitchenGarbage/keHuiShou", cc.SpriteFrame, function (err, assets, urls) {
      //复制
      if (err) {
        cc.error(err);
      } //cc.log(assets);         


      for (var i = 0; i < assets.length; i++) //    按索引顺序建立不同类型垃圾的图片       0-19 可回收  20-39 厨余垃圾 40-59 有害 60-19 其它
      {
        par.garbagePhoto[i] = assets[i];
      }

      par.garbageTypePhoLengthIndex += assets.length;
      par.garbageTypePhoLength[0] = par.garbageTypePhoLengthIndex;
      cc.log("keHuiShou " + par.garbageTypePhoLengthIndex); ////////////////////////////////////////

      cc.loader.loadResDir("ThirdPage/kitchenGarbage/cuYu", cc.SpriteFrame, function (err, assets, urls) {
        //复制
        if (err) {
          cc.error(err);
        } //cc.log(assets);         


        for (var i = 0; i < assets.length; i++) //    按索引顺序建立不同类型垃圾的图片       0-19 可回收  20-39 厨余垃圾 40-59 有害 60-19 其它
        {
          par.garbagePhoto[i + par.garbageTypePhoLengthIndex] = assets[i];
        }

        par.garbageTypePhoLengthIndex += assets.length;
        par.garbageTypePhoLength[1] = par.garbageTypePhoLengthIndex;
        cc.log("cuYu " + par.garbageTypePhoLengthIndex); ///////////////////////////////////////////////

        cc.loader.loadResDir("ThirdPage/kitchenGarbage/qiTa", cc.SpriteFrame, function (err, assets, urls) {
          //复制
          if (err) {
            cc.error(err);
          } //cc.log(assets);         


          for (var i = 0; i < assets.length; i++) //    按索引顺序建立不同类型垃圾的图片      0-19 可回收  20-39 厨余垃圾 40-59 有害 60-19 其它
          {
            par.garbagePhoto[i + par.garbageTypePhoLengthIndex] = assets[i];
          }

          par.garbageTypePhoLengthIndex += assets.length;
          par.garbageTypePhoLength[2] = par.garbageTypePhoLengthIndex;
          cc.log("qiTa " + par.garbageTypePhoLengthIndex); //////////////////////////////////////////////////////

          cc.loader.loadResDir("ThirdPage/kitchenGarbage/youHai", cc.SpriteFrame, function (err, assets, urls) {
            //复制
            if (err) {
              cc.error(err);
            } //cc.log(assets);         


            for (var i = 0; i < assets.length; i++) //    按索引顺序建立不同类型垃圾的图片       0-19 可回收  20-39 厨余垃圾 40-59 有害 60-19 其它
            {
              par.garbagePhoto[i + par.garbageTypePhoLengthIndex] = assets[i];
            }

            par.garbageTypePhoLengthIndex += assets.length;
            par.garbageTypePhoLength[3] = par.garbageTypePhoLengthIndex;
            cc.log("youHai " + par.garbageTypePhoLengthIndex); ///////////////////////////////////////////////////////

            par.initialize();
            cc.log("this.garbageIndex " + par.garbageIndex);
            cc.log("this.garbageTypePhoLength " + par.garbageTypePhoLength[0]); ///////////////////////////////////////////////////////
          });
        });
      });
    });
  },
  initialize: function initialize() {
    this.levelNum++; //后期可能会改成可以选已经通过的关
    //this.score = 3;
    //this.lifeLabel.string = "Life:"+this.life;
    // this.scoreLabel.string = "Score: "+this.score;

    this.garbageNameLabel.string = ''; //cc.log(pics);

    this.pic = pics[this.levelNum - 1]; //初始化每一关的pic 正确方块的位置

    this.life = 3;
    this.errorNum = 0;

    if (CUYU == true) //初始化模式
      {
        this.garbageTypeCurrentLevel = 2;
        this.garbageTypeLabel.string = "厨余垃圾";
      } else if (KEHUISHOU == true) {
      this.garbageTypeCurrentLevel = 1;
      this.garbageTypeLabel.string = "可回收垃圾";
    } else if (QITA == true) {
      this.garbageTypeCurrentLevel = 4;
      this.garbageTypeLabel.string = "其它垃圾";
    } else if (YOUHAI == true) {
      this.garbageTypeCurrentLevel = 3;
      this.garbageTypeLabel.string = "有害垃圾";
    }

    for (var i = 0; i < ROWS * LIST; i++) {
      //一维长度为行数 * 列数
      this.isInteractable[i] = true;
      this.isFront[i] = true;

      if (this.pic[i] == 1) {
        ++this.rightLeftNum;
        this.isRight[i] = true;

        if (this.garbageTypeCurrentLevel == 1) //可回收模式
          {
            this.garbageIndex[i] = this.RandomInt(0, parseInt(this.garbageTypePhoLength[0])); //[0,this.GARBAGEEVERYNUMS)   可回收

            cc.log("可回收：" + this.garbageIndex[i]);
          } else if (this.garbageTypeCurrentLevel == 2) //厨余模式
          {
            this.garbageIndex[i] = this.RandomInt(parseInt(this.garbageTypePhoLength[0]), parseInt(this.garbageTypePhoLength[1])); //[20,40)

            cc.log("厨余模式" + this.garbageIndex[i]);
          } else if (this.garbageTypeCurrentLevel == 3) //有害模式
          {
            this.garbageIndex[i] = this.RandomInt(parseInt(this.garbageTypePhoLength[2]), parseInt(this.garbageTypePhoLength[3]));
            cc.log("有害模式" + this.garbageIndex[i]);
          } else if (this.garbageTypeCurrentLevel == 4) //其它模式
          {
            this.garbageIndex[i] = this.RandomInt(parseInt(this.garbageTypePhoLength[1]), parseInt(this.garbageTypePhoLength[2]));
            cc.log("其它模式" + this.garbageIndex[i]);
          }
      } else {
        this.isRight[i] = false;
        var j = i % 3; //尽量保证其它三种类型的垃圾均匀的生成

        if (this.garbageTypeCurrentLevel == 1) //可回收
          {
            if (j == 0) //厨余
              this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[0], this.garbageTypePhoLength[1]); //[21,41)
            else if (j == 1) //有害
                this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[2], this.garbageTypePhoLength[3]);else //其它
                this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[1], this.garbageTypePhoLength[2]);
          } else if (this.garbageTypeCurrentLevel == 2) //厨余
          {
            if (j == 0) //可回收
              this.garbageIndex[i] = this.RandomInt(0, this.garbageTypePhoLength[0]);else if (j == 1) //有害
              this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[2], this.garbageTypePhoLength[3]);else //其它
              this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[1], this.garbageTypePhoLength[2]);
          } else if (this.garbageTypeCurrentLevel == 3) //有害
          {
            if (j == 0) //可回收
              this.garbageIndex[i] = this.RandomInt(0, this.garbageTypePhoLength[0]);else if (j == 1) //厨余
              this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[0], this.garbageTypePhoLength[1]);else //其它
              this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[1], this.garbageTypePhoLength[2]);
          } else if (this.garbageTypeCurrentLevel == 4) //其它
          {
            if (j == 0) //可回收
              this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[0]);else if (j == 1) //厨余
              this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[0], this.garbageTypePhoLength[1]);else //有害
              this.garbageIndex[i] = this.RandomInt(this.garbageTypePhoLength[2], this.garbageTypePhoLength[3]);
          }
      }
    } //cc.log(this.garbageIndex);


    this.initializeMusic();
    this.tipKnowledgeNode = cc.find("Canvas/background/tipKnowledgeButton"); // cc.log(this.tipKnowledgeNode);

    this.lifeSpriteNode = cc.find("Canvas/background/stopButton/lifeSprite");
    this.initializeLifeSpriteFrame();
  },
  initializeLifeSpriteFrame: function initializeLifeSpriteFrame() {
    var par = this;
    cc.loader.loadResDir("lifeSpriteFrame", cc.SpriteFrame, function (err, assets, urls) {
      //resource文件夹里
      //复制
      if (err) {
        cc.error(err);
      } //cc.log(assets);


      for (var i = 0; i < assets.length; i++) /////////////////////////////////////这里可能会出现顺序问题！！
      {
        //cc.log(assets[i]);
        for (var j = 0; j < assets.length; j++) {
          if (j == parseInt(assets[i].name)) {
            par.lifeSpriteFrames[i] = assets[j];
          }
        }
      }
    });
  },
  initializeMusic: function initializeMusic() {
    //动态资源绑定
    var par = this;
    cc.loader.loadResDir("music", cc.AudioClip, function (err, assets, urls) {
      //resource文件夹里
      //复制
      if (err) {
        cc.error(err);
      } //cc.log(assets);


      for (var i = 0; i < assets.length; i++) {
        for (var j = 0; j < assets.length; j++) {
          if (i == parseInt(assets[j].name) - 1) //qiangzhuan
            {
              //cc.log(parseInt(assets[j].name));
              musicClips[i] = assets[j];
              break;
            }
        }
      }
    });
    this.musicDuanShu = Math.floor(musics.length / this.musicsYingShu); //舍去最后多余的

    this.musicDuanShu = musicXiaoJieYinNum.length;
    cc.log("小节数：" + this.musicDuanShu);
    musicXiaoJieYinNumIndex = 0;
    musicCurYinIndex = 0;
    this.musicHuanChong = 0;
  },
  playMusicClips: function playMusicClips() {
    //第二种方式播放   无论翻错还是翻对，都继续往下播   ////////最终使用的是这个
    if (musicIsPlaying) {
      this.musicHuanChong++; //存放到缓冲中等待播放        

      return;
    }

    musicIsPlaying = true;

    switch (musicXiaoJieYinNum[musicXiaoJieYinNumIndex++]) {
      case 2:
        this.qianTao2();
        break;

      case 3:
        this.qianTao3();
        break;

      case 5:
        this.qianTao5();
        break;

      case 6:
        this.qianTao6();
        break;
    }

    if (musicXiaoJieYinNumIndex >= musicXiaoJieYinNum.length) {
      musicXiaoJieYinNumIndex = 0;
    }

    if (musicCurYinIndex >= musics.length) {
      musicCurYinIndex = 0;
    }
  },
  qianTao2: function qianTao2() {
    //cc.log("调用嵌套2");
    this.scheduleOnce(function () {
      var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
      this.scheduleOnce(function () {
        var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
        musicIsPlaying = false;
        this.detectMusicHuanChong();
      }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
    }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
  },
  qianTao3: function qianTao3() {
    //cc.log("调用嵌套3");
    this.scheduleOnce(function () {
      var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
      this.scheduleOnce(function () {
        var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
        this.scheduleOnce(function () {
          var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
          musicIsPlaying = false;
          this.detectMusicHuanChong();
        }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
      }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
    }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
  },
  qianTao5: function qianTao5() {
    //cc.log("调用嵌套5");
    this.scheduleOnce(function () {
      var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
      this.scheduleOnce(function () {
        var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
        this.scheduleOnce(function () {
          var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
          this.scheduleOnce(function () {
            var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
            this.scheduleOnce(function () {
              var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
              musicIsPlaying = false;
              this.detectMusicHuanChong();
            }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
          }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
        }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
      }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
    }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
  },
  qianTao6: function qianTao6() {
    //cc.log("调用嵌套6");
    this.scheduleOnce(function () {
      var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
      this.scheduleOnce(function () {
        var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
        this.scheduleOnce(function () {
          var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
          this.scheduleOnce(function () {
            var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
            this.scheduleOnce(function () {
              var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
              this.scheduleOnce(function () {
                var audioID = cc.audioEngine.play(musicClips[musics[musicCurYinIndex++][0] - 1], false, musicVolum);
                musicIsPlaying = false;
                this.detectMusicHuanChong();
              }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
            }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
          }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
        }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
      }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
    }, musics[musicCurYinIndex - 1 < 0 ? 0 : musicCurYinIndex - 1][1]);
  },
  detectMusicHuanChong: function detectMusicHuanChong() {
    //cc.log("检测缓冲");
    if (this.musicHuanChong > 0) {
      this.musicHuanChong--;
      this.playMusicClips();
    }
  },
  gotoNextLevel: function gotoNextLevel() {
    this.initialize();
    var buttons = this.node.children;

    for (var i = 0; i < this.node.childrenCount; i++) {
      buttons[i].getComponent(cc.Button).normalSprite = this.garbagePhotoBackGround;
      buttons[i].getComponent(cc.Button).hoverSprite = this.garbagePhotoBackGround;
    }
  },
  popUpNotPassLevel: function popUpNotPassLevel() {
    var notPassLevelPrefab = cc.instantiate(this.notPassLevelPrefab);
    notPassLevelPrefab.parent = this.node.parent; //let vector2 = cc.Vec2   加坐标
  },
  popUpPassLevel: function popUpPassLevel() {
    var passLevelPrefab = cc.instantiate(this.passLevelPrefab);
    passLevelPrefab.parent = this.node.parent;
  },
  RandomInt: function RandomInt(max, min) //[min,max)
  {
    return Math.floor(Math.random() * (max - min) + min);
  },
  changeLifeSprite: function changeLifeSprite() {
    this.lifeSpriteNode.getComponent(cc.Sprite).spriteFrame = this.lifeSpriteFrames[this.life];
  }
});
window.musicVolum = 1;
window.musicFlag = 0; //0 代表音乐打开 

window.pics = new Array( //关卡设计在这！
new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0), new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0));
window.errorGarbagePhoto = cc.SpriteFrame; //此变量用于 和知识小提示图片进行交互   在onButtonClick 扣生命值时修改

window.musicJiePaiTime = 0.5; //简谱中半拍的时间

window.musicCurYinIndex = 0; //当前播放的musics[musicCurYinIndex]

window.musicXiaoJieYinNum = new Array(2, 6, 6, 5, 3, 6, 6, 5, 3, 6, 6, 6, 3, 6, 6); //每个小节的音数

window.musicXiaoJieYinNumIndex = 0;
window.musicClips = new Array();
window.musicIsPlaying = false;
window.musics = new Array( //注意是从 1~17  到时候要减一 //加这个0  只是为了不让 new Array(5)被解释成 5个元素
new Array(10, 4 * musicJiePaiTime), new Array(11, 4 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(6, 1 * musicJiePaiTime), new Array(5, 1 * musicJiePaiTime), new Array(13, 2 * musicJiePaiTime), new Array(4, 1 * musicJiePaiTime), new Array(3, 1 * musicJiePaiTime), new Array(4, 2 * musicJiePaiTime), new Array(13, 1 * musicJiePaiTime), new Array(5, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(4, 1 * musicJiePaiTime), new Array(13, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(4, 1 * musicJiePaiTime), new Array(13, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(11, 2 * musicJiePaiTime), new Array(10, 6 * musicJiePaiTime), new Array(10, 1 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(6, 1 * musicJiePaiTime), new Array(5, 1 * musicJiePaiTime), new Array(13, 2 * musicJiePaiTime), new Array(4, 1 * musicJiePaiTime), new Array(3, 1 * musicJiePaiTime), new Array(4, 2 * musicJiePaiTime), new Array(13, 1 * musicJiePaiTime), new Array(5, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(4, 1 * musicJiePaiTime), new Array(13, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(4, 1 * musicJiePaiTime), new Array(13, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(11, 2 * musicJiePaiTime), new Array(6, 6 * musicJiePaiTime), new Array(10, 1 * musicJiePaiTime), //第三段
new Array(11, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(6, 1 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(12, 1 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(8, 1 * musicJiePaiTime), new Array(10, 2 * musicJiePaiTime), new Array(10, 1 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(6, 3 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(6, 1 * musicJiePaiTime), new Array(5, 1 * musicJiePaiTime), new Array(12, 1 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(10, 6 * musicJiePaiTime), new Array(10, 1 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(6, 1 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(12, 1 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(6, 2 * musicJiePaiTime), new Array(11, 1 * musicJiePaiTime), new Array(8, 1 * musicJiePaiTime), new Array(10, 2 * musicJiePaiTime), new Array(10, 1 * musicJiePaiTime), new Array(8, 1 * musicJiePaiTime) //.......
);

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXEluaXRhdGUuanMiXSwibmFtZXMiOlsiUk9XUyIsIkxJU1QiLCJCTE9DS1NVTVMiLCJHQVJCQUdFTlVNIiwiR0FSQkFHRUVWRVJZTlVNUyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibiIsInR5cGUiLCJJbnRlZ2VyIiwidG9vbHRpcCIsImdhcmJhZ2VQaG90byIsIlNwcml0ZUZyYW1lIiwiZ2FyYmFnZVBob3RvQmFja0dyb3VuZCIsImdhcmJhZ2VOYW1lTGFiZWwiLCJMYWJlbCIsImdhcmJhZ2VUeXBlTGFiZWwiLCJnYXJiYWdlVHlwZUN1cnJlbnRMZXZlbCIsImdhcmJhZ2VJbmRleCIsIkFycmF5IiwiaXNSaWdodCIsIkJvb2xlYW4iLCJpc0Zyb250IiwiaXNJbnRlcmFjdGFibGUiLCJsZXZlbE51bSIsImxldmVsR2FyYmFnZVR5cGUiLCJwaWMiLCJlcnJvck51bSIsInZpc2libGUiLCJyaWdodExlZnROdW0iLCJlcnJvcmluZzNmbGFnIiwiZXJyb3JpbmczQ291bnQiLCJsaWZlTGFiZWwiLCJsaWZlIiwic2NvcmVMYWJlbCIsInNjb3JlIiwidGV4dFRpcExhYmVsIiwicGFydGljbGVTbW9rZUZsb3dlciIsIlBhcnRpY2xlU3lzdGVtIiwibm90UGFzc0xldmVsUHJlZmFiIiwiUHJlZmFiIiwicGFzc0xldmVsUHJlZmFiIiwibXVzaWNEdWFuU2h1IiwibXVzaWNEdWFuU2h1VGVtcCIsIm11c2ljSHVhbkNob25nIiwibXVzaWNBdWRpb0lEIiwidGlwS25vd2xlZGdlTm9kZSIsIm5vZGUiLCJsaWZlU3ByaXRlRnJhbWVzIiwibGlmZVNwcml0ZU5vZGUiLCJnYXJiYWdlVHlwZVBob0xlbmd0aCIsImdhcmJhZ2VUeXBlUGhvTGVuZ3RoSW5kZXgiLCJzdGFydCIsImdhcmJhZ2VQaG90b0luaXQiLCJwYXIiLCJsb2ciLCJsb2FkZXIiLCJsb2FkUmVzRGlyIiwiZXJyIiwiYXNzZXRzIiwidXJscyIsImVycm9yIiwiaSIsImxlbmd0aCIsImluaXRpYWxpemUiLCJzdHJpbmciLCJwaWNzIiwiQ1VZVSIsIktFSFVJU0hPVSIsIlFJVEEiLCJZT1VIQUkiLCJSYW5kb21JbnQiLCJwYXJzZUludCIsImoiLCJpbml0aWFsaXplTXVzaWMiLCJmaW5kIiwiaW5pdGlhbGl6ZUxpZmVTcHJpdGVGcmFtZSIsIm5hbWUiLCJBdWRpb0NsaXAiLCJtdXNpY0NsaXBzIiwiTWF0aCIsImZsb29yIiwibXVzaWNzIiwibXVzaWNzWWluZ1NodSIsIm11c2ljWGlhb0ppZVlpbk51bSIsIm11c2ljWGlhb0ppZVlpbk51bUluZGV4IiwibXVzaWNDdXJZaW5JbmRleCIsInBsYXlNdXNpY0NsaXBzIiwibXVzaWNJc1BsYXlpbmciLCJxaWFuVGFvMiIsInFpYW5UYW8zIiwicWlhblRhbzUiLCJxaWFuVGFvNiIsInNjaGVkdWxlT25jZSIsImF1ZGlvSUQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJtdXNpY1ZvbHVtIiwiZGV0ZWN0TXVzaWNIdWFuQ2hvbmciLCJnb3RvTmV4dExldmVsIiwiYnV0dG9ucyIsImNoaWxkcmVuIiwiY2hpbGRyZW5Db3VudCIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsIm5vcm1hbFNwcml0ZSIsImhvdmVyU3ByaXRlIiwicG9wVXBOb3RQYXNzTGV2ZWwiLCJpbnN0YW50aWF0ZSIsInBhcmVudCIsInBvcFVwUGFzc0xldmVsIiwibWF4IiwibWluIiwicmFuZG9tIiwiY2hhbmdlTGlmZVNwcml0ZSIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwid2luZG93IiwibXVzaWNGbGFnIiwiZXJyb3JHYXJiYWdlUGhvdG8iLCJtdXNpY0ppZVBhaVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBRyxFQUFiLEVBQWtCOztBQUNsQixJQUFNQyxJQUFJLEdBQUcsQ0FBYixFQUFnQjs7QUFDaEIsSUFBTUMsU0FBUyxHQUFHRixJQUFJLEdBQUdDLElB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QWNaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBZFksRUFlWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQWZZLEVBZ0JaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBaEJZLEVBa0JaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBbEJZLEVBbUJaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBbkJZLEVBb0JaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBcEJZLEVBcUJaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBckJZLEVBc0JaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBdEJZLEVBd0JaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBeEJZLEVBeUJaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBekJZLEVBMEJaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBMUJZLEVBNEJaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBNUJZLEVBNkJaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBN0JZLEVBOEJaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBOUJZLEVBK0JaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBL0JZLEVBZ0NaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBaENZLEVBaUNaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBakNZLEVBbUNaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBbkNZLEVBb0NaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBcENZLEVBcUNaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBckNZLEVBc0NaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBdENZLEVBdUNaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBdkNZLEVBd0NaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBeENZLEVBMENaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBMUNZLEVBMkNaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBM0NZLEVBNENaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBNUNZLEVBNkNaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBN0NZLEVBOENaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBOUNZLEVBZ0RaLElBQUlyRyxLQUFKLENBQVUsQ0FBVixFQUFZLElBQUVxRyxlQUFkLENBaERZLEVBaURaLElBQUlyRyxLQUFKLENBQVUsRUFBVixFQUFhLElBQUVxRyxlQUFmLENBakRZLEVBaURvQjtBQUNoQyxJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQWxEWSxFQW9EWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQXBEWSxFQXFEWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQXJEWSxFQXNEWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQXREWSxFQXVEWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQXZEWSxFQXdEWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQXhEWSxFQXlEWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQXpEWSxFQTJEWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQTNEWSxFQTREWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQTVEWSxFQTZEWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQTdEWSxFQThEWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQTlEWSxFQStEWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQS9EWSxFQWdFWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQWhFWSxFQWtFWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQWxFWSxFQW1FWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQW5FWSxFQW9FWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQXBFWSxFQXFFWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQXJFWSxFQXNFWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQXRFWSxFQXVFWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQXZFWSxFQXlFWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQXpFWSxFQTBFWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQTFFWSxFQTJFWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQTNFWSxFQTZFWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQTdFWSxFQThFWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQTlFWSxFQStFWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQS9FWSxFQWdGWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQWhGWSxFQWlGWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQWpGWSxFQWtGWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQWxGWSxFQW9GWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQXBGWSxFQXFGWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQXJGWSxFQXNGWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQXRGWSxFQXVGWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQXZGWSxFQXdGWixJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBYSxJQUFFcUcsZUFBZixDQXhGWSxFQXlGWixJQUFJckcsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFFcUcsZUFBZCxDQXpGWSxDQTBGWjtBQTFGWSxDQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy92YXIgY2ZrID0gcmVxdWlyZShcImxldmVsQmxvY2tzUGljc1wiKTtcclxuLy9pbXBvcnQgbGV2ZWxCbG9ja1BpY3MsIHsgcGljcyB9IGZyb20gXCJsZXZlbEJsb2NrUGljc1wiO1xyXG5jb25zdCBST1dTID0gMTA7ICAvLyDooYzmlbBcclxuY29uc3QgTElTVCA9IDY7IC8vICDliJfmlbBcclxuY29uc3QgQkxPQ0tTVU1TID0gUk9XUyAqIExJU1Q7XHJcbmNvbnN0IEdBUkJBR0VOVU0gPSAyMTsvL+acieWkmuWwkeW8oOWeg+WcvuWbvueJhyAgIOacgOWQjuS4gOW8oOm7mOiupOS4uuacque/u+W8gOWeg+WcvuaXtueahOiDjOaZr+WbvueJhyAgIC8v5Y+v6IO95Lya5Y+W5raIXHJcbmNvbnN0IEdBUkJBR0VFVkVSWU5VTVMgPSAyMDsvL+avj+S4gOenjeWeg+WcvuacieWkmuWwkeW8oOWbvueJh1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbiA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDozLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkludGVnZXIsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6XCLlj5jph49uIOm7mOiupOS4ujPvvIzlvbHlk43lhbPljaHpmr7luqbnmoTlj5jph49cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2FyYmFnZVBob3RvIDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgICAgICB0b29sdGlwOlwi5a2Y5YKo5Z6D5Zy+5Zu+54mHXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdhcmJhZ2VQaG90b0JhY2tHcm91bmQ6Y2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgZ2FyYmFnZU5hbWVMYWJlbDpjYy5MYWJlbCxcclxuICAgICAgICBnYXJiYWdlVHlwZUxhYmVsOmNjLkxhYmVsLFxyXG5cclxuICAgICAgICBnYXJiYWdlVHlwZUN1cnJlbnRMZXZlbDp7ICAgICAvL+W9k+WJjeWFs+WNoeeahOaooeW8jyAgICAgICAgICAgICAgICAgICAvL+mAieaLqeaooeW8j+aXtiDkvKDpgJLkuIDkuKrlgLzov4fmnaXnlKjmraTlj5jph4/kv53lrZggICAgIDEg5Luj6KGo5Y+v5Zue5pS25Z6D5Zy+5qih5byPICAyIOWOqOS9mSAzIOacieWusyA0IOWFtuWug1xyXG4gICAgICAgICAgICBkZWZhdWx0OjEsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2FyYmFnZUluZGV4IDogbmV3IEFycmF5KCksXHJcbiAgICAgICAgXHJcbiAgICAgICAgaXNSaWdodCA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOltjYy5Cb29sZWFuXSxcclxuICAgICAgICB9LC8v5b2T5YmN5L2N572u5Z6D5Zy+5piv5ZCm5q2j56GuIHR1cmXkuLrmraNcclxuICAgICAgICBpc0Zyb250IDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgICAgIHR5cGU6W2NjLkJvb2xlYW5dLFxyXG4gICAgICAgIH0sLy9ibG9ja+aYr+WkhOS6juiDjOaZr+Wbvui/mOaYr+Weg+WcvuWbvueJh++8jGZhbHNl6KGo56S66IOM5pmv5Zu+77yMdHJ1ZeS4uuWeg+WcvuWbvueJh1xyXG5cclxuICAgICAgICBpc0ludGVyYWN0YWJsZSA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpbY2MuQm9vbGVhbl0sXHJcbiAgICAgICAgfSwvL+W9k+WJjWJsb2Nr5piv5ZCm5Y+v5Lqk5LqSIHR1cmXlj69cclxuXHJcbiAgICAgICAgbGV2ZWxOdW06IDAsICAvL+W9k+WJjeWkhOS6jueahOWFs+WNoeaVsFxyXG4gICAgICAgIGxldmVsR2FyYmFnZVR5cGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6XCLlrZjlgqjmr4/kuIDlhbPnmoTlnoPlnL7nsbvlnovvvIgx77yMMu+8jDPvvIw077yJ77yMMeS7o+ihqOW9k+WJjeWPr+WbnuaUtuWeg+Wcvu+8jDLku6PooajljqjkvZnlnoPlnL7vvIwz5Luj6KGo5pyJ5a6z5Z6D5Zy+77yMNOS7o+ihqOWFtuS7luWeg+WcvlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBwaWMyOntcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAvLyAgICAgdHlwZTpbW2NjLkludGVnZXJdLFtjYy5JbnRlZ2VyXV0sXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAvL2Jsb2NrUHJlZmFiOiBjYy5QcmVmYWIsIC8v5pa55Z2XXHJcbiAgICAgICAgLy8gZ2FwOiAyMCwgLy/pl7TpmpQsXHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kOmNjLk5vZGUsXHJcbiAgICAgICAgLy8gcGljIDogbmV3IEFycmF5KFxyXG4gICAgICAgICAgICAvLzAsMCwwLDAsMCwwLDAsMCxcclxuICAgICAgICAvLyAgICAgICAgMSwxLDEsMSwxLDEsMSwxLFxyXG4gICAgICAgIC8vICAgICAgICAwLDAsMCwwLDAsMCwxLDAsXHJcbiAgICAgICAgLy8gICAgICAgIDAsMSwxLDEsMCwwLDEsMCxcclxuICAgICAgICAvLyAgICAgICAgMCwxLDAsMSwwLDAsMSwwLFxyXG4gICAgICAgIC8vICAgICAgICAwLDEsMSwxLDAsMCwxLDAsXHJcbiAgICAgICAgLy8gICAgICAgIDAsMCwwLDAsMCwwLDEsMCxcclxuICAgICAgICAvLyAgICAgICAgMCwwLDAsMCwwLDAsMSwwLFxyXG4gICAgICAgIC8vICAgICAgICAwLDAsMCwwLDAsMSwxLDAsXHJcbiAgICAgICAgLy8gICAgICAgIDAsMCwwLDAsMCwwLDAsMClcclxuICAgICAgICBwaWM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgICAgICAgICB0eXBlOltjYy5JbnRlZ2VyXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBlcnJvck51bTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6MCxcclxuICAgICAgICAgICAgdHlwZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgICAgICB0b29sdGlwOlwi5b2T5YmN5bey57uP57+75byA55qE6ZSZ6K+v5Z6D5Zy+5Z2X5pWwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJpZ2h0TGVmdE51bTp7ICAgICAgICAgICAgICAvL+S4jmVycm9yTnVt5LiA6LW355So5LqO5Yik5pat5YWz5Y2h57uT5p2fICAg5aaC5p6ccmlnaHRMZWZ0TnVtJiZlcnJvck5VbSA9PTBcclxuICAgICAgICAgICAgZGVmYXVsdDowLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkludGVnZXIsXHJcbiAgICAgICAgICAgIHZpc2libGU6ZmFsc2UsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6XCLliankvZnmnKrnv7vlvIDnmoTmraPnoa7nmoTlnoPlnL7lnZfmlbBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZXJyb3JpbmczZmxhZzp7ICAgLy/moIflv5fnirbmgIEgICAgIOS4unRydWXooajnpLog5q2j5aSE5LqO6ZSZ6K+v6LaF6L+HM+S4qiDlj6rog73nv7vlm57lt7Lnv7vlvIBibG9ja+S4rVxyXG4gICAgICAgICAgICBkZWZhdWx0OmZhbHNlLFxyXG4gICAgICAgICAgICAvLyB0eXBlOmNjLkJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZpc2libGU6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcmluZzNDb3VudDp7ICAgIC8vZXJyb3JpbmczIOeKtuaAgeS4rSDnv7vliqhibG9ja+eahOasoeaVsFxyXG4gICAgICAgICAgICBkZWZhdWx0OjMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL25cclxuICAgICAgICAgICAgdHlwZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGxpZmVMYWJlbDpjYy5MYWJlbCwgIFxyXG4gICAgICAgIGxpZmU6eyAgICAgICAvLy/lhbPljaHlj5jljJbnmoTml7blgJnopoHliJ3lp4vljJYgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6MyxcclxuICAgICAgICAgICAgdHlwZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICB0b29sdGlwOlwi55Sf5ZG95YC877yM6buY6K6k5Li6M1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICBzY29yZUxhYmVsOmNjLkxhYmVsLFxyXG4gICAgICAgIHNjb3JlOntcclxuICAgICAgICAgICAgZGVmYXVsdDowLFxyXG4gICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkludGVnZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZXh0VGlwTGFiZWw6Y2MuTGFiZWwsXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFydGljbGVTbW9rZUZsb3dlcjpjYy5QYXJ0aWNsZVN5c3RlbSxcclxuXHJcbiAgICAgICAgbm90UGFzc0xldmVsUHJlZmFiOmNjLlByZWZhYixcclxuXHJcbiAgICAgICAgcGFzc0xldmVsUHJlZmFiOmNjLlByZWZhYixcclxuXHJcbiAgICAgICAgLy8gbXVzaWNDbGlwczp7ICAgICAgICAgICAgICAvL+WtmOWCqOmfs+aVsO+8jCAxN+S4qiAg5Yqo5oCB6LWE5rqQ57uR5a6a77yBXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgLy8gICAgIHR5cGU6W2NjLkF1ZGlvQ2xpcF0sXHJcbiAgICAgICAgLy8gICAgIHZpc2libGU6ZmFsc2UsXHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgLy8gbXVzaWNzWWluZ1NodTp7XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6NCxcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgIC8vICAgICB0b29sdGlwOlwi5oyJ5LiA5LiL5pKt5pS+5Yeg5Liq6Z+zXCIsXHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgLy8gbXVzaWNDbGlwc0R1cmF0aW9uOnsgIC8v5LiN5ZCM6Z+z5LmL6Ze055qE6Ze06ZqU5pe26Ze0XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6MC41LFxyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLkZsb2F0LCBcclxuICAgICAgICAvLyAgICAgdG9vbHRpcDpcIuS4pOautemfs+S5i+mXtOeahOmXtOmalOaXtumXtFwiICAgICAgICBcclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBtdXNpY0R1YW5TaHU6eyAgIC8vICDmgLvlhbHmnInlpJrlsJHlsI/oioJcclxuICAgICAgICAgICAgZGVmYXVsdDowLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkludGVnZXIsXHJcbiAgICAgICAgICAgIHZpc2libGU6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbXVzaWNEdWFuU2h1VGVtcDp7ICAgLy8gIOWIneWni+S4ujAg77yM6ZqP552A5oyJ6ZKu54K55Ye75aKe5YqgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6MCxcclxuICAgICAgICAgICAgdHlwZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG11c2ljSHVhbkNob25nOnsgICAgIC8v57yT5Yay5pWw57uEIOWtmG11c2ljRHVhblNodVRlbXDnmoQgICDlpoJtdXNpY0h1YW5DaG9uZyA9IDLvvIzooajnpLrov5jpnIDopoHmkq3mlL4y5q616Z+z5pWwXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6MCxcclxuICAgICAgICAgICAgdHlwZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIG11c2ljSXNQbGF5aW5nOnsgICAgLy/lvZPliY3mmK/lkKbov5jmnInpn7PlnKjmkq3mlL5cclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpmYWxzZSxcclxuICAgICAgICAvLyAgICAgdHlwZTpjYy5Cb29sZWFuLFxyXG4gICAgICAgIC8vICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIG11c2ljQXVkaW9JRDp7ICAgICAvL+WIqeeUqGNjLmF1ZGlvRW5naW5lLnBsYXkoKSDov5Tlm57kuIDkuKppZO+8jOmmluWFiOaKijE35Liq6Z+z6YO95pKt5pS+5LiA5qyh77yM6K6w5b2V5LiLaWQg5Yiw5pe25Y+v5Lul55u05o6l5pKt5pS+77yM5LiN55So5Zyo5Yib5bu65paw55qE5pKt5pS+5LqGXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W10sICAgIC8v5ZCM5pe25Lmf5Y+v5o6n5Yi26Z+z6YePXHJcbiAgICAgICAgICAgIHR5cGU6W2NjLkludGVnZXJdLFxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBtdXNpY1ZvbHVtOntcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDoxLjAsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2MuRmxvYXRcclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAvLyBtdXNpY0N1cnJlbnRMZXZlbDp7ICAgICAgLy8vL+W9k+WJjeWFs+WNoeeahOmfs+S5kCAgIOS6jOe7tOaVsOe7hCAg5Yid5aeL5YyW5pe25L2T546wICAg6KGM6KGo56S65ZCM5LiA5pe26Ze055qE5Y+R6Z+zXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgLy8gICAgIHR5cGU6W2NjLkludGVnZXJdLFxyXG4gICAgICAgIC8vICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIC8vIG11c2ljczp7ICAgICAgICAgICAgICAgICAvL+aJgOacieeahOmfs+S5kCAgIOS4iee7tOaVsOe7hCAg5Yid5aeL5YyW5pe25L2T546wXHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgLy8gICAgIHR5cGU6W2NjLkludGVnZXJdLFxyXG4gICAgICAgIC8vICAgICB2aXNpYmxlOmZhbHNlLFxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGlwS25vd2xlZGdlTm9kZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5ub2RlLFxyXG4gICAgICAgIH0sICAvL+aJo+eUn+WRveWAvOWQju+8jOaOp+WItuW8ueWHuueahOiEmuacrOeahOiKgueCuSDljbN0aXBLbm93bGVkZ2VCdXR0b25cclxuXHJcbiAgICAgICAgbGlmZVNwcml0ZUZyYW1lczp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbGlmZVNwcml0ZU5vZGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnYXJiYWdlVHlwZVBob0xlbmd0aDpuZXcgQXJyYXkoKSAsICAgLy9bMF3lj6/lm57mlLYgIFsxXeWOqOS9mSBbMl3lhbbku5YgWzNd5pyJ5a6zICDmjInpobrluo/orrDlvZXliLDlvZPliY3nmoTlnoPlnL7lm77niYfmlbAgZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMF0g5Luj6KGo5Y+v5Zue5pS25pyJ5aSa5bCR5byg5Z6D5Zy+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGdhcmJhZ2VUeXBlUGhvTGVuZ3RoSW5kZXg6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OjAsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuSW50ZWdlcixcclxuICAgICAgICAgICAgdmlzaWJsZTpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuZ2FyYmFnZVBob3RvSW5pdCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLypcclxuICAgIOWIneWni+WMluaVsOe7hFxyXG4gICAg5bu656uL5LiA5Liq5Yid5aeL5YyW55qE5pWw57uE5a2Y5YKo5pa55Z2X55qE5bGe5oCnXHJcbiAgICAgICAgIFtb5Z6D5Zy+5a+55bqU55qES0VZ5YC8LOato+WPjeeahOWxnuaAp+WAvCBU5Luj6KGo5q2j6Z2i5Y2z5pyJ5Z6D5Zy+5Zu+54mH55qE5LiA6Z2iLOWPr+e/u+W8gOeahOWxnuaAp+WAvCBU5Luj6KGo5Y+v57+75byALOagh+iusOato+ehruaIlumUmeivr+eahOWxnuaAp+WAvCBU5Luj6KGo5q2j56GuXSxbXSwuLi5dXHJcbiAgICDkvovlrZAgIFtbXCJuZXdzUGFwZXJcIixUdXJlLFR1cmUsVHVyZV0sWy4uLl0sLi4uXVxyXG4gICAgICAgIFvlnoPlnL7nsbvlnovvvIgx77yMMu+8jDPvvIw077yJLGJ1dHRvbueahOato+WPje+8iGZhbHNl5Li66IOM5pmv5Zu+54mH77yMdHVyZeS4uuWeg+WcvuWbvueJh++8ie+8jOaYr+WQpuWPr+e/u+W8gO+8iHR1cmXlj6/vvInvvIzor6XkvY3nva7lrZjlgqjnmoTlnoPlnL7mmK/lkKbmraPnoa7vvIh0dXJl5q2j77yJIF1cclxuICAgICAqL1xyXG5cclxuICAgIGdhcmJhZ2VQaG90b0luaXQoKXsgICAvL+WKqOaAgeWKoOi9veWbvueJh+i1hOa6kCAgICAg5Lul5L6/6IO95q2j5bi45YiG5YyFXHJcbiAgICAgICAgdmFyIHBhciA9IHRoaXM7Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vMS0yMCDlj6/lm57mlLYgIDIxLTQwIOWOqOS9meWeg+WcviA0MS02MCDmnInlrrMgNjEtODAg5YW25a6DIFxyXG4gICAgICAgIGNjLmxvZyhcImdhcmJhZ2VQaG90b0luaXRcIik7XHJcblxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwiVGhpcmRQYWdlL2tpdGNoZW5HYXJiYWdlL2tlSHVpU2hvdVwiLCBjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbiAoZXJyLCBhc3NldHMsIHVybHMpIHtcclxuXHJcbiAgICAgICAgICAgIC8v5aSN5Yi2XHJcblxyXG4gICAgICAgICAgICBpZihlcnIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jYy5sb2coYXNzZXRzKTsgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxhc3NldHMubGVuZ3RoO2krKykgICAgLy8gICAg5oyJ57Si5byV6aG65bqP5bu656uL5LiN5ZCM57G75Z6L5Z6D5Zy+55qE5Zu+54mHICAgICAgIDAtMTkg5Y+v5Zue5pS2ICAyMC0zOSDljqjkvZnlnoPlnL4gNDAtNTkg5pyJ5a6zIDYwLTE5IOWFtuWug1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXIuZ2FyYmFnZVBob3RvW2ldID0gYXNzZXRzW2ldOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhci5nYXJiYWdlVHlwZVBob0xlbmd0aEluZGV4ICs9IGFzc2V0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHBhci5nYXJiYWdlVHlwZVBob0xlbmd0aFswXSA9IHBhci5nYXJiYWdlVHlwZVBob0xlbmd0aEluZGV4O1xyXG5cclxuICAgICAgICAgICAgY2MubG9nKFwia2VIdWlTaG91IFwiK3Bhci5nYXJiYWdlVHlwZVBob0xlbmd0aEluZGV4KTtcclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihcIlRoaXJkUGFnZS9raXRjaGVuR2FyYmFnZS9jdVl1XCIsIGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uIChlcnIsIGFzc2V0cywgdXJscykge1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5aSN5Yi2XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZXJyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhhc3NldHMpOyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxhc3NldHMubGVuZ3RoO2krKykgICAgLy8gICAg5oyJ57Si5byV6aG65bqP5bu656uL5LiN5ZCM57G75Z6L5Z6D5Zy+55qE5Zu+54mHICAgICAgIDAtMTkg5Y+v5Zue5pS2ICAyMC0zOSDljqjkvZnlnoPlnL4gNDAtNTkg5pyJ5a6zIDYwLTE5IOWFtuWug1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhci5nYXJiYWdlUGhvdG9baStwYXIuZ2FyYmFnZVR5cGVQaG9MZW5ndGhJbmRleF0gPSBhc3NldHNbaV07ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXIuZ2FyYmFnZVR5cGVQaG9MZW5ndGhJbmRleCArPSBhc3NldHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgcGFyLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoWzFdID0gcGFyLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoSW5kZXg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImN1WXUgXCIrcGFyLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwiVGhpcmRQYWdlL2tpdGNoZW5HYXJiYWdlL3FpVGFcIiwgY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24gKGVyciwgYXNzZXRzLCB1cmxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpI3liLZcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhhc3NldHMpOyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8YXNzZXRzLmxlbmd0aDtpKyspICAgIC8vICAgIOaMiee0ouW8lemhuuW6j+W7uueri+S4jeWQjOexu+Wei+Weg+WcvueahOWbvueJhyAgICAgIDAtMTkg5Y+v5Zue5pS2ICAyMC0zOSDljqjkvZnlnoPlnL4gNDAtNTkg5pyJ5a6zIDYwLTE5IOWFtuWug1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyLmdhcmJhZ2VQaG90b1tpK3Bhci5nYXJiYWdlVHlwZVBob0xlbmd0aEluZGV4XSA9IGFzc2V0c1tpXTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoSW5kZXggKz0gYXNzZXRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBwYXIuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMl0gPSBwYXIuZ2FyYmFnZVR5cGVQaG9MZW5ndGhJbmRleDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJxaVRhIFwiK3Bhci5nYXJiYWdlVHlwZVBob0xlbmd0aEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihcIlRoaXJkUGFnZS9raXRjaGVuR2FyYmFnZS95b3VIYWlcIiwgY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24gKGVyciwgYXNzZXRzLCB1cmxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5aSN5Yi2XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coYXNzZXRzKTsgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxhc3NldHMubGVuZ3RoO2krKykgICAgLy8gICAg5oyJ57Si5byV6aG65bqP5bu656uL5LiN5ZCM57G75Z6L5Z6D5Zy+55qE5Zu+54mHICAgICAgIDAtMTkg5Y+v5Zue5pS2ICAyMC0zOSDljqjkvZnlnoPlnL4gNDAtNTkg5pyJ5a6zIDYwLTE5IOWFtuWug1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXIuZ2FyYmFnZVBob3RvW2krcGFyLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoSW5kZXhdID0gYXNzZXRzW2ldOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhci5nYXJiYWdlVHlwZVBob0xlbmd0aEluZGV4ICs9IGFzc2V0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhci5nYXJiYWdlVHlwZVBob0xlbmd0aFszXSA9IHBhci5nYXJiYWdlVHlwZVBob0xlbmd0aEluZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwieW91SGFpIFwiK3Bhci5nYXJiYWdlVHlwZVBob0xlbmd0aEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJ0aGlzLmdhcmJhZ2VJbmRleCBcIitwYXIuZ2FyYmFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwidGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aCBcIitwYXIuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgaW5pdGlhbGl6ZSggKXtcclxuICAgICAgICB0aGlzLmxldmVsTnVtKys7IC8v5ZCO5pyf5Y+v6IO95Lya5pS55oiQ5Y+v5Lul6YCJ5bey57uP6YCa6L+H55qE5YWzXHJcblxyXG4gICAgICAgIC8vdGhpcy5zY29yZSA9IDM7XHJcbiAgICAgICAgLy90aGlzLmxpZmVMYWJlbC5zdHJpbmcgPSBcIkxpZmU6XCIrdGhpcy5saWZlO1xyXG4gICAgICAgIC8vIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIlNjb3JlOiBcIit0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuZ2FyYmFnZU5hbWVMYWJlbC5zdHJpbmcgPSAnJztcclxuICAgICAgICAvL2NjLmxvZyhwaWNzKTtcclxuICAgICAgICB0aGlzLnBpYyA9IHBpY3NbdGhpcy5sZXZlbE51bS0xXTsgLy/liJ3lp4vljJbmr4/kuIDlhbPnmoRwaWMg5q2j56Gu5pa55Z2X55qE5L2N572uXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5saWZlID0gMztcclxuICAgICAgICB0aGlzLmVycm9yTnVtID0gMDtcclxuXHJcblxyXG4gICAgICAgIGlmKENVWVUgPT0gdHJ1ZSkgIC8v5Yid5aeL5YyW5qih5byPXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdhcmJhZ2VUeXBlQ3VycmVudExldmVsID0gMjtcclxuICAgICAgICAgICAgdGhpcy5nYXJiYWdlVHlwZUxhYmVsLnN0cmluZyA9IFwi5Y6o5L2Z5Z6D5Zy+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoS0VIVUlTSE9VID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdhcmJhZ2VUeXBlQ3VycmVudExldmVsID0gMTtcclxuICAgICAgICAgICAgdGhpcy5nYXJiYWdlVHlwZUxhYmVsLnN0cmluZyA9IFwi5Y+v5Zue5pS25Z6D5Zy+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoUUlUQSA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nYXJiYWdlVHlwZUN1cnJlbnRMZXZlbCA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYmFnZVR5cGVMYWJlbC5zdHJpbmcgPSBcIuWFtuWug+Weg+WcvlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKFlPVUhBSSA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nYXJiYWdlVHlwZUN1cnJlbnRMZXZlbCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYmFnZVR5cGVMYWJlbC5zdHJpbmcgPSBcIuacieWus+Weg+WcvlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxST1dTKkxJU1Q7aSsrKXsgICAgICAgIC8v5LiA57u06ZW/5bqm5Li66KGM5pWwICog5YiX5pWwXHJcbiAgICAgICAgICAgIHRoaXMuaXNJbnRlcmFjdGFibGVbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRnJvbnRbaV0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5waWNbaV0gPT0gMSkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICsrdGhpcy5yaWdodExlZnROdW07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmlnaHRbaV0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2FyYmFnZVR5cGVDdXJyZW50TGV2ZWwgPT0gMSkgICAvL+WPr+WbnuaUtuaooeW8j1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXJiYWdlSW5kZXhbaV0gPSB0aGlzLlJhbmRvbUludCgwLHBhcnNlSW50KHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMF0pKTsvL1swLHRoaXMuR0FSQkFHRUVWRVJZTlVNUykgICDlj6/lm57mlLZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5Y+v5Zue5pS277yaXCIrdGhpcy5nYXJiYWdlSW5kZXhbaV0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmdhcmJhZ2VUeXBlQ3VycmVudExldmVsID09IDIpICAgLy/ljqjkvZnmqKHlvI9cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FyYmFnZUluZGV4W2ldID0gdGhpcy5SYW5kb21JbnQocGFyc2VJbnQodGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFswXSkscGFyc2VJbnQodGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFsxXSkpOy8vWzIwLDQwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLljqjkvZnmqKHlvI9cIit0aGlzLmdhcmJhZ2VJbmRleFtpXSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5nYXJiYWdlVHlwZUN1cnJlbnRMZXZlbCA9PSAzKSAgIC8v5pyJ5a6z5qih5byPXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmJhZ2VJbmRleFtpXSA9IHRoaXMuUmFuZG9tSW50KHBhcnNlSW50KHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMl0pLHBhcnNlSW50KHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbM10pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5pyJ5a6z5qih5byPXCIrdGhpcy5nYXJiYWdlSW5kZXhbaV0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmdhcmJhZ2VUeXBlQ3VycmVudExldmVsID09IDQpICAgLy/lhbblroPmqKHlvI9cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FyYmFnZUluZGV4W2ldID0gdGhpcy5SYW5kb21JbnQocGFyc2VJbnQodGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFsxXSkscGFyc2VJbnQodGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFsyXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLlhbblroPmqKHlvI9cIit0aGlzLmdhcmJhZ2VJbmRleFtpXSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmlnaHRbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBqID0gaSAlIDM7Ly/lsL3ph4/kv53or4HlhbblroPkuInnp43nsbvlnovnmoTlnoPlnL7lnYfljIDnmoTnlJ/miJBcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmdhcmJhZ2VUeXBlQ3VycmVudExldmVsID09IDEpLy/lj6/lm57mlLZcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSAwKSAgICAgICAgLy/ljqjkvZlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXJiYWdlSW5kZXhbaV0gPSB0aGlzLlJhbmRvbUludCh0aGlzLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoWzBdLHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMV0pOy8vWzIxLDQxKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoaiA9PSAxKSAgICAvL+acieWus1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmJhZ2VJbmRleFtpXSA9IHRoaXMuUmFuZG9tSW50KHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMl0sdGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFszXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSAgICAgICAgICAgICAgIC8v5YW25a6DXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FyYmFnZUluZGV4W2ldID0gdGhpcy5SYW5kb21JbnQodGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFsxXSx0aGlzLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoWzJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5nYXJiYWdlVHlwZUN1cnJlbnRMZXZlbCA9PSAyKS8v5Y6o5L2ZXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gMCkgICAgICAgIC8v5Y+v5Zue5pS2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FyYmFnZUluZGV4W2ldID0gdGhpcy5SYW5kb21JbnQoMCx0aGlzLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGogPT0gMSkgICAgLy/mnInlrrNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXJiYWdlSW5kZXhbaV0gPSB0aGlzLlJhbmRvbUludCh0aGlzLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoWzJdLHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbM10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgICAgICAgICAgICAgICAvL+WFtuWug1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmJhZ2VJbmRleFtpXSA9IHRoaXMuUmFuZG9tSW50KHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMV0sdGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFsyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5nYXJiYWdlVHlwZUN1cnJlbnRMZXZlbCA9PSAzKS8v5pyJ5a6zXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gMCkgICAgICAgIC8v5Y+v5Zue5pS2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FyYmFnZUluZGV4W2ldID0gdGhpcy5SYW5kb21JbnQoMCx0aGlzLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGogPT0gMSkgICAgLy/ljqjkvZlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXJiYWdlSW5kZXhbaV0gPSB0aGlzLlJhbmRvbUludCh0aGlzLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoWzBdLHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgICAgICAgICAgICAgICAvL+WFtuWug1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmJhZ2VJbmRleFtpXSA9IHRoaXMuUmFuZG9tSW50KHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMV0sdGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFsyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuZ2FyYmFnZVR5cGVDdXJyZW50TGV2ZWwgPT0gNCkvL+WFtuWug1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09IDApICAgICAgICAvL+WPr+WbnuaUtlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmJhZ2VJbmRleFtpXSA9IHRoaXMuUmFuZG9tSW50KHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoaiA9PSAxKSAgICAvL+WOqOS9mVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmJhZ2VJbmRleFtpXSA9IHRoaXMuUmFuZG9tSW50KHRoaXMuZ2FyYmFnZVR5cGVQaG9MZW5ndGhbMF0sdGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSAgICAgICAgICAgICAgIC8v5pyJ5a6zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FyYmFnZUluZGV4W2ldID0gdGhpcy5SYW5kb21JbnQodGhpcy5nYXJiYWdlVHlwZVBob0xlbmd0aFsyXSx0aGlzLmdhcmJhZ2VUeXBlUGhvTGVuZ3RoWzNdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5nYXJiYWdlSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU11c2ljKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGlwS25vd2xlZGdlTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvYmFja2dyb3VuZC90aXBLbm93bGVkZ2VCdXR0b25cIik7XHJcbiAgICAgICAvLyBjYy5sb2codGhpcy50aXBLbm93bGVkZ2VOb2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5saWZlU3ByaXRlTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvYmFja2dyb3VuZC9zdG9wQnV0dG9uL2xpZmVTcHJpdGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUxpZmVTcHJpdGVGcmFtZSgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZUxpZmVTcHJpdGVGcmFtZSgpe1xyXG4gICAgICAgIHZhciBwYXIgPSB0aGlzO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKFwibGlmZVNwcml0ZUZyYW1lXCIsIGNjLlNwcml0ZUZyYW1lLGZ1bmN0aW9uIChlcnIsIGFzc2V0cywgdXJscykgeyAgIC8vcmVzb3VyY2Xmlofku7blpLnph4xcclxuICAgICAgICAgICAgICAvL+WkjeWItlxyXG4gICAgICAgICAgICBpZihlcnIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jYy5sb2coYXNzZXRzKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxhc3NldHMubGVuZ3RoO2krKykgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+i/memHjOWPr+iDveS8muWHuueOsOmhuuW6j+mXrumimO+8ge+8gVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coYXNzZXRzW2ldKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGo9MDtqPGFzc2V0cy5sZW5ndGg7aisrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGogPT0gcGFyc2VJbnQoYXNzZXRzW2ldLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyLmxpZmVTcHJpdGVGcmFtZXNbaV0gPSBhc3NldHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTsgXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRpYWxpemVNdXNpYygpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yqo5oCB6LWE5rqQ57uR5a6aXHJcbiAgICAgICAgdmFyIHBhciA9IHRoaXM7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJtdXNpY1wiLCBjYy5BdWRpb0NsaXAsZnVuY3Rpb24gKGVyciwgYXNzZXRzLCB1cmxzKSB7ICAgLy9yZXNvdXJjZeaWh+S7tuWkuemHjFxyXG4gICAgICAgICAgICAgIC8v5aSN5Yi2XHJcbiAgICAgICAgICAgIGlmKGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NjLmxvZyhhc3NldHMpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPGFzc2V0cy5sZW5ndGg7aSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGo9MDtqPGFzc2V0cy5sZW5ndGg7aisrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPT0gcGFyc2VJbnQoYXNzZXRzW2pdLm5hbWUpIC0gMSkgICAvL3FpYW5nemh1YW5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKHBhcnNlSW50KGFzc2V0c1tqXS5uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljQ2xpcHNbaV0gPSBhc3NldHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgICAgICB0aGlzLm11c2ljRHVhblNodSA9IE1hdGguZmxvb3IobXVzaWNzLmxlbmd0aCAvIHRoaXMubXVzaWNzWWluZ1NodSk7IC8v6IiN5Y675pyA5ZCO5aSa5L2Z55qEXHJcblxyXG4gICAgICAgIHRoaXMubXVzaWNEdWFuU2h1ID0gbXVzaWNYaWFvSmllWWluTnVtLmxlbmd0aDtcclxuICAgICAgICBjYy5sb2coXCLlsI/oioLmlbDvvJpcIit0aGlzLm11c2ljRHVhblNodSk7XHJcblxyXG4gICAgICAgIG11c2ljWGlhb0ppZVlpbk51bUluZGV4ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBtdXNpY0N1cllpbkluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5tdXNpY0h1YW5DaG9uZyA9IDA7XHJcblxyXG4gICAgfSwgXHJcblxyXG5cclxuICAgIHBsYXlNdXNpY0NsaXBzKCl7ICAgICAgICAgICAgICAgIC8v56ys5LqM56eN5pa55byP5pKt5pS+ICAg5peg6K6657+76ZSZ6L+Y5piv57+75a+577yM6YO957un57ut5b6A5LiL5pKtICAgLy8vLy8vLy/mnIDnu4jkvb/nlKjnmoTmmK/ov5nkuKpcclxuICAgICAgICBcclxuICAgICAgICBpZihtdXNpY0lzUGxheWluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNIdWFuQ2hvbmcrKzsgLy/lrZjmlL7liLDnvJPlhrLkuK3nrYnlvoXmkq3mlL4gICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtdXNpY0lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoKG11c2ljWGlhb0ppZVlpbk51bVttdXNpY1hpYW9KaWVZaW5OdW1JbmRleCsrXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMucWlhblRhbzIoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnFpYW5UYW8zKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OiBcclxuICAgICAgICAgICAgICAgIHRoaXMucWlhblRhbzUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnFpYW5UYW82KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobXVzaWNYaWFvSmllWWluTnVtSW5kZXggPj0gbXVzaWNYaWFvSmllWWluTnVtLmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG11c2ljWGlhb0ppZVlpbk51bUluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobXVzaWNDdXJZaW5JbmRleCA+PSBtdXNpY3MubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbXVzaWNDdXJZaW5JbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHFpYW5UYW8yKClcclxuICAgIHtcclxuICAgICAgICAvL2NjLmxvZyhcIuiwg+eUqOW1jOWllzJcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KG11c2ljQ2xpcHNbbXVzaWNzW211c2ljQ3VyWWluSW5kZXgrK11bMF0gLTFdLCBmYWxzZSxtdXNpY1ZvbHVtKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkobXVzaWNDbGlwc1ttdXNpY3NbbXVzaWNDdXJZaW5JbmRleCsrXVswXSAtMV0sIGZhbHNlLG11c2ljVm9sdW0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBtdXNpY0lzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RNdXNpY0h1YW5DaG9uZygpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH0sbXVzaWNzW211c2ljQ3VyWWluSW5kZXggLSAxIDwgMCA/IDAgOm11c2ljQ3VyWWluSW5kZXggLSAxXVsxXSk7XHJcblxyXG4gICAgICAgIH0sbXVzaWNzW211c2ljQ3VyWWluSW5kZXggLSAxIDwgMCA/IDAgOm11c2ljQ3VyWWluSW5kZXggLSAxXVsxXSk7XHJcbiAgICB9LFxyXG4gICAgcWlhblRhbzMoKVxyXG4gICAge1xyXG4gICAgICAgIC8vY2MubG9nKFwi6LCD55So5bWM5aWXM1wiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkobXVzaWNDbGlwc1ttdXNpY3NbbXVzaWNDdXJZaW5JbmRleCsrXVswXSAtMV0sIGZhbHNlLG11c2ljVm9sdW0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShtdXNpY0NsaXBzW211c2ljc1ttdXNpY0N1cllpbkluZGV4KytdWzBdIC0xXSwgZmFsc2UsbXVzaWNWb2x1bSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkobXVzaWNDbGlwc1ttdXNpY3NbbXVzaWNDdXJZaW5JbmRleCsrXVswXSAtMV0sIGZhbHNlLG11c2ljVm9sdW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG11c2ljSXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RNdXNpY0h1YW5DaG9uZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sbXVzaWNzW211c2ljQ3VyWWluSW5kZXggLSAxIDwgMCA/IDAgOm11c2ljQ3VyWWluSW5kZXggLSAxXVsxXSk7XHJcbiAgICBcclxuICAgICAgICAgICAgfSxtdXNpY3NbbXVzaWNDdXJZaW5JbmRleCAtIDEgPCAwID8gMCA6bXVzaWNDdXJZaW5JbmRleCAtIDFdWzFdKTtcclxuXHJcbiAgICAgICAgfSxtdXNpY3NbbXVzaWNDdXJZaW5JbmRleCAtIDEgPCAwID8gMCA6bXVzaWNDdXJZaW5JbmRleCAtIDFdWzFdKTtcclxuICAgIH0sXHJcblxyXG4gICAgcWlhblRhbzUoKVxyXG4gICAge1xyXG4gICAgICAgIC8vY2MubG9nKFwi6LCD55So5bWM5aWXNVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkobXVzaWNDbGlwc1ttdXNpY3NbbXVzaWNDdXJZaW5JbmRleCsrXVswXSAtMV0sIGZhbHNlLG11c2ljVm9sdW0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShtdXNpY0NsaXBzW211c2ljc1ttdXNpY0N1cllpbkluZGV4KytdWzBdIC0xXSwgZmFsc2UsbXVzaWNWb2x1bSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KG11c2ljQ2xpcHNbbXVzaWNzW211c2ljQ3VyWWluSW5kZXgrK11bMF0gLTFdLCBmYWxzZSxtdXNpY1ZvbHVtKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkobXVzaWNDbGlwc1ttdXNpY3NbbXVzaWNDdXJZaW5JbmRleCsrXVswXSAtMV0sIGZhbHNlLG11c2ljVm9sdW0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShtdXNpY0NsaXBzW211c2ljc1ttdXNpY0N1cllpbkluZGV4KytdWzBdIC0xXSwgZmFsc2UsbXVzaWNWb2x1bSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljSXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGVjdE11c2ljSHVhbkNob25nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sbXVzaWNzW211c2ljQ3VyWWluSW5kZXggLSAxIDwgMCA/IDAgOm11c2ljQ3VyWWluSW5kZXggLSAxXVsxXSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sbXVzaWNzW211c2ljQ3VyWWluSW5kZXggLSAxIDwgMCA/IDAgOm11c2ljQ3VyWWluSW5kZXggLSAxXVsxXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LG11c2ljc1ttdXNpY0N1cllpbkluZGV4IC0gMSA8IDAgPyAwIDptdXNpY0N1cllpbkluZGV4IC0gMV1bMV0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH0sbXVzaWNzW211c2ljQ3VyWWluSW5kZXggLSAxIDwgMCA/IDAgOm11c2ljQ3VyWWluSW5kZXggLSAxXVsxXSk7XHJcblxyXG4gICAgICAgIH0sbXVzaWNzW211c2ljQ3VyWWluSW5kZXggLSAxIDwgMCA/IDAgOm11c2ljQ3VyWWluSW5kZXggLSAxXVsxXSk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBxaWFuVGFvNigpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jYy5sb2coXCLosIPnlKjltYzlpZc2XCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShtdXNpY0NsaXBzW211c2ljc1ttdXNpY0N1cllpbkluZGV4KytdWzBdIC0xXSwgZmFsc2UsbXVzaWNWb2x1bSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KG11c2ljQ2xpcHNbbXVzaWNzW211c2ljQ3VyWWluSW5kZXgrK11bMF0gLTFdLCBmYWxzZSxtdXNpY1ZvbHVtKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkobXVzaWNDbGlwc1ttdXNpY3NbbXVzaWNDdXJZaW5JbmRleCsrXVswXSAtMV0sIGZhbHNlLG11c2ljVm9sdW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShtdXNpY0NsaXBzW211c2ljc1ttdXNpY0N1cllpbkluZGV4KytdWzBdIC0xXSwgZmFsc2UsbXVzaWNWb2x1bSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KG11c2ljQ2xpcHNbbXVzaWNzW211c2ljQ3VyWWluSW5kZXgrK11bMF0gLTFdLCBmYWxzZSxtdXNpY1ZvbHVtKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkobXVzaWNDbGlwc1ttdXNpY3NbbXVzaWNDdXJZaW5JbmRleCsrXVswXSAtMV0sIGZhbHNlLG11c2ljVm9sdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljSXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RNdXNpY0h1YW5DaG9uZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxtdXNpY3NbbXVzaWNDdXJZaW5JbmRleCAtIDEgPCAwID8gMCA6bXVzaWNDdXJZaW5JbmRleCAtIDFdWzFdKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LG11c2ljc1ttdXNpY0N1cllpbkluZGV4IC0gMSA8IDAgPyAwIDptdXNpY0N1cllpbkluZGV4IC0gMV1bMV0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LG11c2ljc1ttdXNpY0N1cllpbkluZGV4IC0gMSA8IDAgPyAwIDptdXNpY0N1cllpbkluZGV4IC0gMV1bMV0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxtdXNpY3NbbXVzaWNDdXJZaW5JbmRleCAtIDEgPCAwID8gMCA6bXVzaWNDdXJZaW5JbmRleCAtIDFdWzFdKTtcclxuICAgIFxyXG4gICAgICAgICAgICB9LG11c2ljc1ttdXNpY0N1cllpbkluZGV4IC0gMSA8IDAgPyAwIDptdXNpY0N1cllpbkluZGV4IC0gMV1bMV0pO1xyXG5cclxuICAgICAgICB9LG11c2ljc1ttdXNpY0N1cllpbkluZGV4IC0gMSA8IDAgPyAwIDptdXNpY0N1cllpbkluZGV4IC0gMV1bMV0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZXRlY3RNdXNpY0h1YW5DaG9uZygpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jYy5sb2coXCLmo4DmtYvnvJPlhrJcIik7XHJcbiAgICAgICAgaWYodGhpcy5tdXNpY0h1YW5DaG9uZz4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0h1YW5DaG9uZy0tO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlNdXNpY0NsaXBzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgZ290b05leHRMZXZlbCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHZhciBidXR0b25zID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubm9kZS5jaGlsZHJlbkNvdW50O2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnNbaV0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy5nYXJiYWdlUGhvdG9CYWNrR3JvdW5kO1xyXG4gICAgICAgICAgICBidXR0b25zW2ldLmdldENvbXBvbmVudChjYy5CdXR0b24pLmhvdmVyU3ByaXRlID0gdGhpcy5nYXJiYWdlUGhvdG9CYWNrR3JvdW5kO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcG9wVXBOb3RQYXNzTGV2ZWwoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBub3RQYXNzTGV2ZWxQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vdFBhc3NMZXZlbFByZWZhYik7XHJcbiAgICAgICAgbm90UGFzc0xldmVsUHJlZmFiLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgLy9sZXQgdmVjdG9yMiA9IGNjLlZlYzIgICDliqDlnZDmoIdcclxuICAgIH0sXHJcblxyXG4gICAgcG9wVXBQYXNzTGV2ZWwoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBwYXNzTGV2ZWxQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBhc3NMZXZlbFByZWZhYik7XHJcbiAgICAgICAgcGFzc0xldmVsUHJlZmFiLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIFJhbmRvbUludDpmdW5jdGlvbihtYXgsIG1pbikvL1ttaW4sbWF4KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4pK21pbik7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZUxpZmVTcHJpdGUoKXtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmxpZmVTcHJpdGVOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saWZlU3ByaXRlRnJhbWVzW3RoaXMubGlmZV07ICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxud2luZG93Lm11c2ljVm9sdW0gPSAxO1xyXG53aW5kb3cubXVzaWNGbGFnID0gMDsvLzAg5Luj6KGo6Z+z5LmQ5omT5byAIFxyXG5cclxud2luZG93LnBpY3MgPSBuZXcgQXJyYXkoICAgICAgICAgICAgLy/lhbPljaHorr7orqHlnKjov5nvvIFcclxuICAgIG5ldyBBcnJheSggICAwLDAsMCwwLDAsMCxcclxuICAgICAgICAwLDEsMCwwLDEsMCxcclxuICAgICAgICAwLDEsMCwxLDEsMSxcclxuICAgICAgICAxLDEsMSwwLDAsMCxcclxuICAgICAgICAwLDEsMCwxLDAsMSxcclxuICAgICAgICAwLDEsMCwxLDAsMSxcclxuICAgICAgICAwLDEsMSwwLDAsMSxcclxuICAgICAgICAxLDAsMCwwLDAsMCxcclxuICAgICAgICAwLDAsMSwxLDEsMSxcclxuICAgICAgICAwLDAsMCwwLDAsMCksXHJcbiAgICBuZXcgQXJyYXkoICAgXHJcbiAgICAgICAgMCwwLDAsMCwwLDAsXHJcbiAgICAgICAgMCwwLDAsMCwwLDAsXHJcbiAgICAgICAgMCwwLDAsMCwwLDAsXHJcbiAgICAgICAgMCwxLDEsMSwwLDAsXHJcbiAgICAgICAgMCwxLDAsMSwwLDAsXHJcbiAgICAgICAgMCwxLDEsMSwwLDAsXHJcbiAgICAgICAgMCwwLDAsMCwwLDAsXHJcbiAgICAgICAgMCwwLDAsMCwwLDAsXHJcbiAgICAgICAgMCwwLDAsMCwwLDEsXHJcbiAgICAgICAgMCwwLDAsMCwwLDApXHJcbilcclxuXHJcbndpbmRvdy5lcnJvckdhcmJhZ2VQaG90byA9IGNjLlNwcml0ZUZyYW1lIDsgICAgIC8v5q2k5Y+Y6YeP55So5LqOIOWSjOefpeivhuWwj+aPkOekuuWbvueJh+i/m+ihjOS6pOS6kiAgIOWcqG9uQnV0dG9uQ2xpY2sg5omj55Sf5ZG95YC85pe25L+u5pS5XHJcblxyXG53aW5kb3cubXVzaWNKaWVQYWlUaW1lID0gMC41OyAgLy/nroDosLHkuK3ljYrmi43nmoTml7bpl7RcclxuXHJcbndpbmRvdy5tdXNpY0N1cllpbkluZGV4ID0gMDsgLy/lvZPliY3mkq3mlL7nmoRtdXNpY3NbbXVzaWNDdXJZaW5JbmRleF1cclxuXHJcblxyXG53aW5kb3cubXVzaWNYaWFvSmllWWluTnVtID0gbmV3IEFycmF5KDIsNiw2LDUsMyw2LDYsNSwzLDYsNiw2LDMsNiw2KTsvL+avj+S4quWwj+iKgueahOmfs+aVsFxyXG53aW5kb3cubXVzaWNYaWFvSmllWWluTnVtSW5kZXggPSAwO1xyXG5cclxud2luZG93Lm11c2ljQ2xpcHMgPSBuZXcgQXJyYXkoKTtcclxuXHJcbndpbmRvdy5tdXNpY0lzUGxheWluZyA9IGZhbHNlO1xyXG5cclxud2luZG93Lm11c2ljcyA9IG5ldyBBcnJheSggICAgIC8v5rOo5oSP5piv5LuOIDF+MTcgIOWIsOaXtuWAmeimgeWHj+S4gCAvL+WKoOi/meS4qjAgIOWPquaYr+S4uuS6huS4jeiuqSBuZXcgQXJyYXkoNSnooqvop6Pph4rmiJAgNeS4quWFg+e0oFxyXG4gICAgbmV3IEFycmF5KDEwLCA0Km11c2ljSmllUGFpVGltZSksICAgICAgICAgICAgXHJcbiAgICBuZXcgQXJyYXkoMTEsNCptdXNpY0ppZVBhaVRpbWUpLCBcclxuXHJcbiAgICBuZXcgQXJyYXkoNiwyKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNiwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNSwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTMsMiptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDQsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDMsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG5cclxuICAgIG5ldyBBcnJheSg0LDIqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMywxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNSwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNiwyKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNCwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTMsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG5cclxuICAgIG5ldyBBcnJheSg2LDIqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSg0LDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMywxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNiwyKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTEsMiptdXNpY0ppZVBhaVRpbWUpLFxyXG5cclxuICAgIG5ldyBBcnJheSgxMCw2Km11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTAsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDExLDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuXHJcbiAgICBuZXcgQXJyYXkoNiwyKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNiwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNSwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTMsMiptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDQsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDMsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG5cclxuICAgIG5ldyBBcnJheSg0LDIqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMywxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNSwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNiwyKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNCwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTMsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG5cclxuICAgIG5ldyBBcnJheSg2LDIqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSg0LDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMywxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNiwyKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTEsMiptdXNpY0ppZVBhaVRpbWUpLFxyXG5cclxuICAgIG5ldyBBcnJheSg2LDYqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMCwxKm11c2ljSmllUGFpVGltZSksLy/nrKzkuInmrrVcclxuICAgIG5ldyBBcnJheSgxMSwxKm11c2ljSmllUGFpVGltZSksXHJcblxyXG4gICAgbmV3IEFycmF5KDYsMiptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDYsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDExLDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSg2LDIqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMiwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTEsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG5cclxuICAgIG5ldyBBcnJheSg2LDIqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMSwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoOCwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTAsMiptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDEwLDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMSwxKm11c2ljSmllUGFpVGltZSksXHJcblxyXG4gICAgbmV3IEFycmF5KDYsMyptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDExLDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSg2LDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSg1LDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMiwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTEsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG5cclxuICAgIG5ldyBBcnJheSgxMCw2Km11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTAsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDExLDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuXHJcbiAgICBuZXcgQXJyYXkoNiwyKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoNiwxKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTEsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDYsMiptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDEyLDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMSwxKm11c2ljSmllUGFpVGltZSksXHJcblxyXG4gICAgbmV3IEFycmF5KDYsMiptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDExLDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSg4LDEqbXVzaWNKaWVQYWlUaW1lKSxcclxuICAgIG5ldyBBcnJheSgxMCwyKm11c2ljSmllUGFpVGltZSksXHJcbiAgICBuZXcgQXJyYXkoMTAsMSptdXNpY0ppZVBhaVRpbWUpLFxyXG4gICAgbmV3IEFycmF5KDgsMSptdXNpY0ppZVBhaVRpbWUpXHJcbiAgICAvLy4uLi4uLi5cclxuKSJdfQ==