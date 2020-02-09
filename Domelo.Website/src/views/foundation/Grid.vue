<template>
  <page data-page="grid">
    <template #pageTitle>Grid</template>
    <template #pageDescription>Domelo works really well with any grid system.</template>
    <article id="grids">
      <h2 class="heading--m">Grids</h2>
      <p class="body--m">Domelo does not have its own grid system, nor does it embed a third party grid system. However, Domelo can be used alongside any grid system. These will have to be embedded into your application separately.</p>
      <p class="body--m">Potential grid systems:</p>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noreferrer nofollow">CSS Grid (Used in this website)</a></li>
        <li><a href="https://getbootstrap.com/docs/4.4/layout/grid/" target="_blank" rel="noreferrer nofollow">Bootstrap Grid</a></li>
        <li><a href="https://bulma.io/documentation/columns/" target="_blank" rel="noreferrer nofollow">Bulma Grid</a></li>
        <li><a href="https://haltu.github.io/muuri/" target="_blank" rel="noreferrer nofollow">Muuri</a></li>
      </ul>
    </article>
  </page>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Page from '@/components/Page.vue';

  @Component({
    components: { Page },
  })
  export default class Grid extends Vue {}
</script>
