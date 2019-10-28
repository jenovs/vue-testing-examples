<template>
  <div>
    <div>Page</div>
    <div data-testid="1">{{a}}</div>
    <div data-testid="2">{{b}}</div>
  </div>
</template>

<script>
export default {
  created() {
    const { a, b } = this.$route.query;
    this.a = a;
    this.b = b;

    this.$router.replace({ query: {} });
  },
  data() {
    return {
      a: null,
      b: null
    };
  }
};
</script>

<style>
</style>