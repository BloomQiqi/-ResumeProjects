
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FirstPage/carButtonCont.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a977epVXY9NgI+dTMIZEAg3', 'carButtonCont');
// Script/FirstPage/carButtonCont.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    garbage1: cc.Node,
    garbage2: cc.Node,
    garbage3: cc.Node,
    garbage4: cc.Node,
    button: cc.Node,
    button1: cc.Button,
    garbage11: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  changeScaleAndMove: function changeScaleAndMove() {
    this.schedule(function () {
      var garbage1_action2 = cc.speed(cc.spawn(cc.scaleTo(0.1, 3.3, 3), cc.moveTo(0.1, -133.61, 94.819)), 0.05);
      this.garbage1.runAction(garbage1_action2); // if(this.garbage1.x == 160){
      //     cc.log("1");
      //     cc.log(this.garbage1.x);
      //     cc.log(this.garbage1.y);
      // }

      var garbage4_action2 = cc.speed(cc.spawn(cc.scaleTo(0.1, 3.3, 3), cc.moveTo(0.1, 134.966, -262.91)), 0.05);
      this.garbage4.runAction(garbage4_action2); // cc.log("4");
      // cc.log(this.garbage4.x);
      // cc.log(this.garbage4.y);

      var garbage3_action2 = cc.speed(cc.spawn(cc.scaleTo(0.1, 3.3, 3), cc.moveTo(0.1, -133.61, -262.91)), 0.05);
      this.garbage3.runAction(garbage3_action2); // cc.log("3");
      // cc.log(this.garbage3.x);
      // cc.log(this.garbage3.y);

      var garbage2_action2 = cc.speed(cc.spawn(cc.scaleTo(0.1, 3.3, 3), cc.moveTo(0.1, 134.966, 94.819)), 0.05);
      this.garbage2.runAction(garbage2_action2);
    }, 1.5, 0, 0);
    this.schedule(function () {
      this.button1.interactable = true;
      this.garbage11.interactable = true;
    }, 3, 0, 0); // cc.log("2");
    // cc.log(this.garbage2.x);
    // cc.log(this.garbage2.y);
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGaXJzdFBhZ2VcXGNhckJ1dHRvbkNvbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYXJiYWdlMSIsIk5vZGUiLCJnYXJiYWdlMiIsImdhcmJhZ2UzIiwiZ2FyYmFnZTQiLCJidXR0b24iLCJidXR0b24xIiwiQnV0dG9uIiwiZ2FyYmFnZTExIiwiY2hhbmdlU2NhbGVBbmRNb3ZlIiwic2NoZWR1bGUiLCJnYXJiYWdlMV9hY3Rpb24yIiwic3BlZWQiLCJzcGF3biIsInNjYWxlVG8iLCJtb3ZlVG8iLCJydW5BY3Rpb24iLCJnYXJiYWdlNF9hY3Rpb24yIiwiZ2FyYmFnZTNfYWN0aW9uMiIsImdhcmJhZ2UyX2FjdGlvbjIiLCJpbnRlcmFjdGFibGUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBQ0osRUFBRSxDQUFDSyxJQURKO0FBRVJDLElBQUFBLFFBQVEsRUFBQ04sRUFBRSxDQUFDSyxJQUZKO0FBR1JFLElBQUFBLFFBQVEsRUFBQ1AsRUFBRSxDQUFDSyxJQUhKO0FBSVJHLElBQUFBLFFBQVEsRUFBQ1IsRUFBRSxDQUFDSyxJQUpKO0FBS1JJLElBQUFBLE1BQU0sRUFBQ1QsRUFBRSxDQUFDSyxJQUxGO0FBTVJLLElBQUFBLE9BQU8sRUFBQ1YsRUFBRSxDQUFDVyxNQU5IO0FBT1JDLElBQUFBLFNBQVMsRUFBQ1osRUFBRSxDQUFDVztBQVBMLEdBSFA7QUFhTDtBQUVBO0FBQ0FFLEVBQUFBLGtCQUFrQixFQUFDLDhCQUFVO0FBQ3pCLFNBQUtDLFFBQUwsQ0FBYyxZQUFVO0FBQ3BCLFVBQUlDLGdCQUFnQixHQUFHZixFQUFFLENBQUNnQixLQUFILENBQ25CaEIsRUFBRSxDQUFDaUIsS0FBSCxDQUNJakIsRUFBRSxDQUFDa0IsT0FBSCxDQUFXLEdBQVgsRUFBZSxHQUFmLEVBQW1CLENBQW5CLENBREosRUFFSWxCLEVBQUUsQ0FBQ21CLE1BQUgsQ0FBVSxHQUFWLEVBQWMsQ0FBQyxNQUFmLEVBQXVCLE1BQXZCLENBRkosQ0FEbUIsRUFLdEIsSUFMc0IsQ0FBdkI7QUFNQSxXQUFLZixRQUFMLENBQWNnQixTQUFkLENBQXdCTCxnQkFBeEIsRUFQb0IsQ0FRcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxVQUFJTSxnQkFBZ0IsR0FBR3JCLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FDbkJoQixFQUFFLENBQUNpQixLQUFILENBQ0lqQixFQUFFLENBQUNrQixPQUFILENBQVcsR0FBWCxFQUFlLEdBQWYsRUFBbUIsQ0FBbkIsQ0FESixFQUVJbEIsRUFBRSxDQUFDbUIsTUFBSCxDQUFVLEdBQVYsRUFBYyxPQUFkLEVBQXVCLENBQUMsTUFBeEIsQ0FGSixDQURtQixFQUt0QixJQUxzQixDQUF2QjtBQU1BLFdBQUtYLFFBQUwsQ0FBY1ksU0FBZCxDQUF3QkMsZ0JBQXhCLEVBdkJvQixDQXdCaEI7QUFDQTtBQUNBOztBQUtKLFVBQUlDLGdCQUFnQixHQUFHdEIsRUFBRSxDQUFDZ0IsS0FBSCxDQUNuQmhCLEVBQUUsQ0FBQ2lCLEtBQUgsQ0FDSWpCLEVBQUUsQ0FBQ2tCLE9BQUgsQ0FBVyxHQUFYLEVBQWUsR0FBZixFQUFtQixDQUFuQixDQURKLEVBRUlsQixFQUFFLENBQUNtQixNQUFILENBQVUsR0FBVixFQUFjLENBQUMsTUFBZixFQUF1QixDQUFDLE1BQXhCLENBRkosQ0FEbUIsRUFLdEIsSUFMc0IsQ0FBdkI7QUFNQSxXQUFLWixRQUFMLENBQWNhLFNBQWQsQ0FBd0JFLGdCQUF4QixFQXJDb0IsQ0FzQ2hCO0FBQ0E7QUFDQTs7QUFJSixVQUFJQyxnQkFBZ0IsR0FBR3ZCLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FDbkJoQixFQUFFLENBQUNpQixLQUFILENBQ0lqQixFQUFFLENBQUNrQixPQUFILENBQVcsR0FBWCxFQUFlLEdBQWYsRUFBbUIsQ0FBbkIsQ0FESixFQUVJbEIsRUFBRSxDQUFDbUIsTUFBSCxDQUFVLEdBQVYsRUFBYyxPQUFkLEVBQXVCLE1BQXZCLENBRkosQ0FEbUIsRUFLdEIsSUFMc0IsQ0FBdkI7QUFNQSxXQUFLYixRQUFMLENBQWNjLFNBQWQsQ0FBd0JHLGdCQUF4QjtBQUNILEtBbkRELEVBbURFLEdBbkRGLEVBbURNLENBbkROLEVBbURRLENBbkRSO0FBcURBLFNBQUtULFFBQUwsQ0FBYyxZQUFVO0FBQ3BCLFdBQUtKLE9BQUwsQ0FBYWMsWUFBYixHQUE0QixJQUE1QjtBQUNBLFdBQUtaLFNBQUwsQ0FBZVksWUFBZixHQUE4QixJQUE5QjtBQUNILEtBSEQsRUFHRSxDQUhGLEVBR0ksQ0FISixFQUdNLENBSE4sRUF0RHlCLENBMkRyQjtBQUNBO0FBQ0E7QUFDUCxHQTlFSTtBQWdGTEMsRUFBQUEsS0FoRkssbUJBZ0ZJLENBRVIsQ0FsRkksQ0FvRkw7O0FBcEZLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdhcmJhZ2UxOmNjLk5vZGUsXHJcbiAgICAgICAgZ2FyYmFnZTI6Y2MuTm9kZSxcclxuICAgICAgICBnYXJiYWdlMzpjYy5Ob2RlLFxyXG4gICAgICAgIGdhcmJhZ2U0OmNjLk5vZGUsXHJcbiAgICAgICAgYnV0dG9uOmNjLk5vZGUsXHJcbiAgICAgICAgYnV0dG9uMTpjYy5CdXR0b24sXHJcbiAgICAgICAgZ2FyYmFnZTExOmNjLkJ1dHRvbixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG4gICAgY2hhbmdlU2NhbGVBbmRNb3ZlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgZ2FyYmFnZTFfYWN0aW9uMiA9IGNjLnNwZWVkKFxyXG4gICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsMy4zLDMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsLTEzMy42MSwgOTQuODE5KSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLDAuMDUpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYmFnZTEucnVuQWN0aW9uKGdhcmJhZ2UxX2FjdGlvbjIpO1xyXG4gICAgICAgICAgICAvLyBpZih0aGlzLmdhcmJhZ2UxLnggPT0gMTYwKXtcclxuICAgICAgICAgICAgLy8gICAgIGNjLmxvZyhcIjFcIik7XHJcbiAgICAgICAgICAgIC8vICAgICBjYy5sb2codGhpcy5nYXJiYWdlMS54KTtcclxuICAgICAgICAgICAgLy8gICAgIGNjLmxvZyh0aGlzLmdhcmJhZ2UxLnkpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGdhcmJhZ2U0X2FjdGlvbjIgPSBjYy5zcGVlZChcclxuICAgICAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLDMuMywzKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4xLDEzNC45NjYsIC0yNjIuOTEpLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAsMC4wNSlcclxuICAgICAgICAgICAgdGhpcy5nYXJiYWdlNC5ydW5BY3Rpb24oZ2FyYmFnZTRfYWN0aW9uMik7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCI0XCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTQueCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5nYXJiYWdlNC55KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZ2FyYmFnZTNfYWN0aW9uMiA9IGNjLnNwZWVkKFxyXG4gICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsMy4zLDMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsLTEzMy42MSwgLTI2Mi45MSksXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICwwLjA1KVxyXG4gICAgICAgICAgICB0aGlzLmdhcmJhZ2UzLnJ1bkFjdGlvbihnYXJiYWdlM19hY3Rpb24yKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIjNcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5nYXJiYWdlMy54KTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmdhcmJhZ2UzLnkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBnYXJiYWdlMl9hY3Rpb24yID0gY2Muc3BlZWQoXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwzLjMsMyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwxMzQuOTY2LCA5NC44MTkpLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAsMC4wNSlcclxuICAgICAgICAgICAgdGhpcy5nYXJiYWdlMi5ydW5BY3Rpb24oZ2FyYmFnZTJfYWN0aW9uMik7XHJcbiAgICAgICAgfSwxLjUsMCwwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYmFnZTExLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSwzLDAsMClcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gY2MubG9nKFwiMlwiKTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZ2FyYmFnZTIueCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmdhcmJhZ2UyLnkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==