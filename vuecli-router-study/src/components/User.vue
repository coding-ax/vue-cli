<template>
    <div>
        <h2>我是用户界面</h2>
        <p>我是用户的界面嘿嘿呵呵</p>
        <h2>{{userId}}</h2>
    </div>
</template>
<script>
export default {
    name:'User',
    computed: {
        userId(){
            //router总体路由对象,route当前活跃路由 $route.params 可以拿到其数据
            return this.$route.params.userId
        }
    },
//     created() {
//     console.log('created');
//     document.title="用户";
//   },
}
</script>
<style scoped>
    
</style>
