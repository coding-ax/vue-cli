<template>
  <div>
      <h2>我是HelloVueX</h2>
      <h2>{{$store.state.count}}</h2>
      <div class="student">
        <div class="student-item" v-for="item in studentss" :key="item.id">
          <h3>{{item.id}}</h3>
          <h4>{{item.name}}</h4>
          <h5>{{item.age}}</h5>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
   
    }
  },
  computed: {
     studentss(){
       return this.$store.getters.stuMore20;
     }
  },
  methods: {
    
  },
  created () {
    console.log(this.studentss);
  }
  }
</script>

<style>

</style>