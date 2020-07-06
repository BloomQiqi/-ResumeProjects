"use strict";
cc._RF.push(module, '7a70dSaplJF3Lspex81q1Z+', 'garbageDictionary');
// Script/ThirdPage/garbageDictionary.js

"use strict";

/* 四类垃圾的字典
所属类别 1 2 3 4 
1 可回收垃圾
2 厨余垃圾
3 有害垃圾
4 其他垃圾
格式 {KEY1 ： VAULE1，VAULE2，VAULE3，KEY2 ： VAULE1，VAULE2，VAULE3，...
{”垃圾的英文名“：“垃圾的中文名名称” ，“所属类别” ，“对应图片”，

 */
cc.Class({
  "extends": cc.Component,
  properties: {
    garbagePhoto: new Array(80) //         recyclableWaste = {"plasticBottle":["塑料瓶",1,"r11"],"Tinfoil":["锡纸",1,"r12"],"aluminumFoil":["铝箔",1,"r13"],
    //         "waxPaper":["蜡纸",1,"r14"],"cokeCans":["可乐罐",1,"r15"],"shockproofFoam":["防震泡沫",1,"r16"],
    //         "wasteLeather":["废皮革",1,"r17"],"oldFishTank":["旧鱼缸",1,"r18"],"aerosolTank":["气雾罐",1,"r19"],
    //         "needle":["针",1,"r110"],"steelScrap":["废钢",1,"r11"],"airConditioner":["空调 ",1,"r12"],
    //         "radiator":["暖气片",1,"r113"],"usedTyres":["旧轮胎",1,"r114"],"TV":["旧电视",1,"r115"],
    //         "CD":["CD",1,"r116"],"expressCarton":["快递纸箱",1,"r117"],"ironShelf":["铁架子",1,"r118"],
    //         "GlassDoor":["玻璃门",1,"r119"],"报纸":["newsPaper",1,"r120"],},
    // harmfulWaste : {
    //          "expiredChineseHerbalMedicine":["过期的中草药",3,"图片链接"],
    //          "sterilizedPlasticBottle":["消毒片塑料瓶子",3,"图片链接"],
    //          "expiredBandAid":["过期创可贴",3,"图片链接"],
    //          "button":["纽扣",3,"图片链接"],
    //          "wasteNeutralRefill":["废旧中性笔芯",3,"图片链接"],
    //          "expiredLipstick":["过期的口红",3,"图片链接"],
    //          "soot":["烟灰",3,"图片链接"],
    //          "ashtray":["调色盘",3,"图片链接"],
    //          "usedMobilePhone":["废旧手机",3,"图片链接"],
    //          "hydrogenPeroxideSolution":["双氧水",3,"图片链接"],
    //          "lightStick":["荧光棒",3,"图片链接"],
    //          "mercuryThermometer":["含汞温度计",3,"图片链接"],
    //          "wastewaterSilverSphygmomanometer":["废水银血压计",3,"图片链接"],
    //          "suppositoriesGlycerol":["开塞露",3,"图片链接"],
    //          "paintBucket":["油漆桶",3,"图片链接"],
    //          "lEDLamp":["LED灯",3,"图片链接"],
    //          "transparentPlasticMedicineBottle":["透明塑料药瓶",3,"图片链接"],
    //          "hairDyeBox":["染发剂包装盒",3,"图片链接"],
    //          "coughSyrup":["咳嗽糖浆",3,"图片链接"],
    //          "expiredCapsules":["过期的胶囊药物",3,"图片链接"],
    //          },
    // kitchenGarbage : {
    //          "leftovers":["剩菜剩饭" ,2,"图片链接"],
    //          "theFallenLeaves":["植物的残枝落叶" ,2,"图片链接"],
    //          "witheredFlower":["枯萎的花朵" ,2,"图片链接"],
    //          "cookingOil":["食用油" ,2,"图片链接"],
    //          "unfinishedMilkTea":["未喝完的奶茶" ,2,"图片链接"],
    //          "boiledChineseMedicine":["煲过的中药" ,2,"图片链接"],
    //          "weeds":["杂草" ,2,"图片链接"],
    //          "uncookedRice":["生米" ,2,"图片链接"],
    //          "staleCandy":["过期的糖果" ,2,"图片链接"],
    //          "remnantsOfWesternPastry":["西餐糕点残余" ,2,"图片链接"],
    //          "moldyBread":["发霉的面包" ,2,"图片链接"],
    //          "fishBone ":["鱼骨头" ,2,"图片链接"],
    //          "porkChops":["猪排骨" ,2,"图片链接"],
    //          "chickenEntrails":["鸡内脏" ,2,"图片链接"],
    //          "teaLeaves":["茶叶渣" ,2,"图片链接"],
    //          "melonFruitShell":["果壳瓜皮" ,2,"图片链接"],
    //          "crabs":["死螃蟹" ,2,"图片链接"],
    //          "expiredChineseHerbalMedicine":["过期的中草药" ,2,"图片链接"],
    //          "hotPotBottom":["麻辣烫锅底" ,2,"图片链接"],
    //          "walnutShell":["核桃壳" ,2,"图片链接"],
    // },
    // otherWaste : {			
    //           "rope":["绳子",4,""],
    //          "patchMask":["贴片面膜",4,""],
    //          "drawingPaper":["画纸",4,""],
    //          "wetSocks":["湿袜子",4,""],
    //          "insulatedWaterCup":["保温水杯",4,""],
    //          "plasticBroom":["塑料扫把",4,""],
    //          "springFestivalCouplets":["春联",4,""],
    //          "woodenCase":["木箱",4,""],
    //          "bigBoneStick":["大骨头棒",4,""],
    //          "oldLighter":["旧打火机",4,""],
    //          "fireworksAndFirecrackers":["烟花爆竹",4,""],
    //          "cigarette":["烟",4,""],
    //          "toiletTissue":["厕所卫生纸",4,""],
    //          "battery5&7":["5号7号电池",4,""],
    //          "warmHandbag":["充电暖手袋",4,""],
    //          "mask":["用过的口罩",4,""],
    //          "fastfood":["一次性快餐",4,""],
    //          "snackBag":["小吃零食袋",4,""],
    //          "rubber":["橡皮",4,""],
    //          "chewingGum":["嚼过的口香糖",4,""]
    // },

  },
  start: function start() {
    cc.log(recyclableWaste[0]);
  }
});

cc._RF.pop();