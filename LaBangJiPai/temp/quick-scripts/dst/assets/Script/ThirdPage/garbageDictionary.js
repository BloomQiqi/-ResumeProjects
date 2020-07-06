
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ThirdPage/garbageDictionary.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaGlyZFBhZ2VcXGdhcmJhZ2VEaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2FyYmFnZVBob3RvIiwiQXJyYXkiLCJzdGFydCIsImxvZyIsInJlY3ljbGFibGVXYXN0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsWUFBWSxFQUFDLElBQUlDLEtBQUosQ0FBVSxFQUFWLENBREwsQ0FrQmhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTdGZ0IsR0FIUDtBQWtHTEMsRUFBQUEsS0FsR0ssbUJBa0dJO0FBQ0xOLElBQUFBLEVBQUUsQ0FBQ08sR0FBSCxDQUFPQyxlQUFlLENBQUMsQ0FBRCxDQUF0QjtBQUNIO0FBcEdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWbm+exu+Weg+WcvueahOWtl+WFuFxyXG7miYDlsZ7nsbvliKsgMSAyIDMgNCBcclxuMSDlj6/lm57mlLblnoPlnL5cclxuMiDljqjkvZnlnoPlnL5cclxuMyDmnInlrrPlnoPlnL5cclxuNCDlhbbku5blnoPlnL5cclxu5qC85byPIHtLRVkxIO+8miBWQVVMRTHvvIxWQVVMRTLvvIxWQVVMRTPvvIxLRVkyIO+8miBWQVVMRTHvvIxWQVVMRTLvvIxWQVVMRTPvvIwuLi5cclxue+KAneWeg+WcvueahOiLseaWh+WQjeKAnO+8muKAnOWeg+WcvueahOS4reaWh+WQjeWQjeensOKAnSDvvIzigJzmiYDlsZ7nsbvliKvigJ0g77yM4oCc5a+55bqU5Zu+54mH4oCd77yMXHJcblxyXG4gKi9cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ2FyYmFnZVBob3RvOm5ldyBBcnJheSg4MCksXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAgICAgICAgIHJlY3ljbGFibGVXYXN0ZSA9IHtcInBsYXN0aWNCb3R0bGVcIjpbXCLloZHmlpnnk7ZcIiwxLFwicjExXCJdLFwiVGluZm9pbFwiOltcIumUoee6uFwiLDEsXCJyMTJcIl0sXCJhbHVtaW51bUZvaWxcIjpbXCLpk53nrpRcIiwxLFwicjEzXCJdLFxyXG4vLyAgICAgICAgIFwid2F4UGFwZXJcIjpbXCLonKHnurhcIiwxLFwicjE0XCJdLFwiY29rZUNhbnNcIjpbXCLlj6/kuZDnvZBcIiwxLFwicjE1XCJdLFwic2hvY2twcm9vZkZvYW1cIjpbXCLpmLLpnIfms6HmsqtcIiwxLFwicjE2XCJdLFxyXG4vLyAgICAgICAgIFwid2FzdGVMZWF0aGVyXCI6W1wi5bqf55qu6Z2pXCIsMSxcInIxN1wiXSxcIm9sZEZpc2hUYW5rXCI6W1wi5pen6bG857y4XCIsMSxcInIxOFwiXSxcImFlcm9zb2xUYW5rXCI6W1wi5rCU6Zu+572QXCIsMSxcInIxOVwiXSxcclxuLy8gICAgICAgICBcIm5lZWRsZVwiOltcIumSiFwiLDEsXCJyMTEwXCJdLFwic3RlZWxTY3JhcFwiOltcIuW6n+mSolwiLDEsXCJyMTFcIl0sXCJhaXJDb25kaXRpb25lclwiOltcIuepuuiwgyBcIiwxLFwicjEyXCJdLFxyXG4vLyAgICAgICAgIFwicmFkaWF0b3JcIjpbXCLmmpbmsJTniYdcIiwxLFwicjExM1wiXSxcInVzZWRUeXJlc1wiOltcIuaXp+i9ruiDjlwiLDEsXCJyMTE0XCJdLFwiVFZcIjpbXCLml6fnlLXop4ZcIiwxLFwicjExNVwiXSxcclxuLy8gICAgICAgICBcIkNEXCI6W1wiQ0RcIiwxLFwicjExNlwiXSxcImV4cHJlc3NDYXJ0b25cIjpbXCLlv6vpgJLnurjnrrFcIiwxLFwicjExN1wiXSxcImlyb25TaGVsZlwiOltcIumTgeaetuWtkFwiLDEsXCJyMTE4XCJdLFxyXG4vLyAgICAgICAgIFwiR2xhc3NEb29yXCI6W1wi546755KD6ZeoXCIsMSxcInIxMTlcIl0sXCLmiqXnurhcIjpbXCJuZXdzUGFwZXJcIiwxLFwicjEyMFwiXSx9LFxyXG5cclxuLy8gaGFybWZ1bFdhc3RlIDoge1xyXG4vLyAgICAgICAgICBcImV4cGlyZWRDaGluZXNlSGVyYmFsTWVkaWNpbmVcIjpbXCLov4fmnJ/nmoTkuK3ojYnoja9cIiwzLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcInN0ZXJpbGl6ZWRQbGFzdGljQm90dGxlXCI6W1wi5raI5q+S54mH5aGR5paZ55O25a2QXCIsMyxcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJleHBpcmVkQmFuZEFpZFwiOltcIui/h+acn+WIm+WPr+i0tFwiLDMsXCLlm77niYfpk77mjqVcIl0sXHJcbi8vICAgICAgICAgIFwiYnV0dG9uXCI6W1wi57q95omjXCIsMyxcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJ3YXN0ZU5ldXRyYWxSZWZpbGxcIjpbXCLlup/ml6fkuK3mgKfnrJToiq9cIiwzLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcImV4cGlyZWRMaXBzdGlja1wiOltcIui/h+acn+eahOWPo+e6olwiLDMsXCLlm77niYfpk77mjqVcIl0sXHJcbi8vICAgICAgICAgIFwic29vdFwiOltcIueDn+eBsFwiLDMsXCLlm77niYfpk77mjqVcIl0sXHJcbi8vICAgICAgICAgIFwiYXNodHJheVwiOltcIuiwg+iJsuebmFwiLDMsXCLlm77niYfpk77mjqVcIl0sXHJcbi8vICAgICAgICAgIFwidXNlZE1vYmlsZVBob25lXCI6W1wi5bqf5pen5omL5py6XCIsMyxcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJoeWRyb2dlblBlcm94aWRlU29sdXRpb25cIjpbXCLlj4zmsKfmsLRcIiwzLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcImxpZ2h0U3RpY2tcIjpbXCLojaflhYnmo5JcIiwzLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcIm1lcmN1cnlUaGVybW9tZXRlclwiOltcIuWQq+axnua4qeW6puiuoVwiLDMsXCLlm77niYfpk77mjqVcIl0sXHJcbi8vICAgICAgICAgIFwid2FzdGV3YXRlclNpbHZlclNwaHlnbW9tYW5vbWV0ZXJcIjpbXCLlup/msLTpk7booYDljovorqFcIiwzLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcInN1cHBvc2l0b3JpZXNHbHljZXJvbFwiOltcIuW8gOWhnumcslwiLDMsXCLlm77niYfpk77mjqVcIl0sXHJcbi8vICAgICAgICAgIFwicGFpbnRCdWNrZXRcIjpbXCLmsrnmvIbmobZcIiwzLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcImxFRExhbXBcIjpbXCJMRUTnga9cIiwzLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcInRyYW5zcGFyZW50UGxhc3RpY01lZGljaW5lQm90dGxlXCI6W1wi6YCP5piO5aGR5paZ6I2v55O2XCIsMyxcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJoYWlyRHllQm94XCI6W1wi5p+T5Y+R5YmC5YyF6KOF55uSXCIsMyxcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJjb3VnaFN5cnVwXCI6W1wi5ZKz5Ze957OW5rWGXCIsMyxcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJleHBpcmVkQ2Fwc3VsZXNcIjpbXCLov4fmnJ/nmoTog7blm4roja/nialcIiwzLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICB9LFxyXG5cclxuLy8ga2l0Y2hlbkdhcmJhZ2UgOiB7XHJcbi8vICAgICAgICAgIFwibGVmdG92ZXJzXCI6W1wi5Ymp6I+c5Ymp6aWtXCIgLDIsXCLlm77niYfpk77mjqVcIl0sXHJcbi8vICAgICAgICAgIFwidGhlRmFsbGVuTGVhdmVzXCI6W1wi5qSN54mp55qE5q6L5p6d6JC95Y+2XCIgLDIsXCLlm77niYfpk77mjqVcIl0sXHJcbi8vICAgICAgICAgIFwid2l0aGVyZWRGbG93ZXJcIjpbXCLmnq/okI7nmoToirHmnLVcIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJjb29raW5nT2lsXCI6W1wi6aOf55So5rK5XCIgLDIsXCLlm77niYfpk77mjqVcIl0sXHJcbi8vICAgICAgICAgIFwidW5maW5pc2hlZE1pbGtUZWFcIjpbXCLmnKrllp3lroznmoTlpbbojLZcIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJib2lsZWRDaGluZXNlTWVkaWNpbmVcIjpbXCLnhbLov4fnmoTkuK3oja9cIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJ3ZWVkc1wiOltcIuadguiNiVwiICwyLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcInVuY29va2VkUmljZVwiOltcIueUn+exs1wiICwyLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcInN0YWxlQ2FuZHlcIjpbXCLov4fmnJ/nmoTns5bmnpxcIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJyZW1uYW50c09mV2VzdGVyblBhc3RyeVwiOltcIuilv+mkkOezleeCueaui+S9mVwiICwyLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcIm1vbGR5QnJlYWRcIjpbXCLlj5HpnInnmoTpnaLljIVcIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJmaXNoQm9uZSBcIjpbXCLpsbzpqqjlpLRcIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJwb3JrQ2hvcHNcIjpbXCLnjKrmjpLpqqhcIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJjaGlja2VuRW50cmFpbHNcIjpbXCLpuKHlhoXohI9cIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJ0ZWFMZWF2ZXNcIjpbXCLojLblj7bmuKNcIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJtZWxvbkZydWl0U2hlbGxcIjpbXCLmnpzlo7Pnk5znmq5cIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJjcmFic1wiOltcIuatu+ieg+ifuVwiICwyLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyAgICAgICAgICBcImV4cGlyZWRDaGluZXNlSGVyYmFsTWVkaWNpbmVcIjpbXCLov4fmnJ/nmoTkuK3ojYnoja9cIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJob3RQb3RCb3R0b21cIjpbXCLpurvovqPng6vplIXlupVcIiAsMixcIuWbvueJh+mTvuaOpVwiXSxcclxuLy8gICAgICAgICAgXCJ3YWxudXRTaGVsbFwiOltcIuaguOahg+Wjs1wiICwyLFwi5Zu+54mH6ZO+5o6lXCJdLFxyXG4vLyB9LFxyXG5cclxuLy8gb3RoZXJXYXN0ZSA6IHtcdFx0XHRcclxuLy8gICAgICAgICAgIFwicm9wZVwiOltcIue7s+WtkFwiLDQsXCJcIl0sXHJcbi8vICAgICAgICAgIFwicGF0Y2hNYXNrXCI6W1wi6LS054mH6Z2i6IacXCIsNCxcIlwiXSxcclxuLy8gICAgICAgICAgXCJkcmF3aW5nUGFwZXJcIjpbXCLnlLvnurhcIiw0LFwiXCJdLFxyXG4vLyAgICAgICAgICBcIndldFNvY2tzXCI6W1wi5rm/6KKc5a2QXCIsNCxcIlwiXSxcclxuLy8gICAgICAgICAgXCJpbnN1bGF0ZWRXYXRlckN1cFwiOltcIuS/nea4qeawtOadr1wiLDQsXCJcIl0sXHJcbi8vICAgICAgICAgIFwicGxhc3RpY0Jyb29tXCI6W1wi5aGR5paZ5omr5oqKXCIsNCxcIlwiXSxcclxuLy8gICAgICAgICAgXCJzcHJpbmdGZXN0aXZhbENvdXBsZXRzXCI6W1wi5pil6IGUXCIsNCxcIlwiXSxcclxuLy8gICAgICAgICAgXCJ3b29kZW5DYXNlXCI6W1wi5pyo566xXCIsNCxcIlwiXSxcclxuLy8gICAgICAgICAgXCJiaWdCb25lU3RpY2tcIjpbXCLlpKfpqqjlpLTmo5JcIiw0LFwiXCJdLFxyXG4vLyAgICAgICAgICBcIm9sZExpZ2h0ZXJcIjpbXCLml6fmiZPngavmnLpcIiw0LFwiXCJdLFxyXG4vLyAgICAgICAgICBcImZpcmV3b3Jrc0FuZEZpcmVjcmFja2Vyc1wiOltcIueDn+iKseeIhueruVwiLDQsXCJcIl0sXHJcbi8vICAgICAgICAgIFwiY2lnYXJldHRlXCI6W1wi54OfXCIsNCxcIlwiXSxcclxuLy8gICAgICAgICAgXCJ0b2lsZXRUaXNzdWVcIjpbXCLljpXmiYDljavnlJ/nurhcIiw0LFwiXCJdLFxyXG4vLyAgICAgICAgICBcImJhdHRlcnk1JjdcIjpbXCI15Y+3N+WPt+eUteaxoFwiLDQsXCJcIl0sXHJcbi8vICAgICAgICAgIFwid2FybUhhbmRiYWdcIjpbXCLlhYXnlLXmmpbmiYvoootcIiw0LFwiXCJdLFxyXG4vLyAgICAgICAgICBcIm1hc2tcIjpbXCLnlKjov4fnmoTlj6PnvalcIiw0LFwiXCJdLFxyXG4vLyAgICAgICAgICBcImZhc3Rmb29kXCI6W1wi5LiA5qyh5oCn5b+r6aSQXCIsNCxcIlwiXSxcclxuLy8gICAgICAgICAgXCJzbmFja0JhZ1wiOltcIuWwj+WQg+mbtumjn+iii1wiLDQsXCJcIl0sXHJcbi8vICAgICAgICAgIFwicnViYmVyXCI6W1wi5qmh55quXCIsNCxcIlwiXSxcclxuLy8gICAgICAgICAgXCJjaGV3aW5nR3VtXCI6W1wi5Zq86L+H55qE5Y+j6aaZ57OWXCIsNCxcIlwiXVxyXG4vLyB9LFxyXG4gICAgfSxcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjYy5sb2cocmVjeWNsYWJsZVdhc3RlWzBdKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19