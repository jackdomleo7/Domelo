<template>
  <page data-page="home">
    <template #pageTitle>Domelo</template>
    <template #pageDescription>
      Domelo is a mobile-first design system created by <a href="https://jackdomleo.dev" target="_blank" rel="noreferrer">Jack Domleo</a> that provides a set of reusable components and provides guidelines on HTML semantics, CSS architecture, accessibility and UI/UX design.
    </template>
  </page>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  name: 'home',
  components: {
    Page
  }
}
</script>
