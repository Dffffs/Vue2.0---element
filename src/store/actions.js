export default{
  addActions(context){
    context.commit('add',66)
  },
  reduceActions({commit}){
    commit('reduce')
  }
};
