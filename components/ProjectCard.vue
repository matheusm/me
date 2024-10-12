<template>
  <a :href="props.project.link" target="_blank" class="relative overflow-hidden rounded border border-opacity-10 border-zinc-900 dark:border-zinc-100 dark:border-opacity-20 dark:hover:border-opacity-40 hover:cursor-pointer transition-all ">
    <NuxtImg :src="props.project.image" class="rounded" />

    <div class="title px-4 absolute bottom-0 h-10">
      <strong class="absolute bottom-3">{{props.project.title}}</strong>
    </div>
  </a>
</template>

<script setup>
const props = defineProps([
  'project',
])
</script>

<style>
.title {
  width: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
}
</style>