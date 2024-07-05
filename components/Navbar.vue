<template>
  <nav class="flex justify-end">
    <ul
      class="flex w-max items-center px-5 rounded-bl-lg border-b border-l border-opacity-20 border-zinc-900 dark:border-zinc-100 dark:border-opacity-20 text-sm font-medium text-gray-800 bg-white/90 dark:bg-neutral-800/90 dark:text-zinc-300"
    >
      <li v-for="item in items" :key="item.path">
        <ULink
          :to="item.path"
          class="relative px-3 text-base py-6 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
          active-class="text-primary-600 dark:text-primary-400"
        >
          {{ item.name }}
        </ULink>
      </li>
      <li>
        <ClientOnly>
          <UButton 
            :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'" 
            @click="isDark = !isDark"
            variant="ghost"
          />
        </ClientOnly>
      </li>
    </ul>
  </nav>
</template>

<script setup>

const route = useRoute()

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})


const items = [
  { name: "About me", path: "/", icon: "i-heroicons-academic-cap" },
  {
    name: "Resume",
    path: "/resume",
  },
];
</script>

<style scoped>
nav {
  top: 0;
  right: 0;
  position: absolute;
}

@media screen and (max-width: 580px){
  nav {
    position: fixed;
    top: unset;
    left: 0;
    bottom: 0;

    ul {
      width: 100%;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border: 1px solid;
      border-bottom: 0;
    }
  }
}
</style>