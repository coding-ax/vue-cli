<template>
  <div>
      <h2>我是profile组件</h2>
      <p>{{$route.query.name}}</p>
      <p>{{$route.query.age}}</p>
  </div>
</template>

<script>
export default {
  name:"Profile",
// created() {
//     console.log('created')
//      document.title="档案";
//   },
}
</script>

<style>

</style>