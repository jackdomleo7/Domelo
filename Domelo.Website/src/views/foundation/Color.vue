<template>
  <page data-page="colors">
    <template #pageTitle>Color</template>
    <template #pageDescription>Domelo colors are designed to be clear and accessible. There are two themes available, light and dark. Each theme consists of a range of greys and semantic colors.</template>
    <figure class="color-chart body--s">
      <section class="color-chart__section">
        <div class="color-chart__item color-chart__item--white">Static white</div>
        <div class="color-chart__item color-chart__item--black">Static black</div>
      </section>
      <section class="color-chart__section">
        <div class="color-chart__item color-chart__item--grey-50">Grey 50</div>
        <div class="color-chart__item color-chart__item--grey-75">Grey 75</div>
        <div class="color-chart__item color-chart__item--grey-100">Grey 100</div>
        <div class="color-chart__item color-chart__item--grey-200">Grey 200</div>
        <div class="color-chart__item color-chart__item--grey-300">Grey 300</div>
        <div class="color-chart__item color-chart__item--grey-400">Grey 400</div>
        <div class="color-chart__item color-chart__item--grey-500">Grey 500</div>
        <div class="color-chart__item color-chart__item--grey-600">Grey 600</div>
        <div class="color-chart__item color-chart__item--grey-700">Grey 700</div>
        <div class="color-chart__item color-chart__item--grey-800">Grey 800</div>
        <div class="color-chart__item color-chart__item--grey-900">Grey 900</div>
      </section>
      <section class="color-chart__section">
        <div class="color-chart__item color-chart__item--blue-400">Static blue 400</div>
        <div class="color-chart__item color-chart__item--blue-500">Blue 500</div>
        <div class="color-chart__item color-chart__item--blue-600">Blue 600</div>
        <div class="color-chart__item color-chart__item--blue-700">Blue 700</div>
      </section>
      <section class="color-chart__section">
        <div class="color-chart__item color-chart__item--red-400">Static Red 400</div>
        <div class="color-chart__item color-chart__item--red-500">Red 500</div>
        <div class="color-chart__item color-chart__item--red-600">Red 600</div>
        <div class="color-chart__item color-chart__item--red-700">Red 700</div>
      </section>
      <section class="color-chart__section">
        <div class="color-chart__item color-chart__item--orange-400">Static Orange 400</div>
        <div class="color-chart__item color-chart__item--orange-500">Orange 500</div>
        <div class="color-chart__item color-chart__item--orange-600">Orange 600</div>
        <div class="color-chart__item color-chart__item--orange-700">Orange 700</div>
      </section>
      <section class="color-chart__section">
        <div class="color-chart__item color-chart__item--green-400">Static Green 400</div>
        <div class="color-chart__item color-chart__item--green-500">Green 500</div>
        <div class="color-chart__item color-chart__item--green-600">Green 600</div>
        <div class="color-chart__item color-chart__item--green-700">Green 700</div>
      </section>
    </figure>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Page from '@/components/Page.vue';

@Component({
  components: { Page },
})
export default class Color extends Vue {}
</script>

<style lang="scss" scoped>
.color-chart {
  margin: 0;

  &__section {
    display: grid;
    grid-template: auto / 1fr;
    grid-gap: 1rem;
    margin: 3rem 0;

    @media screen and (min-width: 510px) {
      grid-template: auto / 1fr 1fr;
    }

    @media screen and (min-width: 700px) {
      grid-template: auto / 1fr 1fr 1fr;
    }

    @media screen and (min-width: 1150px) {
      grid-template: auto / 1fr 1fr 1fr 1fr;
    }
  }

  &__item {
    height: 6rem;
    width: 12rem;
    margin: 0 auto;
    padding: 0.5rem;
    transition: 160ms transform ease-in-out, 160ms box-shadow ease-in-out;
    font-weight: var(--font-weight-heavy);

    &:hover {
      box-shadow: var(--box-shadow);
      transform: scale(1.1);
    }

    &--white {
      background-color: rgba(var(--static-white), 1);
      color: rgba(var(--static-black), 1);
    }

    &--black {
      background-color: rgba(var(--static-black), 1);
      color: rgba(var(--static-white), 1);
    }

    &--grey-50 {
      background-color: rgba(var(--grey-50), 1);
    }

    &--grey-75 {
      background-color: rgba(var(--grey-75), 1);
    }

    &--grey-100 {
      background-color: rgba(var(--grey-100), 1);
    }

    &--grey-200 {
      background-color: rgba(var(--grey-200), 1);
    }

    &--grey-300 {
      background-color: rgba(var(--grey-300), 1);
    }

    &--grey-400 {
      background-color: rgba(var(--grey-400), 1);
    }

    &--grey-500 {
      background-color: rgba(var(--grey-500), 1);
    }

    &--grey-600 {
      background-color: rgba(var(--grey-600), 1);
    }

    &--grey-700 {
      background-color: rgba(var(--grey-700), 1);
    }

    &--grey-800 {
      background-color: rgba(var(--grey-800), 1);
    }

    &--grey-900 {
      background-color: rgba(var(--grey-900), 1);
    }

    &--blue-400 {
      background-color: rgba(var(--static-blue-400), 1);
    }

    &--blue-500 {
      background-color: rgba(var(--blue-500), 1);
    }

    &--blue-600 {
      background-color: rgba(var(--blue-600), 1);
    }

    &--blue-700 {
      background-color: rgba(var(--blue-700), 1);
    }

    &--red-400 {
      background-color: rgba(var(--static-red-400), 1);
    }

    &--red-500 {
      background-color: rgba(var(--red-500), 1);
    }

    &--red-600 {
      background-color: rgba(var(--red-600), 1);
    }

    &--red-700 {
      background-color: rgba(var(--red-700), 1);
    }

    &--orange-400 {
      background-color: rgba(var(--static-orange-400), 1);
    }

    &--orange-500 {
      background-color: rgba(var(--orange-500), 1);
    }

    &--orange-600 {
      background-color: rgba(var(--orange-600), 1);
    }

    &--orange-700 {
      background-color: rgba(var(--orange-700), 1);
    }

    &--green-400 {
      background-color: rgba(var(--static-green-400), 1);
    }

    &--green-500 {
      background-color: rgba(var(--green-500), 1);
    }

    &--green-600 {
      background-color: rgba(var(--green-600), 1);
    }

    &--green-700 {
      background-color: rgba(var(--green-700), 1);
    }

    &--grey-600,
    &--grey-700,
    &--grey-800,
    &--grey-900,
    &--blue-400,
    &--blue-500,
    &--blue-600,
    &--blue-700,
    &--red-400,
    &--red-500,
    &--red-600,
    &--red-700,
    &--orange-400,
    &--orange-500,
    &--orange-600,
    &--orange-700,
    &--green-400,
    &--green-500,
    &--green-600,
    &--green-700 {
      color: rgba(var(--text-content-high-color-revere), 1);
    }
  }
}
</style>
