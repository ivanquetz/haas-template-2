<template>
  <div class="container">
    <h1 class="box center">
      Hello world {{ name }}
    </h1>
    <h2>
     hello worldss {{ name }}
  </h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: 'oleg'
    }
  }
}
</script>

<style scoped lang="css">
  .container {
    border: 2px solid lightblue;
    display: grid;
  }
  
</style>
