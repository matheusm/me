<template>
  <div class="p-10 h-full">
    <h1>Projects</h1>

    <div class="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCard v-for="item in data" :project="item" />
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("projects-all", async () => {
  const it = await queryContent("/projects").find()
  return it[0].body
});

</script>

<style>

</style>