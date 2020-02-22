<template>
    <footer>
        <p>{{Copyright}}</p>
    </footer>
    
</template>
<script>
export default {
    data() {
        return {
         Copyright:"Copyright 2020 Vue Demo"
        }
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