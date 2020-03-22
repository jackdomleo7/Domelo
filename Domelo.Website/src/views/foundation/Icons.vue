<template>
  <page data-page="icons">
    <template #pageTitle>Icons</template>
    <template #pageDescription>Icons are designed to give a simple, clear and minimal representation with widespread recognition across the web and should be used sparingly. Domelo provides its own SVG sprite or you can use your own SVG icons.</template>
    <article id="svg">
      <h2 class="heading--l">SVGs</h2>
      <p class="body--m">Domelo works well with any SVG (Scalable Vector Graphic) icon set.</p>
    </article>
  </page>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Page from '@/components/Page.vue';

  @Component({
    components: { Page },
  })
  export default class Icons extends Vue {}
</script>
