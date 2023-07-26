<script lang="ts" setup>
const props = defineProps(["body"]);
</script>

<template>
  <div v-if="props.body.length > 0" v-for="p in props.body">
    <p v-if="p.paragraph.rich_text.length > 0">
      {{ p.paragraph.rich_text[0].plain_text }}
    </p>
    <br v-else />
  </div>
</template>
