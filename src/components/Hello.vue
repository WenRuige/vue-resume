<template>
  <div class="hello">
    Fuck Vue

    <!--  v-html 渲染-->
   <div v-html="message">
    </div>


    <button v-on:click="test">开始</button>


  </div>
</template>

<script>
  export default {
    name: 'hello',
    created(){

    },
    data () {
      return {
        //文本中实际输出内容
        message: '',
        content: `
          今天天气很好吗,
          今天天气很好吗,
          今天天气很好吗,
          今天天气很好吗,
          今天天气很好吗,
          今天天气很好吗,
          今天天气很好吗,
          今天天气很好吗,
          今天天气很好吗
          `,
        //计数器
        counter: 0,
        //数组总长度
        totalLength: 0,
        //分词后的数组
        splitArray: {},
        //setIntval的id
        id: 0

      }
    }, methods: {
      test: function () {
        //数组
        this.$data.splitArray = this.$data.content.split(",");
        //数组长度
        this.$data.totalLength = this.$data.splitArray.length;
        //每个setInterval都会有一个Id
        this.$data.id = setInterval(this.loop, 1000)
      }, loop: function () {
        //如果当前元素大于数组的总元素的话,那么直接提示数组过长
        if (this.$data.counter >= this.$data.totalLength) {
          //清除setInterval
          clearInterval(this.$data.id);
          //return null
          return;
        }
        //console.log(this.$data.splitArray);

        //清空左右空格,需要check数组内元素是否为空
        this.$data.message += this.$data.splitArray[this.$data.counter] != "" ? this.$data.splitArray[this.$data.counter].trim() : '';
        this.$data.message += "<br>"

        //计数器加一
        this.$data.counter += 1;


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
