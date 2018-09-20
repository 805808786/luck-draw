<template>
  <div class="container">
    <a @click="luckyDrawShow=true" class="begin-btn">开始抽奖</a>
    <transition name="bounce">
      <div v-show="luckyDrawShow" id="luckyDraw" class="luckyDraw">
        <p class="title">抽奖活动<a @click="luckyDrawShow=false">关闭</a></p>
        <div id="draw" class="draw">
          <transition name="out-in">
            <div :key="winner" v-cloak>{{winner}}</div>
          </transition>
        </div>
        <div class="btn-box">
          <a @click="start">开始</a>
          <a @click="end">结束</a>
        </div>
        <div class="speed">
          <span>抽奖速度：</span>
          快
          <div class="cover">
            <input type="range" v-model="times" min="100" max="3000"/>
            <em :style="{left: times/30 + '%'}">{{times/1000}}s</em>
          </div>
          慢
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LuckDraw',
  data () {
    return {
      luckyDrawShow:false,
      winner:"",//获奖者
      timer:null,//定时器
      times:500,//抽奖速度
      len:null,//抽奖人数
      wIndex:null,//抽奖者位置
      draw:[]//抽奖者
    }
  },
  watch: {
    times: function(){//抽奖速度被调整后
      if(this.timer){//如果正在抽奖中，则需要重启定时器，不然速度无法改变
        clearInterval(this.timer);
        this.timer=setInterval(function () {
          this.getWinner();
        }.bind(this),this.times)
      }
    },
    luckyDrawShow: function () {
      if(!this.isLuckyDrawShow){//弹窗关闭时，清除定时器与中奖者
        this.end();
        this.winner="";
      }
    }
  },
  methods:{
    start: function () {
      this.len=this.len||this.draw.length;
      if(!this.timer){
        this.getWinner();
        this.timer=setInterval(function () {
          this.getWinner();
        }.bind(this),this.times)
      }
    },
    getWinner: function () {
      this.wIndex=this.GetRandom(0,this.len-1);
      this.winner=this.draw[this.wIndex].name+" "+this.draw[this.wIndex].tel;
    },
    end:function(){
      clearInterval(this.timer);
      this.timer=null;
    },
    GetRandom: function (Min, Max) {
      return Min+(Math.floor(Math.random() * (Max-Min)));
    }
  },
  created () {//创建实例之后获取
    //此次应该是获取后台数据
    this.draw = [{"name":"罗俊","tel":"182****3297"},{"name":"卢鑫","tel":"139****7900"},{"name":"邹欢军","tel":"135****3652"},{"name":"韩新利","tel":"186****4415"},{"name":"郁梦梦","tel":"134****1086"},{"name":"吴永青","tel":"151****2568"},{"name":"周超","tel":"134****9281"},{"name":"张俊荣","tel":"137****4556"},{"name":"郑文明","tel":"134****1047"},{"name":"刘昕茹","tel":"135****1156"},{"name":"卢鑫","tel":"139****7900"},{"name":"胡祖慧","tel":"138****9800"},{"name":"郁梦梦","tel":"134****1086"},{"name":"陈杰","tel":"130****7529"},{"name":"宋向东","tel":"182****8008"},{"name":"王冬霞","tel":"151****9806"},{"name":"郑荣贵","tel":"186****7399"},{"name":"陈红丹","tel":"135****4530"},{"name":"胡俊赟","tel":"150****1391"},{"name":"唐金娟","tel":"159****6414"},{"name":"王梓涵","tel":"139****1758"},{"name":"王丽娜","tel":"137****9023"},{"name":"夏美菊","tel":"132****0312"},{"name":"周江权","tel":"136****8163"},{"name":"胡江浩","tel":"158****5799"},{"name":"叶金寿","tel":"133****1980"},{"name":"胡丽丽","tel":"136****6419"},{"name":"黄香","tel":"139****4141"},{"name":"王文君","tel":"159****8099"},{"name":"李丽","tel":"187****3821"},{"name":"徐迎","tel":"158****2203"},{"name":"裘刘","tel":"139****3035"},{"name":"熊萍","tel":"159****5297"},{"name":"俞红庆","tel":"135****9533"},{"name":"谢静","tel":"156****8239"},{"name":"华平","tel":"137****4888"},{"name":"徐俊瑶","tel":"152****6220"},{"name":"李贵虹","tel":"151****4711"},{"name":"方利勇","tel":"138****0609"},{"name":"李婷","tel":"137****7074"},{"name":"王文龙","tel":"135****1946"},{"name":"祝庆娟","tel":"132****3820"},{"name":"马爱育","tel":"180****1002"},{"name":"陈鸿昌","tel":"137****1882"},{"name":"盛丽娟","tel":"187****5227"},{"name":"陈智燕","tel":"137****8523"},{"name":"张丽萍","tel":"131****1251"},{"name":"柴倩","tel":"151****6990"},{"name":"徐文豪","tel":"173****8171"},{"name":"王强","tel":"135067853"},{"name":"BIGBIGWANG","tel":"156****1919"},{"name":"方金英","tel":"159****7586"},{"name":"王冉英","tel":"133****3568"},{"name":"赵群","tel":"135****9847"},{"name":"周江权","tel":"136****8163"},{"name":"浦寅姗","tel":"158****3323"},{"name":"王冉英","tel":"133****3568"},{"name":"鲁海芬","tel":"159****8195"},{"name":"叶青","tel":"137****7755"},{"name":"赵珍","tel":"130****9181"},{"name":"李巍利","tel":"137****8030"},{"name":"余丹","tel":"187****4544"},{"name":"沈德军","tel":"189****9733"},{"name":"苏培勇","tel":"186****6897"},{"name":"楼萍萍","tel":"159****9912"},{"name":"李成钢","tel":"181****8288"},{"name":"钱超南","tel":"182****5050"},{"name":"董虹霞","tel":"150****1358"},{"name":"陆永","tel":"131****0716"},{"name":"庄建红","tel":"138****9118"}]
  }
}
</script>

<style scoped>
.begin-btn {
  position: fixed;
  bottom: 50px;
  left: 50%;
  width: 240px;
  margin-left: -120px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  color: #fff;
  background-color: #e4393c;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.8);
  text-align: center;
}
.begin-btn:hover {
  color: #fff;
}
.luckyDraw {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 428px;
  margin-top: -214px;
  margin-left: -300px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  z-index: 9999;
}
.luckyDraw .title {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  background: #eff3f5;
  background: -webkit-linear-gradient(left, #f6ad36, #cf5a5d);
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #f6ad36, #cf5a5d);
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #f6ad36, #cf5a5d);
  /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #f6ad36, #cf5a5d);
  /* 标准的语法 */
  position: relative;
}
.luckyDraw .title a {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 50px;
  height: 50px;
  font-size: 12px;
  color: #fff;
}
.luckyDraw .draw {
  position: relative;
  height: 200px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #e4393c;
}
.luckyDraw .draw > div{
  position: absolute;
  top: 30px;
  bottom: 30px;
  line-height: 140px;
  width: 100%;
}
.luckyDraw .speed{
  width: 100%;
  padding-top: 40px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
  text-align: center;
}
.luckyDraw .speed span{
  font-size: 16px;
  font-weight: bold;
}
.luckyDraw .speed .cover{
  display: inline-block;
  width: 240px;
  margin: 0 10px;
  vertical-align: top;
  position: relative;
}
.luckyDraw .speed em{
  position: absolute;
  bottom: -20px;
  width: 50px;
  margin-left: -25px;
}
.luckyDraw .speed input{
  width: 100%;
}
.luckyDraw .btn-box {
  text-align: center;
}
.luckyDraw .btn-box a {
  display: inline-block;
  width: 180px;
  height: 40px;
  margin: 0 20px;
  font-size: 16px;
  font-weight: bold;
  line-height: 40px;
  border-radius: 3px;
  color: #fff;
  background-color: #e4393c;
}

.out-in-enter{
  -webkit-transform: translateY(30px);
  -moz-transform: translateY(30px);
  -ms-transform: translateY(30px);
  -o-transform: translateY(30px);
  transform: translateY(30px);
  opacity: 0;
}
.out-in-leave-to{
  -webkit-transform: translateY(-30px);
  -moz-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  -o-transform: translateY(-30px);
  transform: translateY(-30px);
  opacity: 0;
}
.out-in-enter-active,.out-in-leave-active{
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -ms-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -ms-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}
.bounce-leave-to{
  opacity: 0;
  height: 0;
}
@keyframes bounce-in {
  0% {
    transform: translateX(9%);
  }
  16.6% {
    transform: translateX(-9%);
  }
  33.33% {
    transform: translateX(6%);
  }
  50% {
    transform: translateX(-6%);
  }
  66.6% {
    transform: translateX(3%);
  }
  83.33% {
    transform: translateX(-3%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
