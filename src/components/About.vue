<template>
  <div class="about">
    <h1>About</h1>
    <p>
      Hi, my name is Ove Jørgensen. I am currently enrolled in a Master's degree
      at the University of Stavanger where I'm studying Data Science. I am also
      working part time as a software engineer at a small company.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  text-align: center;
}
.about h1 {
  margin: 100px 0 50px 0;
}
.about p {
  position: absolute;
  width: 50%;
  left: 25%;
}
</style>
