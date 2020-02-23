<template>
    <div class="header"  @click="changeTitle">
           <h1 class="title">{{title}}</h1>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            require:true
        }
    },
    data() {
      return{

      }
    },
    methods: {
        changeTitle(){
            this.$emit("changeTitle","new title");
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