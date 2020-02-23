<template>
    <footer>
        <p>{{Copyright}}</p>
    </footer>
    
</template>
<script>
export default {
    props:{
        Copyright:{
            type:String,
            require:true
        }
    },
    data() {
        return{

        }
    },
    methods: {
        
    },
}
</script>
<style scoped>
p{
    color: aquamarine;
    padding: 10px;
    text-align: center;
    background-color:red
}
</style>