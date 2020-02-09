<template>
  <main class="page">
    <h1 class="heading--l page__heading">
      <slot name="pageTitle" />
    </h1>
    <p class="body--m page__description">
      <slot name="pageDescription" />
    </p>
    <slot />
    <router-view />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Page extends Vue {}
</script>

<style lang="scss" scoped>
.page {
  margin: 0 auto;
  max-width: 68rem;
  padding: 1rem 2rem;

  @media (min-width: 450px) {
    padding: 2.5rem 3.25rem;
  }

  &__heading {
    margin-top: 0;
  }

  &__description {
    font-weight: var(--font-weight-light);
  }
}
</style>
