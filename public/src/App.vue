<template>
  <div>
    <nav class="container">    
      <router-link to="/">
        <h3>
         Home
        </h3>
      </router-link>
      <router-link to="/about">
        <h3>
        About
        </h3>
      </router-link>
      <router-link to="/contact">
        <h3>
        Contact
        </h3>
      </router-link>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<style scoped>
  body {
    margin: 0rem;
  }
  
  .container {
    display: flex;
    
    a {
      flex: 1;
      padding: 10px;
    }
  }
</style>
