<template>
  <div>

    <div class="div-inline" id="title">
      <a href="https://github.com/WenRuige/vue-resume"><img :src="pic_url"></a>


      <code>Follow Me！</code>



    </div>
    <div class="div-inline" id="left">

     



      <!--  v-html 渲染-->
      <!--<div id="inner_content" v-html="message">-->
      <!--</div>-->

      <!--&lt;!&ndash;<button v-on:click="test">开始</button>&ndash;&gt;-->
      <!--动态追加style，vue-js实现-->


      <!--<button v-on:click="show">-->
        <!--开始-->


      <!--</button>-->

    </div>


    <div class="div-inline" id="right">

      <div id="right-content" v-bind:style="right_content">
        <!--第一部分-->
        <div id="first_part" v-bind:style="first_part">
          一枚帅逼
          <br>
          哈尔滨理工大学|软件工程系
          <br>
          邮箱:xxx@gmail.com


 <!--style="border:0;background-color:#648fc4;height:1px;"-->
          <hr id="hr_split" v-bind:style="hr_split">
        </div>
        <!--第二部分-->
        <div id="second_part" v-bind:style="second_part">
          <span id="title_one" v-bind:style="title_one">工作经验:</span>

          <li>
            负责公司CRM项目的搭建,前端采用开源模板AdminLTE,后端使用YAF+FluentPdo进行开发.主要实现了对用户,保单等大量数据的查询.通过定时任务调取微信/支付宝api,实现财务自动退款,编写脚本实现跟单数据来源以及外呼业务。
          </li>
          <li>
            负责公司CMS项目(Phalcon)的理赔模块的开发维护,主要实现了与第三方TPA数据对接,涉及到用户端上传理赔信息/图片,并对图片进行压缩,编写定时脚本将数据传输至SFTP服务器,自动发送邮件告知第三方公司,数据回传后,可以通过微信打款,并发送微信模板消息告知用户,前端采用React.js编写,使用webpack打包工具对代码进行打包编译。
          </li>
          <li>与前端交互基于fis3进行落地页模块化,省去了代码的编写,发布落地页直接通过模板创建即可。</li>
          <li>搭建开源日志分析工具Elasticsearch+Logstash+Kibana对多台机器上的日志进行收集。</li>
          <li>负责公司CMS(晶算师)项目搭建开发,实现了对佣金配置,配置Banner图,账户查询,导出,系统通知展示等,并使用chart.js绘制曲线图标等。</li>
          <li>与前端开发微信签到,排行榜活动,38妇女节等活动(Laravel),使用Redis作为缓存层,编写异步队列将数据存入Mysql。</li>
          <li>负责企业版晶算师开发编写,与Android,Ios,Wap端进行交互,实现了普通版和企业版功能区分等。</li>
          <li>负责H5对接设计以及开发,与第三方进行api对接,api接口采用AES加密,实现了对方在我方购买产品后数据实现实时回传至对方平台进行展示。</li>
          <hr v-bind:style="hr_split">
        </div>
        <!--第三部分-->
        <div id="third_part" v-bind:style="third_part">
          <span id="title_two" v-bind:style="title_two">个人技能:</span>
          <li>熟练使用php进行开发,熟悉创建的设计模式</li>
          <li>熟练使用git版本控制工具</li>
          <li>熟练使用Linux</li>
          <li>熟悉使用Yaf/Laravel/Lumen框架对项目的编写</li>
          <li>熟悉HTTP协议</li>
          <li>熟悉使用webpack/npm/vue全家桶的使用</li>
          <li>熟练使用Redis缓存</li>
          <li>熟练使用Jquery/bootstrap框架</li>
          <li>熟练使用Nginx</li>
          <li>熟练使用Vagrant/vbox/valet/docker等开发环境</li>
          <li>了解React.js/es6的使用</li>
          <li>熟练使用Mysql以及查询优化</li>
          <li>具有一定的网络安全意识,良好的编码风格</li>
          <hr v-bind:style="hr_split">
        </div>

        <div id="fourth_part" v-bind:style="third_part">
          <span id="title_three" v-bind:style="title_two">其他开发经验:</span>
          <li>暂无</li>

          <!--<hr  v-bind:style="hr_split">-->
        </div>
      </div>


      <!--<div v-bind:style="styleObject">-->
      <!--大声道啊实打实大撒多-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  export default {
    created(){
    },
    data () {
      return {
        //文本中实际输出内容

        pic_url:'./static/github.png',
        message: '',
        content: `
          动态进行渲染,
          `,
        //计数器
        leftCounter: 0,
        //数组总长度
        leftTotalLength: 0,
        //分词后的数组
        leftSplitArray: {},
        //左侧setIntval的id
        leftId: 0,

        //右侧
        //右侧计数器
        rightCounter: 0,
        //右侧未分词的数组
        rightSplitArray: {},
        rightId: 0,
        rightTotalLength: 0,


        //////////////////////以下皆为style初始化语句
        right_content: {},
        first_part: {},
        title_one: {},
        title_two: {},
        title_three: {},
        second_part: {},
        third_part: {},
        fourth_part: {},
        hr_split: {},
        show:true

      }
    }, methods: {
      test: function () {
        //数组
        this.$data.leftSplitArray = this.$data.content.split(",");
        //数组长度
        this.$data.leftTotalLength = this.$data.leftSplitArray.length;
        //每个setInterval都会有一个Id
        this.$data.leftId = setInterval(this.loop, 500)
      }, loop: function () {
        //如果当前元素大于数组的总元素的话,那么直接提示数组过长
        if (this.$data.leftCounter >= this.$data.leftTotalLength) {
          //清除setInterval
          clearInterval(this.$data.leftId);
          //return null
          return;
        }
        //console.log(this.$data.splitArray);

        //清空左右空格,需要check数组内元素是否为空
        this.$data.message += this.$data.leftSplitArray[this.$data.leftCounter] != "" ? "<span>" + this.$data.leftSplitArray[this.$data.leftCounter].trim() + "</span>" : '';
        this.$data.message += "<br>";

        //计数器加一
        this.$data.leftCounter += 1;


      }, showPage: function () {

        var dataObj = []; //声明一个数组
        //右侧整个布局数组
        dataObj[0] = "right_content/margin/20px";
        dataObj[1] = "first_part/font-size/10px";
        dataObj[2] = "title_one/font-weight/bold";
        dataObj[3] = "title_two/font-weight/bold";
        dataObj[4] = "second_part/font-size/10px";
        dataObj[5] = "third_part/font-size/10px";
        dataObj[6] = "hr_split/background-color/#3b71b4";
        dataObj[7] = "hr_split/border/0px";
        dataObj[8] = "hr_split/height/1px";
        dataObj[9] = "fourth_part/font-size/10px";
        dataObj[10] = "title_three/font-weight/bold";


        //获取右侧数组长度
        this.$data.rightTotalLength = dataObj.length;
        this.$data.rightSplitArray = dataObj;
        //声明数组,可实现
        //定时更新style数据
        this.$data.rightId = setInterval(this.appendStyle, 1000)

        //随机append数组内的颜色
      }, appendStyle: function () {

        var i = 0;
        for (i; i < this.$data.rightTotalLength; i++) {
          if (i == this.$data.rightCounter) {
            //拆分js
            var result = this.$data.rightSplitArray[this.$data.rightCounter].split('/');
            var obj_temp = "this.$data." + result[0];
            this.$set(eval(obj_temp), result[1], result[2]);
            this.$data.rightCounter++;
            break;
          }
        }

      }
      , randColor: function () {
        var color = ["black", "red", "green", "gray"];
        var randomNum = Math.random() * color.length;
        randomNum = parseInt(randomNum, 10)
      }
    },
//    可以使用mounted进行挂载
    mounted: function () {
      this.showPage()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .div-inline {
    display: inline;
    float: left;
    /*border:1px solid #F00*/
  }

  #title {
    margin-left: 100px;
    width: 10%;
    height: 400px;
    /*box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);*/
  }

  #left {
    width: 20%;
    height: 400px;
    margin-left: 100px;
    /*box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);*/
  }

  #inner_content {
    text-align: center;
    height: 10px;
    line-height: 10px;
  }

  #right {
    width: 35%;
    height: 750px;
    margin-left: 100px;
    color: black;
    box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
  }



  /*.bounce-enter-active {*/
    /*animation: bounce-in .5s;*/
  /*}*/
  /*.bounce-leave-active {*/
    /*animation: bounce-out .5s;*/
  /*}*/
  /*@keyframes bounce-in {*/
    /*0% {*/
      /*transform: scale(0);*/
    /*}*/
    /*50% {*/
      /*transform: scale(1.5);*/
    /*}*/
    /*100% {*/
      /*transform: scale(1);*/
    /*}*/
  /*}*/
  /*@keyframes bounce-out {*/
    /*0% {*/
      /*transform: scale(1);*/
    /*}*/
    /*50% {*/
      /*transform: scale(1.5);*/
    /*}*/
    /*100% {*/
      /*transform: scale(0);*/
    /*}*/
  /*}*/

  /*#hr_split{*/
  /*background-color: red;*/
  /*border: 0px;*/
  /*height: 1px;*/
  /*}*/
  /*#right-content {*/
  /*margin: 20px;*/
  /*}*/

  /*第一部分css*/
  /*#first_part {*/
  /*font-size: 10px;*/
  /*}*/

  /*#second_part {*/
  /*font-size: 10px;*/
  /*}*/

  /*#third_part {*/
  /*font-size: 10px;*/
  /*}*/

  /*#title_one {*/
  /*font-weight: bold*/
  /*}*/

  /*#title_two {*/
  /*font-weight: bold*/
  /*}*/


</style>
