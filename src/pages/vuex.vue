<template>
    <div>
      <div>
        vuex页面
      </div>
      <div>
        <span>state.count: {{$store.state.count}}</span>
        <span>computed count: {{count}}</span>
        <el-button @click="$store.commit('add',6)">加6</el-button>
        <el-button @click="reduce">减1</el-button>
      </div>
      <p>
        <button @click="addActions">Actions,add</button>
        <button @click="reduceActions">Actions,reduce</button>
      </p>
    </div>
</template>

<script>
    /**
     *Created by 镜子 on 2018/9/5
     */
    import store from '@/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
      data() {
          return {}
      },
      store,
//    components:{},
//    created(){},
      methods: {
        ...mapActions(['addActions','reduceActions']),
        ...mapMutations(['add','reduce'])
      },
      computed:{
        ...mapState(["count"]),
        // ...mapGetters(["count"]),

      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
