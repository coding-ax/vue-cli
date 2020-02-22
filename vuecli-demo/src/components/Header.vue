<template>
    <div class="header">
           <h1 class="title">{{title}}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
               title:"一个标题"
        }
    },
}
</script>
<style scoped>
.header{
    background-color: #157e4d;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>