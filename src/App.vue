<template>
  <div id="app">
    <HelloWorld />
    <Input />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Input from './components/Input.vue';

export default {
  components: {
    HelloWorld,
    Input
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
