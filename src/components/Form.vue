<template>
  <form @submit.prevent="handleSubmit">
    <input v-if="step === 1" v-model="text" type="text" placeholder="enter name" />
    <input v-if="step === 2" v-model="password" type="password" placeholder="enter password" />
    <button type="submit" :disabled="isBtnDisabled">{{step === 1 ? 'next' : 'submit'}}</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      step: 1,
      text: ''
    };
  },
  computed: {
    isBtnDisabled() {
      if (this.step === 1 && !this.text.length) {
        return true;
      }
      if (this.step === 2 && !this.password.length) {
        return true;
      }

      return false;
    }
  },
  methods: {
    handleSubmit() {
      if (this.step === 1) {
        this.step += 1;
      } else {
        this.$emit('submit', this.text, this.password);
      }
    }
  }
};
</script>

<style>
</style>