<template>
    <page data-page="design-tokens">
        <template #pageTitle>Design tokens</template>
        <template #pageDescription>Design tokens are an abstraction of design decisions from the components that allow consistency between different themes and components.</template>
        <h2 class="heading--l">Design token types</h2>
        <h3 class="heading--subheading">Global tokens</h3>
        <p class="body--m">Global tokens store the raw values of the Domelo design system. E.g. Colors, font sizes, font weights, animation timings, etc.</p>
        <h3 class="heading--subheading">Alias tokens</h3>
        <p class="body--m">Alias tokens are the connection between global tokens and component tokens. They can often represent values that will be used more than once. E.g. Call to action colors, error/success colors, etc.</p>
        <h3 class="heading--subheading">Component tokens</h3>
        <p class="body--m">Component tokens are specific to a component.</p>
        <input type="checkbox" />
    </page>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Page from '@/components/Page.vue';

  @Component({
    components: { Page },
  })
  export default class DesignTokens extends Vue {}
</script>
