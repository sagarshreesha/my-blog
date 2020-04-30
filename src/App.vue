<template>
  <div class="container" id="app">
    <Header/>
    <Posts style="padding: 20px;" />
  </div>
</template>

<script>
import Header from './components/Header';
import Posts from './components/Posts';

export default {
  name: 'app',
  components: {
    Header,
    Posts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(17, 11, 9);
  margin-top: 60px;
}
</style>
