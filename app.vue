<template>
  <div class="container">
    <AsideApp />
    <main class="relative">
      <Navbar />
      <NuxtPage/>
    </main>
  </div>
</template>

<style>
body {
  -webkit-font-smoothing: antialiased;
  @apply text-neutral-800 dark:text-zinc-300;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  align-items: flex-start;
  @apply flex gap-4 justify-center;

  main {
    @apply bg-neutral-100 dark:bg-neutral-900 flex-1 h-full w-full rounded-xl border border-opacity-10 border-zinc-900 dark:border-zinc-100 dark:border-opacity-20;
  }

  aside {
    flex-grow: 0;
    height: auto;
  }
}

@media screen and (max-width: 1250px){
  .container {
    max-width: 950px;
    flex-direction: column;
  }
}

@media screen and (max-width: 1025px){
  .container {
    max-width: 700px;
  }
}

@media screen and (max-width: 770px){
  .container {
    max-width: 520px;
  }
}

@media screen and (max-width: 580px){
  .container {
    padding: 10px;
    max-width: 100%;
  }
}
</style>
