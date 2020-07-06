"use strict";
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