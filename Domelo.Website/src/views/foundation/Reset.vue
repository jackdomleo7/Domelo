<template>
  <page data-page="reset-stylesheet">
    <template #pageTitle>Reset stylesheet</template>
    <template #pageDescription>Domelo embeds the Normalize.css reset stylesheet.</template>
    <article id="reset">
      <h2 class="heading--l">Reset stylesheet</h2>
      <p class="body--m">A CSS reset stylesheet is a short set of CSS rules that resets the styling of all HTML elements to a consistent baseline across browsers.</p>
    </article>
    <article id="normalize">
      <h2 class="heading--l">Normalize</h2>
      <p class="body--m"><a href="https://necolas.github.io/normalize.css/" target="_blank" rel="noreferrer nofollow">Normalize.css</a> is used within the Domelo design system to provide consistency across browsers. It was chosen because it is light, regularly maintained and popular. Current version: <a href="https://github.com/necolas/normalize.css/releases/tag/8.0.1" target="_blank" rel="noreferrer nofollow">v8.0.1</a>.</p>
    </article>
  </page>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Page from '@/components/Page.vue';

@Component({
  components: { Page },
})
export default class Reset extends Vue {}
</script>
