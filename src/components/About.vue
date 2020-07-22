<template>
  <div class="hello">
        <h1>About</h1>
        <p>This is where i talk about me</p>
  </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
  .hello {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .hello h1, .hello p {
    position: relative;
    top: 45%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
  }
</style>