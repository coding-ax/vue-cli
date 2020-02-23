<template>
  <div class="class">
       <slot name="title"></slot>
    <h1>组件自带的h1</h1>
        <slot name="p"></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h2{
  background-color: lightgreen;
}

</style>