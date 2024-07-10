<template>
  <aside class="bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-opacity-10 border-zinc-900 dark:border-zinc-100 dark:border-opacity-20">
    <figure>
      <NuxtImg src="/me.png" sizes="" />
    </figure>

    <h1>Matheus Martins</h1>
    <span>Frontend Engineer</span>
  </aside>
</template>

<style scoped>
aside {
  position: sticky;
  top: 60px;
  border-radius: 14px;
  padding: 40px 30px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  padding: 0;
  margin: 1rem 0 .5rem;
}
h1::after {
  all: unset;
}

span {
  padding: .5rem 1rem;
  border-radius: 8px;
  background: #22222260;
}

figure {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient( to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97% );
  border-radius: 30px;
  width: 160px;
  height: 160px;

  img {
    width: 120px;
    -webkit-filter: drop-shadow(5px 5px 5px #22222210);
    filter: drop-shadow(5px 5px 5px #22222210);
  }

}


@media screen and (max-width: 580px){
  aside {
    position: relative;
    inset: 0;
  }
}
</style>