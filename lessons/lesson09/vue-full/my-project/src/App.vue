<template>
  <div id="app">
    <Header></Header>

    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <img src="./assets/logo.png" width="150">
        </div>
      </div>
    </div>
    <transition name="dynamic" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
  name: 'App',
  components: {
    Header
  }}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";

  .dynamic-enter-active {
    animation: bounce-in 1.5s;
  }
  .dynamic-leave-active {
    animation: bounce-in 1.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50%{
      transform: scale(1.2);
    }
    100%{
      transform: scale(1);
    }
  }
</style>
