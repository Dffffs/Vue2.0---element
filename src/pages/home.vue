<template>
    <div id="test">
      <el-container id="cons">
        <el-aside width="200px">
          <el-menu class="left" :router="true" default-active="/axios"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/index">
              <i class="el-icon-menu"></i>
              <span slot="title">home</span>
            </el-menu-item>
            <el-menu-item index="/axios">
              <i class="el-icon-star-on"></i>
              <span slot="title">axios</span>
            </el-menu-item>
            <el-menu-item index="/vuex">
              <i class="el-icon-star-on"></i>
              <span slot="title">vuex</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </div>
</template>

<script>
    /**
     *Created by 镜子 on 2018/9/4
     */
    export default {
      data() {
          return {

          }
      },
//    components:{},
//    created(){},
      methods: {

      },
//    computed:{}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  #test{
    height: 100%;
    .left{
      height: calc(100% - 50px);
      padding-top: 50px;
    }
    #cons{
      height: 100%;

      aside{

      }
    }
  }
</style>
