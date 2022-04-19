<template>
  <h1>{{ moduleData.text_field }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Text',
  props: ['moduleData'],
});
</script>
