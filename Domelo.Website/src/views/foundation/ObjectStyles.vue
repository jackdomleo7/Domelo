<template>
  <page data-page="object-styles">
    <template #pageTitle>Object styles</template>
    <template #pageDescription>A set of global styles to apply to components.</template>
    <article id="rounding">
      <h2 class="heading--l">Rounding</h2>
    </article>
    <article id="box-shadow">
      <h2 class="heading--l">Box shadow</h2>
    </article>
  </page>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Page from '@/components/Page.vue';

  @Component({
    components: { Page },
  })
  export default class ObjectStyles extends Vue {}
</script>
