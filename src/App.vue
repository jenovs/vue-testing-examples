<template>
  <div id="app">
    <HelloWorld />
    <Input />
    <Form @submit="handleSubmit" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Input from './components/Input.vue';
import Form from './components/Form.vue';

export default {
  components: {
    HelloWorld,
    Input,
    Form
  },
  methods: {
    handleSubmit(name, password) {
      console.log(name, password);
    }
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
