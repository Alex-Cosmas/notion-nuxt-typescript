<script lang="ts" setup>
const { data } = await useFetch<{ posts: any[]; count: number }>("/api/notion");
</script>

<template>
  <div class="relative min-h-screen">
    <div class="pb-4 text-lg">Welcome to my blog</div>
    <section
      class="text-gray-600 body-font overflow-hidden md:container md:mx-auto mt-0 px-4 py-8 md:py-0"
    >
      <article v-if="data" v-for="post in data.posts">
        <h1 class="text-lg border-b">{{ post.title }}</h1>
        <Content :body="post.content" />
        <br />
      </article>
    </section>
  </div>
</template>
