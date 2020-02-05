<template>
  <main class="page">
    <h1 class="page__heading">
      <slot name="pageTitle" />
    </h1>
    <p class="page__description">
      <slot name="pageDescription" />
    </p>
    <router-view />
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Page extends Vue {}
</script>

<style lang="scss" scoped>
@import "../Domelo.Styles/scss/typography/mixins";

.page {
  max-width: 68rem;
  padding: 1rem 2rem;
  margin: 0 auto;

  @media (min-width: 450px) {
    padding: 2.5rem 3.25rem;
  }

  &__heading {
    @include heading(var(--font-size-500));
    margin-top: 0;
  }

  &__description {
    @include body(var(--font-size-100));
    font-weight: 300;
  }
}
</style>
