<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"><img src="./../assets/logo.png" width="50"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/feedback">Feedback</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  .navbar {
    background-color: #333333;
    text-align: center;
  }
  .nav-item {
    display: inline-block;
    padding: 15px;

    a {
      text-decoration: none;
      color: #cccccc;
      position: relative;

      &:hover{
        color: #ffffff;
      }
    }
  }
  .brand{
    padding: 1rem;
  }
  .brand img {
    display: inline-block;
    width: 50px;
  }
</style>
