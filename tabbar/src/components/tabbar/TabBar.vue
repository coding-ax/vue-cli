<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../../assets/css/base.css";
#tab-bar {
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}

</style>