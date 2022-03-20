<template>
  <div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 800px) {
  .box {
    width: calc(50% - 20px) !important;
  }
}
@media (max-width: 450px) {
  .box {
    width: calc(100% - 20px) !important;
  }
}
.container {
  background: #1b1d23;
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
}
.box {
  background: #c4c4c4;
  height: 40px;
  margin: 10px 10px 0 10px;
  width: calc(33.333333% - 20px);
}
</style>