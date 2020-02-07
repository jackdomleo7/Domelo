<template>
  <page data-page="home">
    <template #pageTitle>Domelo</template>
    <template #pageDescription>
      Domelo is a mobile-first design system created by <a href="https://jackdomleo.dev" target="_blank" rel="noreferrer">Jack Domleo</a> that provides a set of reusable components and provides guidelines on HTML semantics, CSS architecture, accessibility and UI/UX design.
    </template>
    <article>
      This is a self-learning project for my personal development and enjoyment. I am inspired by many different resources and articles such as <a href="https://spectrum.adobe.com" target="_blank" rel="noreferrer nofollow">Adobe Spectrum</a>, <a href="https://ux.mailchimp.com" target="_blank" rel="noreferrer nofollow">UX Mailchimp</a>, <a href="https://getbootstrap.com" target="_blank" rel="noreferrer nofollow">Bootstrap</a> and many more design systems. My intention is not to copy pre-existing design systems but to be inspired and influenced to create my own and further my understanding about UI/UX and front-end development.
    </article>
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
