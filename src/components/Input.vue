<template>
  <div>
    <label>
      Label text
      <input type="text" v-model="text" placeholder="enter text" />
    </label>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  }
};
</script>

<style>
</style>