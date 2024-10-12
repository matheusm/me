<template>
  <article class="timeline p-10 transition-all ease-out">
    <h1>Resume</h1>

    <div class="title-wrapper">
      <div class="icon-box dark:bg-neutral-800 bg-neutral-200 dark:text-primary text-purple-900">
        <UIcon name="i-heroicons-book-open" class="text-2xl"/>
      </div>

      <h3 class="h3">Experience</h3>
    </div>
    <ol class="timeline-list">
      <li class="timeline-item" v-for="item in data">

        <h4 class="h4 timeline-item-title ">{{ item.title }} </h4>
        <span class="dark:text-purple-400 text-purple-800">{{ item.date }}</span> <br>
        <span class="text-sm">{{ item.location }}</span> 


        <p class="timeline-text dark:text-neutral-400 text-neutral-700" v-for="desc in item.description">
          - {{ desc }}
        </p>

      </li>
    </ol>
  </article>
</template>

<script setup>
const { data } = await useAsyncData("carrer-all", async () => {
  const it = await queryContent("/carrer").find()
  return it[0].body
});

</script>

<style scoped>
.icon-box {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  z-index: 1;
}

.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  z-index: -1;
}

.timeline .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.timeline-item {
  position: relative;
}

.timeline-item:not(:last-child)::before {
  content: "";
  position: absolute;
  top: -25px;
  left: -18px;
  width: 1px;
  height: calc(100% + 50px);
  background: hsl(0, 0%, 22%);
}

.timeline-item:not(:last-child) {
  margin-bottom: 20px;
}

.timeline-item::after {
  content: "";
  position: absolute;
  top: 11px;
  left: -21px;
  height: 6px;
  width: 6px;
  background: linear-gradient(to right,
      hsl(45, 100%, 72%),
      hsl(35, 100%, 68%));
  border-radius: 50%;
  box-shadow: 0 0 0 4px hsl(0, 0%, 22%);
}

.timeline-item-title {
  line-height: normal;
  font-size: 1.5rem;
}

@media (min-width: 580px) {
  .timeline-list {
    margin-left: 65px;
  }

  .timeline-item::after {
    height: 8px;
    width: 8px;
    left: -43px;
  }

  .timeline-item:not(:last-child)::before {
    left: -40px;
  }

  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    font-size: 18px;
  }
}

@media (min-width: 1250px) {
  .timeline-text {
    max-width: 700px;
  }

}

@media screen and (max-width: 580px){
  .timeline .title-wrapper {
    margin-left: -32px;
  }
}
</style>