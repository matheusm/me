<template>
  <aside
    class="bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-opacity-10 border-zinc-900 dark:border-zinc-100 dark:border-opacity-20">
    <div class="content flex flex-col items-center text-center">

      <figure>
        <NuxtImg src="/me.png" sizes="" />
      </figure>
      
      <div>
        <h1>Matheus Martins</h1>
        <span>Frontend Engineer</span>
      </div>
    </div>
      
    <hr class="w-full my-4 border-zinc-700">

    <div class="flex flex-col gap-3 text-center">
      <a href="mailto:matheusms280100@gmail.com" class="contact-link">Email</a>
      <a target="_blank" class="hover:text-blue-500 transition-all duration-100 ease-in" href="https://www.linkedin.com/in/martinscode/">Linkedin</a>
      <a target="_blank" class="hover:text-zinc-50 transition-all duration-100 ease-in" href="https://github.com/matheusm">Github</a>
    </div>

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
  background: linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%);
  border-radius: 30px;
  width: 160px;
  height: 160px;

  img {
    width: 120px;
    -webkit-filter: drop-shadow(5px 5px 5px #22222210);
    filter: drop-shadow(5px 5px 5px #22222210);
  }

}

@media (max-width: 1250px) {
  aside {
    position: relative;
    inset: 0;
    justify-content: space-between;

    width: 100%;
    flex-direction: row;

    hr {
      display: none;
    }

    .content {
      display: flex;

      gap: 16px;
    }
  }
}

@media screen and (max-width: 550px) {
  aside {
    flex-direction: column;
    padding: 30px 10px;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-top: 0;
      }

      div {
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
