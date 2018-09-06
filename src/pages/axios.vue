<template>
    <div>
      <div>
        <el-input placeholder="输入内容查询" v-model="inputs" @input="changeval" clearable @change="searchSomething"></el-input>
        <el-button type="primary">查询</el-button>
      </div>
      <div>
        <el-card class="box-card" v-loading="loading" :hidden="hidden">
          <div v-for="item in value" :key="item.word" class="text" @click="boxTextClick">
            {{item.word}}
          </div>
        </el-card>
      </div>
    </div>
</template>

<script>
    /**
     *Created by 镜子 on 2018/9/5
     */
    window.search =  function (e) {
      return e.result;
    }
    import axios from 'axios'
    export default {
      data() {
          return {
            inputs:'',
            value:'',
            loading:false,
            hidden:true
          }
      },
//    components:{},
      created(){

      },
      methods: {
        changeval(e){
          if (e != ''){
            this.hidden = false
          }else{
            this.hidden = true;
          }
          let _this = this;
          this.loading = true;
          axios.get('https://sug.so.360.cn/suggest',{
            params:{
              callback:'search',
              encodein:'utf-8',
              encodeout:'utf-8',
              format:'json',
              fields:'word',
              word:e
            }
          }).then(function (res) {
             _this.value = eval(res.data);
            _this.loading = false
          })
        },
        boxTextClick(e){
          this.inputs = e.target.innerText;
          this.hidden = true;
        },
        searchSomething(e){
          console.log(e,'search')
        }
      },
      mounted(){
      }
//    computed:{}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .box-card{
    position: absolute;
    width: calc(100% - 240px);
    padding: 0;
    .text{
      padding: 5px 0;
      cursor: pointer;
    }
    .text:hover{
      background: #F2F6FC;
      color:#409EFF;
      padding: 10px 0;

    }
  }

</style>
