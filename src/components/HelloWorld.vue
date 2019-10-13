<template>
  <div class="hello">
    <p>Times clicked: {{clicks}}</p>
    <button @click="clicks += 1">Click Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicks: 0
    };
  }
};
</script>

<style scoped>
.hello {
  background-color: #ddd;
  color: teal;
}
</style>
