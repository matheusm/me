<template>
  <div class="p-10 h-full">
    <h1>About me</h1>

    <p>Front-end developer with 4 years of experience in high level applications and delivering beautiful code.</p>

    <br>

    <p>Started in Computer Science college and loving the frontend area since beginning, demonstrating expertise in implementing and maintaining complex systems. Skilled in ReactJS, VueJS, fostering collaboration, agile methodologies. Strong communication and focused on project success. Committed to continuous improvement and delivering complex, large scale solutions.</p>

    <br>

    <h2 class="md:text-2xl text-xl mb-3">What I'm Doing</h2>

    <div class="grid grid-cols-2 gap-x-4 gap-y-4">
      <Card v-for="card of cards" class="flex gap-4">
        <UIcon :name="card.icon" class="text-primary max-h-8 max-w-8 w-full h-full" />
        <div class="text-neutral-300">
          <h3 class="text-lg font-semibold">{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup>
const cards = ref([
  { icon: 'i-heroicons-computer-desktop', title: "Web Development", description: "I'm a and delivering beautiful code." },
  { icon: 'i-heroicons-rocket-launch', title: "Mentorship", description: "I'm skilled in ReactJS, fostering collaboration, agile methodologies." },
  { icon: 'i-heroicons-camera', title: "Photography", description: "I'm skilled in VueJS, fostering collaboration, agile methodologies." },
  { icon: 'i-heroicons-academic-cap', title: "Studing", description: "Strong communication and focused on project success." },
])
</script>

<style>
h1 {
  @apply md:text-3xl text-2xl;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 20px
}

h1::after {
  @apply bg-violet-500;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  border-radius: 3px;
}


@media screen and (min-width: 580px) {
  h1::after {
    width: 40px;
    height: 5px;
  }
}
</style>