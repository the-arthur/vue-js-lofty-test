<template>
  <SignBar />
  <BoxContainer />
  <PromiseAsync />
</template>

<script>
import SignBar from "./components/SignBar.vue";
import BoxContainer from "./components/BoxContainer.vue";
import PromiseAsync from "./components/PromiseAsync.vue";

export default {
  name: "App",
  components: {
    SignBar,
    BoxContainer,
    PromiseAsync,
  },
};
</script>

<style>
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: #222831;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
