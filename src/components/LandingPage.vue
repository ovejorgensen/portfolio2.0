<template>
  <div class="hello">
    <h1>Ove Jørgensen</h1>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style scoped>
.hello {
  position: absolute;
  width: 100%;
  height: 100%;
}
.hello h1 {
  position: relative;
  top: 45%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
}
</style>